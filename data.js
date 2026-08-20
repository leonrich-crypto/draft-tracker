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
  {pos:'QB',rank:19,player:'Kyler Murray',team:'ARI',pts:222.5,ppg:15.9},
  {pos:'QB',rank:20,player:'Jayden Daniels',team:'WAS',pts:218.4,ppg:18.2},
  {pos:'QB',rank:21,player:'Kirk Cousins',team:'ATL',pts:215.2,ppg:14.3},
  {pos:'QB',rank:22,player:'Lamar Jackson',team:'BAL',pts:210.8,ppg:17.6},
  {pos:'QB',rank:23,player:'Tua Tagovailoa',team:'MIA',pts:208.5,ppg:13.9},
  {pos:'QB',rank:24,player:'Brock Purdy',team:'SF',pts:205.1,ppg:14.6},
  {pos:'QB',rank:25,player:'C.J. Stroud',team:'HOU',pts:201.3,ppg:13.4},
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
  {pos:'TE',rank:21,player:'Chig Okonkwo',team:'TEN',pts:124.0,ppg:7.3},
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

const SLEEPERS = [
  {
    player: "De'Zhaun Stribling",
    pos: 'WR', team: 'SF',
    category: 'Rookie Diamond',
    round: 'Round 14-15 / ADP 204',
    upside: 'Vacant target share with Ricky Pearsall out',
    risk: 'Rookie learning curve'
  },
  {
    player: 'Denzel Boston',
    pos: 'WR', team: 'CLE',
    category: 'Rookie Diamond',
    round: 'Round 12-13 / ADP 169',
    upside: '6\'4" contested-catch monster; projected starting WR3',
    risk: 'Inconsistent QB play'
  },
  {
    player: 'Caleb Douglas',
    pos: 'WR', team: 'MIA',
    category: 'Rookie Diamond',
    round: 'Round 15+ / ADP 316',
    upside: "4.39 speed burner in Mike McDaniel's offense",
    risk: 'Raw route running'
  },
  {
    player: 'Jonah Coleman',
    pos: 'RB', team: 'DEN',
    category: 'Rookie Diamond',
    round: 'Round 13-14 / ADP 185',
    upside: '5\'8", 220lb power back; primary goal-line threat',
    risk: 'Sharing snaps in committee'
  },
  {
    player: 'Tyler Shough',
    pos: 'QB', team: 'NO',
    category: 'Sophomore Breakout',
    round: 'Round 13-14 / QB20',
    upside: "Leads Kellen Moore's fast-paced scheme",
    risk: 'Unproven over full season'
  },
  {
    player: 'Jonathon Brooks',
    pos: 'RB', team: 'CAR',
    category: 'Post-Hype Sleeper',
    round: 'Round 9-10 / RB32',
    upside: 'Full year removed from knee surgery in run offense',
    risk: 'Chuba Hubbard competition'
  }
];

const INJURIES = [
  {
    player: 'Michael Penix Jr.',
    pos: 'QB', team: 'ATL',
    status: 'Out / ACL Rehab',
    severity: 'out',
    handcuff: 'Kirk Cousins',
    handcuffNote: '(ATL QB)',
    recommendation: 'Draft handcuff late or stash on IR'
  },
  {
    player: 'Anthony Richardson',
    pos: 'QB', team: 'IND',
    status: 'Questionable / Shoulder Recovery',
    severity: 'questionable',
    handcuff: 'Daniel Jones',
    handcuffNote: '/ Joe Flacco (IND QB)',
    recommendation: 'Target handcuff in rounds 9-12'
  },
  {
    player: 'Christian McCaffrey',
    pos: 'RB', team: 'SF',
    status: 'Day-to-Day / Calf & Soft Tissue',
    severity: 'day-to-day',
    handcuff: 'Jordan Mason',
    handcuffNote: '/ Isaac Guerendo (SF RB)',
    recommendation: 'Target handcuff in rounds 9-12'
  },
  {
    player: 'Nick Chubb',
    pos: 'RB', team: 'CLE',
    status: 'Out/PUP / Knee Surgery Rehab',
    severity: 'out',
    handcuff: 'Jerome Ford',
    handcuffNote: '/ Pierre Strong Jr. (CLE RB)',
    recommendation: 'Draft handcuff late or stash on IR'
  },
  {
    player: 'Ricky Pearsall',
    pos: 'WR', team: 'SF',
    status: 'Out / Knee Injury',
    severity: 'out',
    handcuff: "De'Zhaun Stribling",
    handcuffNote: '/ Jauan Jennings (SF WR)',
    recommendation: 'Draft handcuff late or stash on IR'
  },
  {
    player: 'George Kittle',
    pos: 'TE', team: 'SF',
    status: 'Out / Achilles Recovery',
    severity: 'out',
    handcuff: 'Eric Saubert',
    handcuffNote: '/ Jake Tonges (SF TE)',
    recommendation: 'Draft handcuff late or stash on IR'
  }
];

const SLEEPER_NAMES = new Set(SLEEPERS.map(s => s.player));

function findPlayerByName(name) {
  return PLAYERS.find(p => p.player === name) || null;
}
