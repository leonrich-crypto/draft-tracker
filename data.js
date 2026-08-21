// ============================================================
// Shared data for the draft tracker. Every page loads this file
// so player info only lives in one place.
// ============================================================

const PLAYERS = [
  {pos:'QB',rank:1,player:'Josh Allen',team:'BUF',pts:374.5,ppg:22.0},
  {pos:'QB',rank:2,player:'Drake Maye',team:'NE',pts:359.9,ppg:21.2},
  {pos:'QB',rank:3,player:'Matthew Stafford',team:'LAR',pts:358.3,ppg:21.1},
  {pos:'QB',rank:4,player:'Trevor Lawrence',team:'JAC',pts:350.1,ppg:20.6},
  {pos:'QB',rank:5,player:'Caleb Williams',team:'CHI',pts:325.3,ppg:19.1},
  {pos:'QB',rank:6,player:'Dak Prescott',team:'DAL',pts:323.8,ppg:19.0},
  {pos:'QB',rank:7,player:'Bo Nix',team:'DEN',pts:315.8,ppg:18.6},
  {pos:'QB',rank:8,player:'Jared Goff',team:'DET',pts:305.1,ppg:17.9},
  {pos:'QB',rank:9,player:'Jalen Hurts',team:'PHI',pts:305.0,ppg:19.1},
  {pos:'QB',rank:10,player:'Justin Herbert',team:'LAC',pts:299.8,ppg:18.7},
  {pos:'QB',rank:11,player:'Patrick Mahomes II',team:'KC',pts:296.7,ppg:21.2},
  {pos:'QB',rank:12,player:'Baker Mayfield',team:'TB',pts:282.9,ppg:16.6},
  {pos:'QB',rank:13,player:'Sam Darnold',team:'SEA',pts:249.4,ppg:14.7},
  {pos:'QB',rank:14,player:'Jaxson Dart',team:'NYG',pts:246.5,ppg:17.6},
  {pos:'QB',rank:15,player:'Jordan Love',team:'GB',pts:241.3,ppg:16.1},
  {pos:'QB',rank:16,player:'Jacoby Brissett',team:'ARI',pts:235.4,ppg:16.8},
  {pos:'QB',rank:17,player:'Daniel Jones',team:'IND',pts:234.4,ppg:18.0},
  {pos:'QB',rank:18,player:'Aaron Rodgers',team:'PIT',pts:228.1,ppg:15.2},
  {pos:'QB',rank:19,player:'Kyler Murray',team:'MIN',pts:222.5,ppg:15.9},
  {pos:'QB',rank:20,player:'Jayden Daniels',team:'WAS',pts:218.4,ppg:18.2},
  {pos:'QB',rank:21,player:'Kirk Cousins',team:'LV',pts:215.2,ppg:14.3},
  {pos:'QB',rank:22,player:'Lamar Jackson',team:'BAL',pts:210.8,ppg:17.6},
  {pos:'QB',rank:23,player:'Tua Tagovailoa',team:'ATL',pts:208.5,ppg:13.9},
  {pos:'QB',rank:24,player:'Brock Purdy',team:'SF',pts:205.1,ppg:14.6},
  {pos:'QB',rank:25,player:'C.J. Stroud',team:'HOU',pts:201.3,ppg:13.4},
  {pos:'QB',rank:26,player:'Michael Penix Jr.',team:'ATL',pts:118.0,ppg:8.4},
  {pos:'RB',rank:1,player:'Christian McCaffrey',team:'SF',pts:416.6,ppg:24.5},
  {pos:'RB',rank:2,player:'Bijan Robinson',team:'ATL',pts:370.8,ppg:21.8},
  {pos:'RB',rank:3,player:'Jahmyr Gibbs',team:'DET',pts:366.9,ppg:21.6},
  {pos:'RB',rank:4,player:'Jonathan Taylor',team:'IND',pts:362.3,ppg:21.3},
  {pos:'RB',rank:5,player:"De'Von Achane",team:'MIA',pts:322.8,ppg:20.2},
  {pos:'RB',rank:6,player:'James Cook III',team:'BUF',pts:302.2,ppg:17.8},
  {pos:'RB',rank:7,player:'Chase Brown',team:'CIN',pts:282.6,ppg:16.6},
  {pos:'RB',rank:8,player:'Derrick Henry',team:'BAL',pts:279.5,ppg:16.4},
  {pos:'RB',rank:9,player:'Kyren Williams',team:'LAR',pts:263.3,ppg:15.5},
  {pos:'RB',rank:10,player:'Travis Etienne Jr.',team:'JAC',pts:253.9,ppg:14.9},
  {pos:'RB',rank:11,player:'Ashton Jeanty',team:'LV',pts:245.1,ppg:14.4},
  {pos:'RB',rank:12,player:'Javonte Williams',team:'DAL',pts:242.8,ppg:15.2},
  {pos:'RB',rank:13,player:'Josh Jacobs',team:'GB',pts:237.1,ppg:15.8},
  {pos:'RB',rank:14,player:'Saquon Barkley',team:'PHI',pts:232.3,ppg:14.5},
  {pos:'RB',rank:15,player:"D'Andre Swift",team:'CHI',pts:228.6,ppg:14.3},
  {pos:'RB',rank:16,player:'Kenny Gainwell',team:'PIT',pts:221.3,ppg:13.0},
  {pos:'RB',rank:17,player:'Jaylen Warren',team:'PIT',pts:217.1,ppg:13.6},
  {pos:'RB',rank:18,player:'Rico Dowdle',team:'CAR',pts:216.3,ppg:12.7},
  {pos:'RB',rank:19,player:'Bucky Irving',team:'TB',pts:214.5,ppg:13.4},
  {pos:'RB',rank:20,player:'Rhamondre Stevenson',team:'NE',pts:210.8,ppg:13.2},
  {pos:'RB',rank:21,player:'Tony Pollard',team:'TEN',pts:208.2,ppg:12.3},
  {pos:'RB',rank:22,player:'Breece Hall',team:'NYJ',pts:205.4,ppg:12.8},
  {pos:'RB',rank:23,player:'Isiah Pacheco',team:'KC',pts:202.1,ppg:12.6},
  {pos:'RB',rank:24,player:'Kenneth Walker III',team:'SEA',pts:198.5,ppg:12.4},
  {pos:'RB',rank:25,player:'Najee Harris',team:'LAC',pts:195.2,ppg:11.5},
  {pos:'WR',rank:1,player:'Puka Nacua',team:'LAR',pts:375.0,ppg:23.4},
  {pos:'WR',rank:2,player:'Jaxon Smith-Njigba',team:'SEA',pts:359.9,ppg:21.2},
  {pos:'WR',rank:3,player:"Amon-Ra St. Brown",team:'DET',pts:324.0,ppg:19.1},
  {pos:'WR',rank:4,player:"Ja'Marr Chase",team:'CIN',pts:313.6,ppg:19.6},
  {pos:'WR',rank:5,player:'George Pickens',team:'DAL',pts:291.9,ppg:17.2},
  {pos:'WR',rank:6,player:'Chris Olave',team:'NO',pts:269.0,ppg:16.8},
  {pos:'WR',rank:7,player:'Zay Flowers',team:'BAL',pts:243.3,ppg:14.3},
  {pos:'WR',rank:8,player:'Nico Collins',team:'HOU',pts:226.2,ppg:15.1},
  {pos:'WR',rank:9,player:'Davante Adams',team:'LAR',pts:222.9,ppg:15.9},
  {pos:'WR',rank:10,player:'Michael Wilson',team:'ARI',pts:220.6,ppg:13.0},
  {pos:'WR',rank:11,player:'A.J. Brown',team:'PHI',pts:220.3,ppg:14.7},
  {pos:'WR',rank:12,player:'Jameson Williams',team:'DET',pts:219.9,ppg:12.9},
  {pos:'WR',rank:13,player:'Courtland Sutton',team:'DEN',pts:219.7,ppg:12.9},
  {pos:'WR',rank:14,player:"Wan'Dale Robinson",team:'NYG',pts:217.9,ppg:13.6},
  {pos:'WR',rank:15,player:'Tee Higgins',team:'CIN',pts:211.6,ppg:14.1},
  {pos:'WR',rank:16,player:'Tetairoa McMillan',team:'CAR',pts:211.4,ppg:12.4},
  {pos:'WR',rank:17,player:'Stefon Diggs',team:'NE',pts:210.3,ppg:12.4},
  {pos:'WR',rank:18,player:'Michael Pittman Jr.',team:'IND',pts:202.4,ppg:11.9},
  {pos:'WR',rank:19,player:'Drake London',team:'ATL',pts:199.8,ppg:16.7},
  {pos:'WR',rank:20,player:'Khalil Shakir',team:'BUF',pts:198.5,ppg:11.7},
  {pos:'WR',rank:21,player:'CeeDee Lamb',team:'DAL',pts:196.2,ppg:15.1},
  {pos:'WR',rank:22,player:'Justin Jefferson',team:'MIN',pts:195.4,ppg:13.0},
  {pos:'WR',rank:23,player:'Brian Thomas Jr.',team:'JAC',pts:192.1,ppg:11.3},
  {pos:'WR',rank:24,player:'Terry McLaurin',team:'WAS',pts:188.7,ppg:11.1},
  {pos:'WR',rank:25,player:'Jaylen Waddle',team:'MIA',pts:185.3,ppg:10.9},
  {pos:'TE',rank:1,player:'Trey McBride',team:'ARI',pts:315.9,ppg:18.6},
  {pos:'TE',rank:2,player:'Kyle Pitts Sr.',team:'ATL',pts:210.8,ppg:12.4},
  {pos:'TE',rank:3,player:'Travis Kelce',team:'KC',pts:193.2,ppg:11.4},
  {pos:'TE',rank:4,player:'Tyler Warren',team:'IND',pts:188.5,ppg:11.1},
  {pos:'TE',rank:5,player:'Jake Ferguson',team:'DAL',pts:188.1,ppg:11.1},
  {pos:'TE',rank:6,player:'Harold Fannin Jr.',team:'CLE',pts:186.4,ppg:11.7},
  {pos:'TE',rank:7,player:'Dallas Goedert',team:'PHI',pts:185.1,ppg:12.3},
  {pos:'TE',rank:8,player:'Juwan Johnson',team:'NO',pts:179.9,ppg:10.6},
  {pos:'TE',rank:9,player:'Hunter Henry',team:'NE',pts:178.8,ppg:10.5},
  {pos:'TE',rank:10,player:'Dalton Schultz',team:'HOU',pts:177.7,ppg:10.5},
  {pos:'TE',rank:11,player:'Brock Bowers',team:'LV',pts:176.2,ppg:14.7},
  {pos:'TE',rank:12,player:'Colston Loveland',team:'CHI',pts:165.1,ppg:10.3},
  {pos:'TE',rank:13,player:'George Kittle',team:'SF',pts:161.5,ppg:14.7},
  {pos:'TE',rank:14,player:'AJ Barner',team:'SEA',pts:147.3,ppg:8.7},
  {pos:'TE',rank:15,player:'Oronde Gadsden II',team:'LAC',pts:131.4,ppg:8.8},
  {pos:'TE',rank:16,player:'Mark Andrews',team:'BAL',pts:131.0,ppg:7.7},
  {pos:'TE',rank:17,player:'Colby Parkinson',team:'LAR',pts:129.8,ppg:8.7},
  {pos:'TE',rank:18,player:'Theo Johnson',team:'NYG',pts:127.8,ppg:8.5},
  {pos:'TE',rank:19,player:'Zach Ertz',team:'WAS',pts:126.4,ppg:9.7},
  {pos:'TE',rank:20,player:'Dalton Kincaid',team:'BUF',pts:126.1,ppg:10.5},
  {pos:'TE',rank:21,player:'Chig Okonkwo',team:'WAS',pts:124.0,ppg:7.3},
  {pos:'TE',rank:22,player:'Cade Otton',team:'TB',pts:122.2,ppg:7.6},
  {pos:'TE',rank:23,player:'Brenton Strange',team:'JAC',pts:118.0,ppg:9.8},
  {pos:'TE',rank:24,player:'Tucker Kraft',team:'GB',pts:117.2,ppg:14.6},
  {pos:'TE',rank:25,player:'Pat Freiermuth',team:'PIT',pts:113.6,ppg:6.7},
  {pos:'K',rank:1,player:'Brandon Aubrey',team:'DAL',pts:162.0,ppg:9.5},
  {pos:'K',rank:2,player:'Harrison Butker',team:'KC',pts:153.0,ppg:9.0},
  {pos:'K',rank:3,player:'Justin Tucker',team:'BAL',pts:148.0,ppg:8.7},
  {pos:'K',rank:4,player:"Ka'imi Fairbairn",team:'HOU',pts:146.0,ppg:8.6},
  {pos:'K',rank:5,player:'Evan McPherson',team:'CIN',pts:141.0,ppg:8.3},
  {pos:'K',rank:6,player:'Jake Elliott',team:'PHI',pts:141.0,ppg:8.3},
  {pos:'K',rank:7,player:'Cameron Dicker',team:'LAC',pts:139.0,ppg:8.2},
  {pos:'K',rank:8,player:'Tyler Bass',team:'BUF',pts:138.0,ppg:8.1},
  {pos:'K',rank:9,player:'Younghoe Koo',team:'ATL',pts:138.0,ppg:8.1},
  {pos:'K',rank:10,player:'Jason Sanders',team:'MIA',pts:133.0,ppg:7.8}
];

