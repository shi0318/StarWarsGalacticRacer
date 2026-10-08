// 赛道按星球环境收录。具名地点来自玩家实机描述和发售公告里的 Derven Acos。
// 危险类型与官方截图、评测里反复出现的酸池、熔岩、冰洞一致，不写成精确弯道数。
import type { SourceRef } from './sources';

export interface Track {
  slug: string;
  name: string;
  planet: string;
  summary: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Unknown';
  knownHazards: string[];
  source: SourceRef;
  hasDetailPage: boolean;
  detailHref?: string;
  image?: string;
}

export const TRACKS: Track[] = [
  {
    slug: 'jakku',
    name: 'Jakku wreck fields',
    planet: 'Jakku',
    summary:
      'Desert runs through wreckage and open dunes. Wide sightlines, sudden walls of scrap, and a lot of dust hiding the next apex.',
    difficulty: 'Beginner',
    knownHazards: ['Wreckage chicanes', 'Dust that hides the racing line', 'Long dunes that punish an early boost'],
    source: { status: 'beta', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/wreck-dunes.webp',
  },
  {
    slug: 'tatooine',
    name: 'Tatooine canyon pods',
    planet: 'Tatooine',
    summary:
      'Canyon and cave podracing, the closest this game gets to the old Mos Espa feel. Pods run this ground on their own grid.',
    difficulty: 'Advanced',
    knownHazards: ['Cave mouths', 'Tight canyon walls', 'Pod cables crossing the pack'],
    source: { status: 'beta', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/pod-canyon.webp',
  },
  {
    slug: 'ando-prime',
    name: 'Ando Prime ice runs',
    planet: 'Ando Prime',
    summary:
      'Snow, ice gates, and heat tunnels. Players describe the lap as a fight against freezing unless you thread the warm sections.',
    difficulty: 'Intermediate',
    knownHazards: ['Ice and low grip', 'Heat tunnels you have to hit', 'Cliff drops beside the racing line'],
    source: { status: 'beta', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/ice-gate.webp',
  },
  {
    slug: 'crait',
    name: 'Crait salt flats',
    planet: 'Crait',
    summary:
      'A bright, open circuit where sitting in another pilot’s draft blinds you. The lap is about choosing when to leave the wake.',
    difficulty: 'Intermediate',
    knownHazards: ['Draft blindness', 'Long exposed straights', 'Stadium lighting on the night layout'],
    source: { status: 'beta', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/night-stadium.webp',
  },
  {
    slug: 'sentinel-one',
    name: 'Sentinel One acid pools',
    planet: 'Sentinel One',
    summary:
      'Dark rock and yellow acid. The pools are the lap. A resilience-light build gets deleted the first time the pack shunts you off line.',
    difficulty: 'Advanced',
    knownHazards: ['Acid pools off the racing line', 'Low visibility', 'Shunts that end the run, not just the lap'],
    source: { status: 'beta', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/acid-skim.webp',
  },
  {
    slug: 'lantaana',
    name: 'Lantaana lava caves',
    planet: 'Lantaana',
    summary:
      'Heat management inside lava caves, plus a river-and-volcano surface circuit. Overheating a ramjet here is how runs end.',
    difficulty: 'Advanced',
    knownHazards: ['Lava caves', 'Heat buildup', 'River crossings on the surface layout'],
    source: { status: 'beta', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/river-volcano.webp',
  },
  {
    slug: 'derven-acos',
    name: 'Derven Acos',
    planet: 'Derven Acos',
    summary:
      'The League’s custom arena. Launch copy calls it the showdown that stacks the conditions of the tour into one gauntlet. Multiplayer runs end here too.',
    difficulty: 'Expert',
    knownHazards: ['Combined planetary conditions', 'Finale pressure', 'A build that was fine on one planet fails here'],
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/moon-billboard.webp',
  },
];

export const TRACK_SETTING = {
  league: 'The Galactic League',
  region: 'the Outer Rim',
  era: 'the years after the fall of the Empire, during the New Republic’s rebuilding',
  source: {
    status: 'official',
    lastChecked: '2026-10-08',
  } satisfies SourceRef,
} as const;
