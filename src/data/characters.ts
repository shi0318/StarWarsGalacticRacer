// 已发售角色数据。只收录发售公告、故事预告和配音介绍里点名的人物。
import type { SourceRef } from './sources';

export interface Racer {
  slug: string;
  name: string;
  summary: string;
  faction: string;
  knownTraits: string[];
  unlock: string;
  style?: string;
  role: 'Campaign' | 'Paddock' | 'Rival' | 'Multiplayer' | 'Pod';
  source: SourceRef;
  hasDetailPage: boolean;
  detailHref?: string;
  image?: string;
}

export const RACERS: Racer[] = [
  {
    slug: 'shade',
    name: 'Shade',
    summary:
      'The player character. A lone pilot with a personal grudge against the Bool family, recruited to take the Galactic League back from its champion.',
    faction: 'Independent / Galactic League',
    knownTraits: [
      'Campaign protagonist on every run',
      'Starts each tour fresh after a wreck-out, with only some perks carrying over',
    ],
    unlock: 'Campaign start. Multiplayer guides list Shade as the default racer, style Ramjet Rider.',
    style: 'Ramjet Rider',
    role: 'Campaign',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/characters/shade.webp',
  },
  {
    slug: 'hibi',
    name: 'Hibi',
    summary:
      'Shade’s mechanic and paddock partner. An energetic Ardennian who fits parts between events and warns you when an upgrade is more experiment than plan.',
    faction: 'Shade’s crew',
    knownTraits: [
      'Runs a workshop on every planet’s paddock',
      'Sells and installs parts that change stats and abilities',
      'Voiced with a Liverpool accent',
    ],
    unlock: 'Present in the paddock from the start of the campaign. Not a rival you select.',
    role: 'Paddock',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/characters/hibi.webp',
  },
  {
    slug: 'kestar-bool',
    name: 'Kestar Bool',
    summary:
      'Reigning champion of the Galactic League and the campaign antagonist. A callous Caskadag who uses the title to threaten other pilots and extend the Bool family’s reach.',
    faction: 'Bool family',
    knownTraits: [
      'League champion and the rival Shade is built to unseat',
      'Smug, entitled delivery — the performance is meant to make you want the takedown',
    ],
    unlock: 'Campaign target. Multiplayer guides list him as the Rank 40 roster cap, style Weaponised. The store page does not print that rank.',
    style: 'Weaponised',
    role: 'Rival',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/characters/kestar.webp',
  },
  {
    slug: 'darius-pax',
    name: 'Darius Pax',
    summary:
      'The brash Besalisk who founded the Galactic League because he wanted racing “the way it was.” He loses control of it to Kestar Bool and recruits Shade.',
    faction: 'Galactic League',
    knownTraits: [
      'League founder and showman',
      'Besalisk businessman, not the player’s rival on track',
    ],
    unlock: 'Story character. He sets the campaign in motion rather than appearing as an unlockable racer.',
    role: 'Paddock',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/characters/pax.webp',
  },
  {
    slug: 'sebulba',
    name: 'Sebulba',
    summary:
      'The Dug podracer from the Mos Espa circuit, back in the League’s podracing events. He will not let Shade near Kestar Bool in a pod until the practice is done.',
    faction: 'Podracing circuit',
    knownTraits: [
      'Tied to the separate podracer class, not the mixed speeder grid',
      'Appears in the campaign’s podracing stretch and in arcade pod events',
    ],
    unlock: 'Campaign pod stretch, plus Arcade pods from the menu. Multiplayer guides also group him with the classic pod racers.',
    role: 'Pod',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/characters/sebulba.webp',
  },
];

const mp = (lastChecked = '2026-10-08'): SourceRef => ({
  status: 'community',
  lastChecked,
});

