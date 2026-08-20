// ============================================================
// Draft state, shared across every page via localStorage so
// checking a player off on one page updates all the others —
// including other tabs open at the same time.
// ============================================================

const DRAFT_STORE_KEY = 'ff-draft-tracker:drafted-v1';

function getDraftedSet() {
  try {
    const raw = localStorage.getItem(DRAFT_STORE_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (e) {
    return new Set();
  }
}

function saveDraftedSet(set) {
  localStorage.setItem(DRAFT_STORE_KEY, JSON.stringify(Array.from(set)));
  window.dispatchEvent(new CustomEvent('draft-store-change'));
}

function isPlayerDrafted(name) {
  return getDraftedSet().has(name);
}

function setPlayerDrafted(name, drafted) {
  const set = getDraftedSet();
  if (drafted) set.add(name); else set.delete(name);
  saveDraftedSet(set);
}

function togglePlayerDrafted(name) {
  const set = getDraftedSet();
  const next = !set.has(name);
  if (next) set.add(name); else set.delete(name);
  saveDraftedSet(set);
  return next;
}

function resetDraftedSet() {
  saveDraftedSet(new Set());
}

// Fires cb() whenever draft state changes — in this tab (custom event)
// or another tab pointed at the same file (native storage event).
function onDraftStoreChange(cb) {
  window.addEventListener('draft-store-change', cb);
  window.addEventListener('storage', (e) => {
    if (e.key === DRAFT_STORE_KEY) cb();
  });
}
