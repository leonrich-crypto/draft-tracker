// ============================================================
// Sleeper.app live sync.
// Public, read-only API — no login/API key needed:
// https://docs.sleeper.com/
//
// Draft picks come back with player name/team/position already
// embedded in `metadata`, so no need to fetch Sleeper's giant
// player database dump.
// ============================================================

const SLEEPER_CONFIG_KEY = 'ff-draft-tracker:sleeper-config-v1';
const MY_PICKS_KEY = 'ff-draft-tracker:my-picks-v1';
const SLEEPER_POLL_MS = 15000;

function getSleeperConfig() {
  try {
    const raw = localStorage.getItem(SLEEPER_CONFIG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setSleeperConfig(cfg) {
  localStorage.setItem(SLEEPER_CONFIG_KEY, JSON.stringify(cfg));
  window.dispatchEvent(new CustomEvent('sleeper-config-change'));
}

function clearSleeperConfig() {
  localStorage.removeItem(SLEEPER_CONFIG_KEY);
  localStorage.removeItem(MY_PICKS_KEY);
  window.dispatchEvent(new CustomEvent('sleeper-config-change'));
  window.dispatchEvent(new CustomEvent('my-picks-change'));
}

function onSleeperConfigChange(cb) {
  window.addEventListener('sleeper-config-change', cb);
  window.addEventListener('storage', (e) => { if (e.key === SLEEPER_CONFIG_KEY) cb(); });
}

function getMyPicksSet() {
  try {
    const raw = localStorage.getItem(MY_PICKS_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (e) {
    return new Set();
  }
}

function saveMyPicksSet(set) {
  localStorage.setItem(MY_PICKS_KEY, JSON.stringify(Array.from(set)));
  window.dispatchEvent(new CustomEvent('my-picks-change'));
}

function onMyPicksChange(cb) {
  window.addEventListener('my-picks-change', cb);
  window.addEventListener('storage', (e) => { if (e.key === MY_PICKS_KEY) cb(); });
}

// ---------- Name matching ----------

function sleeperNormalize(name) {
  return name
    .replace(/[.'’-]/g, '')
    .replace(/\s+(Jr|Sr|II|III|IV)\.?$/i, '')
    .toLowerCase()
    .trim();
}

function findPlayerBySleeperPick(pick) {
  if (!pick.metadata || !pick.metadata.first_name) return null;
  const target = sleeperNormalize(pick.metadata.first_name + ' ' + pick.metadata.last_name);
  // Defenses come through as a team code with no first/last name pair worth matching on;
  // match those by team + DEF position instead.
  if (pick.metadata.position === 'DEF' || pick.player_id && /^[A-Z]{2,3}$/.test(pick.player_id)) {
    return PLAYERS.find(p => p.pos === 'DEF' && p.team === pick.metadata.team) || null;
  }
  return PLAYERS.find(p => sleeperNormalize(p.player) === target) || null;
}

// ---------- Sleeper API calls ----------

async function sleeperLookupUser(username) {
  const res = await fetch(`https://api.sleeper.app/v1/user/${encodeURIComponent(username)}`);
  if (!res.ok) throw new Error('Sleeper username not found');
  const data = await res.json();
  if (!data || !data.user_id) throw new Error('Sleeper username not found');
  return data;
}

async function sleeperFetchLeagues(userId, season) {
  const res = await fetch(`https://api.sleeper.app/v1/user/${userId}/leagues/nfl/${season}`);
  if (!res.ok) throw new Error('Could not load leagues for this user');
  return res.json();
}

async function sleeperFetchPicks(draftId) {
  const res = await fetch(`https://api.sleeper.app/v1/draft/${draftId}/picks`);
  if (!res.ok) throw new Error('Could not load draft picks');
  return res.json();
}

// ---------- Sync loop ----------

let sleeperPollHandle = null;
let sleeperSyncListeners = [];

function onSleeperSyncTick(cb) {
  sleeperSyncListeners.push(cb);
}

async function sleeperSyncOnce() {
  const cfg = getSleeperConfig();
  if (!cfg || !cfg.draftId) return { ok: false, reason: 'not-configured' };

  try {
    const picks = await sleeperFetchPicks(cfg.draftId);
    const drafted = getDraftedSet();
    const myPicks = getMyPicksSet();
    let draftedChanged = false;
    let myChanged = false;
    let matchedCount = 0;

    picks.forEach((pick) => {
      const player = findPlayerBySleeperPick(pick);
      if (!player) return;
      matchedCount++;
      if (!drafted.has(player.player)) {
        drafted.add(player.player);
        draftedChanged = true;
      }
      const isMine = cfg.userId && String(pick.picked_by) === String(cfg.userId);
      if (isMine && !myPicks.has(player.player)) {
        myPicks.add(player.player);
        myChanged = true;
      }
    });

    if (draftedChanged) saveDraftedSet(drafted);
    if (myChanged) saveMyPicksSet(myPicks);

    cfg.lastSyncedAt = Date.now();
    cfg.totalPicks = picks.length;
    cfg.matchedPicks = matchedCount;
    setSleeperConfig(cfg);

    sleeperSyncListeners.forEach((cb) => cb({ ok: true, totalPicks: picks.length, matchedPicks: matchedCount }));
    return { ok: true, totalPicks: picks.length, matchedPicks: matchedCount };
  } catch (e) {
    sleeperSyncListeners.forEach((cb) => cb({ ok: false, error: e.message }));
    return { ok: false, error: e.message };
  }
}

function startSleeperPolling() {
  if (sleeperPollHandle) return;
  sleeperSyncOnce();
  sleeperPollHandle = setInterval(sleeperSyncOnce, SLEEPER_POLL_MS);
}

function stopSleeperPolling() {
  if (sleeperPollHandle) {
    clearInterval(sleeperPollHandle);
    sleeperPollHandle = null;
  }
}

// Auto-start if a league is already connected from a previous visit.
if (getSleeperConfig()) {
  startSleeperPolling();
}
