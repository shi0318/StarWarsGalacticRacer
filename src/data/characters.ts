// 已发售角色数据。只收录发售公告、故事预告和配音介绍里点名的人物。
import type { SourceRef } from './sources';

export interface Racer {
  slug: string;
  name: string;
  summary: string;
  faction: string;
  knownTraits: string[];
  unlock: string;
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
    unlock: 'Playable from the first campaign run.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/shade-overlook.webp',
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
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/workshop-droid.webp',
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
    unlock: 'Story rival. He is the target of a campaign run, not a starter pilot.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/canyon-combat.webp',
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
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/besalisk-paddock.webp',
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
    unlock: 'Reached through the campaign’s podracing path. Arcade pod events are available without finishing that stretch.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/stadium-pod.webp',
  },
];

export const ROSTER_STATUS =
  'The named cast at launch is Shade, Hibi, Darius Pax, Kestar Bool, and Sebulba. ' +
  'Rival pilots fill the grid, but Fuse Games has not published a full unlockable roster beyond that core.';
