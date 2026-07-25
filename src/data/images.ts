// Media catalog for Star Wars Galactic Racer Wiki.
// NOTE: This is an independent fan site. The images below are official
// screenshots and key art from the game's Steam store page, converted to
// web-optimized WEBP. They are used here under fan-content / press-use terms
// for informational coverage; all rights remain with Fuse Games / Secret Mode
// and Lucasfilm. Each entry credits the Steam source.

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
}

const STEAM_CREDIT = 'Official screenshot | Star Wars Galactic Racer (Steam) — Fuse Games / Secret Mode';

export const SITE_IMAGES = {
  heroBanner: {
    src: '/images/swgr-hero-snow-racer.webp',
    alt: 'A repulsorcraft racer banking across a snowy mountain valley at speed with engines glowing',
    width: 1400,
    height: 787,
    credit: STEAM_CREDIT,
  },
  heroRace: {
    src: '/images/swgr-canyon-boost.webp',
    alt: 'A yellow speeder kicking up dust as it boosts through a sunlit canyon track',
    width: 1600,
    height: 900,
    credit: STEAM_CREDIT,
  },
  charactersArt: {
    src: '/images/swgr-cockpit-pilot.webp',
    alt: 'First-person cockpit view of a pilot gripping the controls of a repulsorcraft mid-race',
    width: 1600,
    height: 900,
    credit: STEAM_CREDIT,
  },
  vehiclesArt: {
    src: '/images/swgr-green-racer.webp',
    alt: 'Side profile of a sleek green repulsorcraft hovering over water at dusk',
    width: 1600,
    height: 900,
    credit: STEAM_CREDIT,
  },
  tracksArt: {
    src: '/images/swgr-snow-vista.webp',
    alt: 'Wide vista of a snow-covered racing environment with distant spires under a bright sun',
    width: 1600,
    height: 900,
    credit: STEAM_CREDIT,
  },
  unlocksArt: {
    src: '/images/swgr-speeder-showcase.webp',
    alt: 'Detailed showcase of a weathered landspeeder parked on a leaf-strewn forest track',
    width: 1600,
    height: 900,
    credit: STEAM_CREDIT,
  },
  tipsArt: {
    src: '/images/swgr-desert-dunes.webp',
    alt: 'A racer streaking low across orange desert dunes with a rival close behind',
    width: 1600,
    height: 900,
    credit: STEAM_CREDIT,
  },
  trackMapCover: {
    src: '/images/swgr-cover-square.webp',
    alt: 'Star Wars Galactic Racer repulsorcraft racing across a moonlit rocky plain',
    width: 1200,
    height: 1200,
    credit: STEAM_CREDIT,
  },
  cityCircuit: {
    src: '/images/swgr-ruins-circuit.webp',
    alt: 'Racers passing weathered ruins and columns beside a track at sunset',
    width: 1600,
    height: 900,
    credit: STEAM_CREDIT,
  },
  lavaCircuit: {
    src: '/images/swgr-volcano-circuit.webp',
    alt: 'Repulsorcraft racing along a riverside track with an active volcano rising in the distance',
    width: 1600,
    height: 900,
    credit: STEAM_CREDIT,
  },
} as const satisfies Record<string, SiteImage>;