export const MULTIPLAYER_RACERS: Racer[] = [
  { slug: 'katja-mox', name: 'Katja Mox', summary: 'Listed as a tech-focused racer whose family firm once worked for the Empire.', faction: 'Multiplayer roster', knownTraits: ['Tech Expert'], unlock: 'Rank 2 in multiplayer guides. Not printed on the store page.', style: 'Tech Expert', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'griff-halloran', name: 'Griff Halloran', summary: 'Listed as a veteran who still flies in an old Imperial Navy suit.', faction: 'Multiplayer roster', knownTraits: ['Afterburner'], unlock: 'Rank 4 in multiplayer guides.', style: 'Afterburner', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'ary-quill', name: 'Ary Quill', summary: 'Listed as a competitive racer from a champion family. Guides disagree on the portrait.', faction: 'Multiplayer roster', knownTraits: ['Redliner'], unlock: 'Rank 6 in multiplayer guides. Style is Redliner, not Ramjet Rider.', style: 'Redliner', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'soren-zaks', name: 'Soren Zaks', summary: 'Listed as a former smuggler racing for a second chance.', faction: 'Multiplayer roster', knownTraits: ['Engineer'], unlock: 'Rank 8 in multiplayer guides.', style: 'Engineer', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'nik-skandaro', name: 'Nik Skandaro', summary: 'Listed as a Zabrak who used to enforce for the Bool family.', faction: 'Multiplayer roster', knownTraits: ['Survivor'], unlock: 'Rank 12 in multiplayer guides.', style: 'Survivor', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'goli', name: 'Goli', summary: 'Listed as a young racer from Polis Massa with an astromech partner. Spelling of the droid varies between guides.', faction: 'Multiplayer roster', knownTraits: ['Clean Racer'], unlock: 'Rank 18 in multiplayer guides.', style: 'Clean Racer', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'fola-kanjen', name: 'Fola Kanjen', summary: 'Listed as a racer who learned on farm livestock before the League.', faction: 'Multiplayer roster', knownTraits: ['Tenacious'], unlock: 'Rank 22 in multiplayer guides.', style: 'Tenacious', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'sen-fira', name: 'Sen Fira', summary: 'Listed as a Tognath racing to clear a Bool-family debt.', faction: 'Multiplayer roster', knownTraits: ['Slipstreamer'], unlock: 'Rank 24 in multiplayer guides.', style: 'Slipstreamer', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'biddy-blas', name: 'Biddy Blas', summary: 'Listed as a Crocin racing under the Bool banner for fame.', faction: 'Multiplayer roster', knownTraits: ['Firebug'], unlock: 'Rank 26 in multiplayer guides.', style: 'Firebug', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'malis-vazosk', name: 'Malis Vazosk', summary: 'Listed as a Trandoshan mercenary treating the League like a contract.', faction: 'Multiplayer roster', knownTraits: ['Brawler'], unlock: 'Rank 30 in multiplayer guides.', style: 'Brawler', role: 'Multiplayer', source: mp(), hasDetailPage: false },
  { slug: 'lyren-shok', name: 'Lyren Shok', summary: 'Listed as a Nautolan skim racer coming back after a scandal.', faction: 'Multiplayer roster', knownTraits: ['Stunt Runner'], unlock: 'Rank 34 in multiplayer guides.', style: 'Stunt Runner', role: 'Multiplayer', source: mp(), hasDetailPage: false },
];

export const POD_LEGENDS: Racer[] = [
  { slug: 'ben-quadinaros', name: 'Ben Quadinaros', summary: 'Classic Toong podracer. Multiplayer guides group him with the legacy pod grid, not the speeder ranks.', faction: 'Pod grid', knownTraits: ['Pod traits, not a speeder style'], unlock: 'Grouped with the other classic pod racers in multiplayer guides.', role: 'Pod', source: mp(), hasDetailPage: false },
  { slug: 'dud-bolt', name: 'Dud Bolt', summary: 'Classic podracer listed on the same multiplayer pod unlock as Sebulba.', faction: 'Pod grid', knownTraits: ['Pod grid'], unlock: 'Same pod-racer unlock group as Sebulba in multiplayer guides.', role: 'Pod', source: mp(), hasDetailPage: false },
  { slug: 'gasgano', name: 'Gasgano', summary: 'Classic podracer listed on the legacy pod grid.', faction: 'Pod grid', knownTraits: ['Pod grid'], unlock: 'Same pod-racer unlock group as Sebulba in multiplayer guides.', role: 'Pod', source: mp(), hasDetailPage: false },
  { slug: 'teemto-pagalies', name: 'Teemto Pagalies', summary: 'Classic podracer listed on the legacy pod grid.', faction: 'Pod grid', knownTraits: ['Pod grid'], unlock: 'Same pod-racer unlock group as Sebulba in multiplayer guides.', role: 'Pod', source: mp(), hasDetailPage: false },
  { slug: 'ody-mandrell', name: 'Ody Mandrell', summary: 'Classic podracer listed on the legacy pod grid.', faction: 'Pod grid', knownTraits: ['Pod grid'], unlock: 'Same pod-racer unlock group as Sebulba in multiplayer guides.', role: 'Pod', source: mp(), hasDetailPage: false },
];

export const ROSTER_STATUS =
  'The named cast at launch is Shade, Hibi, Darius Pax, Kestar Bool, and Sebulba. ' +
  'Rival pilots fill the grid, but Fuse Games has not published a full unlockable roster beyond that core.';