// Give every player a stable id (index is fine — PLAYERS is a fixed list).
PLAYERS.forEach((p, i) => { p.id = i; });

const POSITION_ORDER = ['QB', 'RB', 'WR', 'TE', 'K'];

// Sourced from live training-camp coverage (CBS Sports SportsLine model,
// FantasyPros, Yahoo Sports, SI/On SI) as of August 20, 2026.
// Sourced from live training-camp coverage (CBS Sports SportsLine model,
// FantasyPros, Yahoo Sports, NFL.com, ESPN, FanDuel Research, RotoWire,
// RotoBaller, Athlon, ClutchPoints) as of Aug 20, 2026.
const SLEEPERS = [
  // ---- QB ----
  {
    player: 'Jacoby Brissett',
    pos: 'QB', team: 'ARI',
    category: 'Prove-It Starter',
    round: 'Late-round QB2',
    upside: 'Threw for 3,300 yards and 23 TDs in 12 starts last year; now gets a full offseason as QB1 with McBride, Harrison Jr. and Jeremiyah Love',
    risk: 'Journeyman ceiling — hasn\'t sustained a full season as a starter before'
  },
  {
    player: 'Tyler Shough',
    pos: 'QB', team: 'NO',
    category: 'Sophomore Breakout',
    round: 'QB20 ADP, low-end QB2',
    upside: "Kellen Moore's tempo-heavy scheme has a track record of fantasy-friendly QB numbers; explosive rookie speed at receiver around him",
    risk: 'Unproven over a full season as a starter'
  },
  {
    player: 'Kyler Murray',
    pos: 'QB', team: 'MIN',
    category: 'Fresh Start',
    round: 'Named Week 1 starter Aug. 19',
    upside: 'Released by Arizona, signed with Minnesota and beat out J.J. McCarthy for the job; elite rushing floor plus Justin Jefferson as a target',
    risk: 'Landing-spot uncertainty depressed his ADP; missed time last year with a foot injury'
  },
  {
    player: 'Malik Willis',
    pos: 'QB', team: 'MIA',
    category: 'Deep Dart Throw',
    round: 'Deep-league / 2QB only',
    upside: 'Rushing floor alone could make him a streaming option — a shot at the NFL single-season QB rush attempts record isn\'t out of the question',
    risk: 'Miami\'s pass-catching corps is one of the league\'s thinnest'
  },
  // ---- RB ----
  {
    player: 'Jeremiyah Love',
    pos: 'RB', team: 'ARI',
    category: 'Rookie Weapon',
    round: 'No. 4 overall pick',
    upside: 'Joins a Cardinals offense with Trey McBride and a full season of Jacoby Brissett as starter',
    risk: 'Rookie touch-share is never guaranteed even for top picks'
  },
  {
    player: 'Woody Marks',
    pos: 'RB', team: 'HOU',
    category: 'Camp Winner',
    round: 'Value RB2',
    upside: 'Won the Texans\' backfield job outright, pushing veteran Nick Chubb out of the picture entirely by midseason last year',
    risk: 'Houston could still add competition; unproven as a full-time back'
  },
  {
    player: 'Jonathon Brooks',
    pos: 'RB', team: 'CAR',
    category: 'Post-Hype Sleeper',
    round: 'ADP ~125',
    upside: 'Full year removed from a knee injury in a run-heavy Panthers offense',
    risk: 'Suffered two ACL tears in the same knee within 13 months — real injury history to weigh'
  },
  {
    player: 'Jonah Coleman',
    pos: 'RB', team: 'DEN',
    category: 'Depth Chart Climber',
    round: 'Denver\'s RB3',
    upside: 'Could inherit early-down work opposite R.J. Harvey if J.K. Dobbins gets hurt again, which is a real possibility',
    risk: 'Buried on the depth chart unless an injury opens the door'
  },
  {
    player: 'Nicholas Singleton',
    pos: 'RB', team: 'TEN',
    category: 'Deep Sleeper',
    round: 'ADP ~233 / RB62',
    upside: 'Explosive rookie fifth-rounder in a genuinely open Titans backfield — Pollard and Spears both have real question marks',
    risk: 'Currently buried behind three other backs on the depth chart'
  },
  {
    player: 'Emmett Johnson',
    pos: 'RB', team: 'KC',
    category: 'Landing Spot Lottery',
    round: 'Deep-league stash',
    upside: 'Big Ten Running Back of the Year who fell to Round 5 on testing, not talent — the Chiefs landing him is a dream outcome',
    risk: 'Buried on the depth chart behind the incumbent starter for now'
  },
  {
    player: 'Tank Bigsby',
    pos: 'RB', team: 'PHI',
    category: 'Efficiency Bench Piece',
    round: 'Available outside top 150',
    upside: 'Averaged 5.9 yards/carry in a limited Eagles role last year and flashed a 104-yard game — clear RB2 insurance behind Saquon Barkley',
    risk: 'Barkley\'s workload leaves little room unless he\'s limited'
  },
  // ---- WR ----
  {
    player: 'Alec Pierce',
    pos: 'WR', team: 'IND',
    category: 'Volume Riser',
    round: "Colts' new clear-cut WR1",
    upside: 'Led the NFL at 21.3 yards/reception in 2025; signed a big new contract this offseason',
    risk: 'Boom/bust — averaged only 3.1 catches/game; low floor even with big-play ceiling'
  },
  {
    player: 'DeVonta Smith',
    pos: 'WR', team: 'PHI',
    category: 'Post-Trade Value',
    round: 'ADP ~ Round 3',
    upside: 'Inherits the Eagles\' clear WR1 role now that A.J. Brown was sent to New England; hit 1,000 yards even in a bottom-10 passing offense last year',
    risk: 'Philly\'s offensive identity still runs through the ground game'
  },
  {
    player: "De'Zhaun Stribling",
    pos: 'WR', team: 'SF',
    category: 'Rookie Opportunity',
    round: 'Late-round dart throw',
    upside: 'Slots in as SF\'s No. 3 target with Ricky Pearsall out for the year; familiar territory in a Kyle Shanahan offense',
    risk: 'Now sharing snaps with newly-signed veterans Mike Evans and Deebo Samuel Sr., not a clean path to volume'
  },
  {
    player: 'Rome Odunze',
    pos: 'WR', team: 'CHI',
    category: 'Injury Beneficiary',
    round: 'ADP climbing as camp progresses',
    upside: 'Poised for a bump in early-season targets while Luther Burden III (groin) is expected to miss the preseason',
    risk: 'Burden is expected back for Week 1, capping the runway'
  },
  {
    player: 'Jordyn Tyson',
    pos: 'WR', team: 'NO',
    category: 'Rookie Speed',
    round: 'Deep-league dart throw',
    upside: 'Gives New Orleans a legitimate explosive threat if he stays healthy through camp',
    risk: 'Rookie WR volatility, tied to Shough\'s development'
  },
  {
    player: 'Josh Downs',
    pos: 'WR', team: 'IND',
    category: 'Value Pick',
    round: 'Colts No. 2 option',
    upside: 'Reliable slot role behind Alec Pierce in a top-ranked Colts offense',
    risk: 'Dealing with a minor groin issue in camp; ceiling capped by Pierce\'s target share'
  },
  {
    player: 'Tank Dell',
    pos: 'WR', team: 'HOU',
    category: 'Post-Hype Sleeper',
    round: 'ADP ~ Round 15',
    upside: 'Back in full pads and cleared to practice for the first time since injury; explosive YAC threat when healthy',
    risk: 'Long layoff — real injury risk, but the price makes it a low-cost gamble'
  },
  {
    player: 'Stefon Diggs',
    pos: 'WR', team: 'WAS',
    category: 'Fresh Start',
    round: 'ADP still settling',
    upside: 'Caught 85 passes for 1,013 yards with New England last year; now paired with Jayden Daniels after an August signing',
    risk: 'Turns 32 this year, and joining a new offense in August creates early-season uncertainty'
  },
  {
    player: 'Jayden Higgins',
    pos: 'WR', team: 'HOU',
    category: 'Sophomore Riser',
    round: 'Part of the Iowa State duo',
    upside: 'Flashed real talent as a rookie; Houston moved on from Christian Kirk, opening up more target share',
    risk: 'Target competition with Nico Collins, Tank Dell and Jaylin Noel'
  },
  {
    player: 'Jaylin Noel',
    pos: 'WR', team: 'HOU',
    category: 'Sophomore Riser',
    round: 'Part of the Iowa State duo',
    upside: 'Houston\'s revamped offensive line and tempo should create more volume to go around',
    risk: 'Same crowded target competition as Higgins'
  },
  {
    player: 'Emeka Egbuka',
    pos: 'WR', team: 'TB',
    category: 'Vacated Role',
    round: 'Rising fast in August',
    upside: 'With Mike Evans now in San Francisco, the door is wide open for Egbuka to become Tampa Bay\'s top target — a detailed route runner who creates his own separation',
    risk: 'Still needs to prove he can carry a true WR1 workload'
  },
  // ---- TE ----
  {
    player: 'Isaiah Likely',
    pos: 'TE', team: 'NYG',
    category: 'Coaching Reunion',
    round: 'ADP ~ Round 8-9',
    upside: "Followed HC John Harbaugh from Baltimore to New York; building chemistry with Jaxson Dart, no Mark Andrews competing for targets anymore",
    risk: 'Unproven as a true TE1 workload outside Baltimore\'s system'
  },
  {
    player: 'Jake Tonges',
    pos: 'TE', team: 'SF',
    category: 'Injury Handcuff',
    round: 'Late-round streamer/stash',
    upside: 'Direct George Kittle replacement if Kittle opens the year on PUP; caught 5 TDs filling in last season',
    risk: "Value evaporates fast — Kittle is trending toward a Week 1 return"
  },
  {
    player: 'Greg Dulcich',
    pos: 'TE', team: 'MIA',
    category: 'Efficiency Darling',
    round: 'Mostly undrafted',
    upside: 'Ranked top-6 among TEs in targets/route and yards/route run in 2025; Miami\'s receiving corps still lacks a clear high-volume option',
    risk: 'Going undrafted in most leagues for a reason — role still needs to be earned'
  },
  {
    player: 'Chig Okonkwo',
    pos: 'TE', team: 'WAS',
    category: 'Fresh Start',
    round: 'Washington\'s new primary receiving TE',
    upside: '56 catches for 560 yards with Tennessee last year; now paired with Jayden Daniels, who has a track record of fantasy-relevant tight ends',
    risk: 'Stefon Diggs\' arrival in Washington could cut into his target share'
  },
  {
    player: 'Dalton Kincaid',
    pos: 'TE', team: 'BUF',
    category: 'Analytics Darling',
    round: 'Late-round TE1 upside',
    upside: 'His 1.8 yards/route run since 2023 trails only Kittle, McBride and Bowers among qualified tight ends; healthy entering his fourth year',
    risk: 'Buffalo\'s offense has other mouths to feed at receiver'
  },
  {
    player: 'Gunnar Helm',
    pos: 'TE', team: 'TEN',
    category: 'Vacated Role',
    round: 'Deep-league flier',
    upside: "Set a Titans rookie-TE franchise reception record (44 catches) last year; Chig Okonkwo's departure clears the position's receiving hierarchy for him",
    risk: 'Unproven as the clear-cut No. 1 target at the position'
  },
  {
    player: 'Jake Raridon',
    pos: 'TE', team: 'NE',
    category: 'Injury Handcuff',
    round: 'ADP ~ TE44',
    upside: "Josh McDaniels' offenses historically use multiple-TE sets; direct beneficiary if Hunter Henry (age 32) misses time",
    risk: 'Purely matchup/injury-contingent value behind an established starter'
  }
];

