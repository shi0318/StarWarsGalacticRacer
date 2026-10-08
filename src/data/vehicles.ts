// 已发售载具。四类来自发售公告的官方定位；具名机体只收录豪华版写明的 Kor Sarun 三台。
import type { SourceRef } from './sources';

export interface Vehicle {
  slug: string;
  name: string;
  summary: string;
  class: string;
  knownStats: string[];
  acquisition: string;
  source: SourceRef;
  hasDetailPage: boolean;
  detailHref?: string;
  image?: string;
}

export const VEHICLES: Vehicle[] = [
  {
    slug: 'landspeeders',
    name: 'Landspeeders',
    summary:
      'The durable class. Strong acceleration and top speed, enough resilience to take a hit, and the easiest drift through a corner.',
    class: 'Landspeeder',
    knownStats: [
      'Races in the mixed grid with speeder bikes and skim speeders',
      'Launch notes call them the tanks of the track',
      'Best first class if you are still learning shunt lines',
    ],
    acquisition: 'Available in the campaign garage from the opening tours.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/livery-editor.webp',
  },
  {
    slug: 'speeder-bikes',
    name: 'Speeder Bikes',
    summary:
      'Fast and fragile. Their Kinetic Burst stores energy from a brake into a corner, then dumps it as a snap of acceleration on exit.',
    class: 'Speeder bike',
    knownStats: [
      'Mixed-grid class',
      'Kinetic Burst is the class ability',
      'A bad shunt ends the lap faster than it does in a landspeeder',
    ],
    acquisition: 'Available alongside landspeeders once the garage opens.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/snow-bike.webp',
  },
  {
    slug: 'skim-speeders',
    name: 'Skim Speeders',
    summary:
      'A new repulsor class for this game. It sits between the landspeeder and the bike, and its Knife Edge is the line you have to learn.',
    class: 'Skim speeder',
    knownStats: [
      'Mixed-grid class',
      'Knife Edge is the class ability',
      'Built for flowing lines rather than straight-line bullying',
    ],
    acquisition: 'Available in the same speeder roster as landspeeders and bikes.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/acid-skim.webp',
  },
  {
    slug: 'podracers',
    name: 'Podracers',
    summary:
      'Raced on their own grid. Breakneck speed, a much larger footprint, and almost no room to fix a mistake.',
    class: 'Podracer',
    knownStats: [
      'Separate from the three speeder classes because of speed and size',
      'Campaign podracing is a later stretch; Arcade pod events are available immediately',
      'Players regularly report the class stays locked until that campaign stretch',
    ],
    acquisition: 'Arcade and scenario pod events from the menu. Campaign pods open as the tour reaches them.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    image: '/images/guide/canyon-pods.webp',
  },
  {
    slug: 'kor-sarun-darc-x',
    name: 'Kor Sarun: Darc X',
    summary: 'Deluxe landspeeder. Same class rules as the standard landspeeders, with a paddock-exclusive hull.',
    class: 'Landspeeder',
    knownStats: ['Deluxe exclusive', 'Landspeeder handling, not a fifth physics class'],
    acquisition: 'Included with the Deluxe upgrade and the Digital Deluxe edition.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    detailHref: '/vehicles/kor-sarun/',
    image: '/images/guide/livery-editor.webp',
  },
  {
    slug: 'kor-sarun-ciza-t',
    name: 'Kor Sarun: Ciza T',
    summary: 'Deluxe speeder bike. Uses the bike’s Kinetic Burst, not a unique physics model.',
    class: 'Speeder bike',
    knownStats: ['Deluxe exclusive', 'Speeder-bike handling'],
    acquisition: 'Included with the Deluxe upgrade and the Digital Deluxe edition.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    detailHref: '/vehicles/kor-sarun/',
    image: '/images/guide/dune-jump.webp',
  },
  {
    slug: 'kor-sarun-rak-s',
    name: 'Kor Sarun: Rak S',
    summary: 'Deluxe skim speeder. Knife Edge still decides the lap; the hull is the exclusive part.',
    class: 'Skim speeder',
    knownStats: ['Deluxe exclusive', 'Skim-speeder handling'],
    acquisition: 'Included with the Deluxe upgrade and the Digital Deluxe edition.',
    source: { status: 'official', lastChecked: '2026-10-08' },
    hasDetailPage: true,
    detailHref: '/vehicles/kor-sarun/',
    image: '/images/guide/acid-skim.webp',
  },
];