// Sourced from live training-camp coverage (FantasyPros, Yahoo Sports,
// Football Nation, ESPN/AJC joint-practice reporting) as of August 20, 2026.
const INJURIES = [
  {
    player: 'Ricky Pearsall',
    pos: 'WR', team: 'SF',
    status: 'Out for Season / PCL Surgery',
    severity: 'out',
    handcuff: "De'Zhaun Stribling",
    handcuffNote: '(SF WR — SF also signed veteran Deebo Samuel Sr. to fill the void)',
    recommendation: 'Off the board for redraft — target the handcuff sleeper instead'
  },
  {
    player: 'George Kittle',
    pos: 'TE', team: 'SF',
    status: 'PUP / Achilles Recovery — trending toward Week 1',
    severity: 'questionable',
    handcuff: 'Jake Tonges',
    handcuffNote: '(SF TE, splits reps with Luke Farrell if Kittle opens on PUP)',
    recommendation: 'Kittle is targeting a Sept. 10 return vs. the Rams — draft as a discounted TE1 with a Week 1-4 contingency plan'
  },
  {
    player: 'Christian McCaffrey',
    pos: 'RB', team: 'SF',
    status: 'Day-to-Day / Calf & Soft-Tissue Tightness',
    severity: 'day-to-day',
    handcuff: 'Isaac Guerendo',
    handcuffNote: '(SF RB, also on PUP but expected back Week 1)',
    recommendation: 'Not a red flag yet, but monitor camp reports closely before draft day'
  },
  {
    player: 'Michael Penix Jr.',
    pos: 'QB', team: 'ATL',
    status: 'Not Yet Cleared for 11-on-11 / ACL Recovery',
    severity: 'out',
    handcuff: 'Tua Tagovailoa',
    handcuffNote: '(ATL QB — leading the job by default, but struggling in camp)',
    recommendation: 'Speculative late-round stash only; ADP has drifted into the 260s while he\'s sidelined'
  },
  {
    player: 'Anthony Richardson',
    pos: 'QB', team: 'IND',
    status: 'Roster Uncertainty — Requested Trade',
    severity: 'questionable',
    handcuff: 'Daniel Jones',
    handcuffNote: "(IND QB, ahead of him — Jones looks 'flawless' returning from his own Achilles tear)",
    recommendation: 'Dynasty stash only if he\'s dealt — not draftable as a Colts backup in redraft'
  },
  {
    player: 'Malik Nabers',
    pos: 'WR', team: 'NYG',
    status: 'Recovering from ACL Tear — trending well',
    severity: 'questionable',
    handcuff: "Wan'Dale Robinson",
    handcuffNote: '(NYG WR, next in line for target share if Nabers is limited)',
    recommendation: 'Nabers is back practicing and on track for Week 1 — a discount worth buying if his ADP hasn\'t corrected yet'
  }
];

const SLEEPER_NAMES = new Set(SLEEPERS.map(s => s.player));

function findPlayerByName(name) {
  return PLAYERS.find(p => p.player === name) || null;
}
