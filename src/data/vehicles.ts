// 载具数据（发售前已知信息）
// 官方 Steam 页（App 4078430）明确游戏包含四类 repulsorcraft：
//   landspeeders / speeder bikes / skim speeders / podracers
// 因此本表以「官方确认的载具类别」为主体，而非编造具体的电影载具型号。
// 发售后用正式版实测的具体载具与数值替换。
import type { SourceRef } from './sources';

export interface Vehicle {
  slug: string;
  name: string;
  // 一句话定位
  summary: string;
  // 类别：landspeeder / speeder-bike / skim-speeder / podracer
  class: string;
  // 已知属性倾向（发售前基于官方描述的类别定位，非具体数值）
  knownStats: string[];
  // 获取方式
  acquisition: string;
  source: SourceRef;
  hasDetailPage: boolean;
  detailHref?: string;
}

// 官方确认：玩家驾驶不同类别的斥力载具（repulsorcraft），各有独立物理与玩法。
// 来源：Steam 商店页 "About This Game" —— "pilot landspeeders, speeder bikes,
// skim speeders, and podracers" / "Pilot different classes of repulsorcraft
// each with distinct physics and playstyles."
export const VEHICLES: Vehicle[] = [
  {
    slug: 'landspeeders',
    name: 'Landspeeders',
    summary:
      'Ground-hugging repulsorcraft — the game\'s all-rounder class, expected to be the most approachable for new racers.',
    class: 'Landspeeder',
    knownStats: [
      'One of four confirmed vehicle classes',
      'Distinct physics and playstyle vs. other classes (official)',
    ],
    acquisition: 'Vehicle roster and unlock methods not yet detailed by the developer.',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/app/4078430/STAR_WARS_Galactic_Racer/',
      note: 'Steam "About This Game" lists landspeeders as a pilotable class.',
      lastChecked: '2026-07-24',
    },
    hasDetailPage: false,
  },
  {
    slug: 'speeder-bikes',
    name: 'Speeder Bikes',
    summary:
      'Nimble single-rider repulsor bikes built for agility and quick direction changes over raw top speed.',
    class: 'Speeder bike',
    knownStats: [
      'One of four confirmed vehicle classes',
      'Distinct physics and playstyle vs. other classes (official)',
    ],
    acquisition: 'Vehicle roster and unlock methods not yet detailed by the developer.',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/app/4078430/STAR_WARS_Galactic_Racer/',
      note: 'Steam "About This Game" lists speeder bikes as a pilotable class.',
      lastChecked: '2026-07-24',
    },
    hasDetailPage: false,
  },
  {
    slug: 'skim-speeders',
    name: 'Skim Speeders',
    summary:
      'A distinct repulsor class named in the official game description. Exact handling profile not yet detailed.',
    class: 'Skim speeder',
    knownStats: [
      'One of four confirmed vehicle classes',
      'Distinct physics and playstyle vs. other classes (official)',
    ],
    acquisition: 'Vehicle roster and unlock methods not yet detailed by the developer.',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/app/4078430/STAR_WARS_Galactic_Racer/',
      note: 'Steam "About This Game" lists skim speeders as a pilotable class.',
      lastChecked: '2026-07-24',
    },
    hasDetailPage: false,
  },
  {
    slug: 'podracers',
    name: 'Podracers',
    summary:
      'The high-speed, high-risk class — twin-engine pods built for straight-line speed at the cost of stability.',
    class: 'Podracer',
    knownStats: [
      'One of four confirmed vehicle classes',
      'Distinct physics and playstyle vs. other classes (official)',
    ],
    acquisition: 'Vehicle roster and unlock methods not yet detailed by the developer.',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/app/4078430/STAR_WARS_Galactic_Racer/',
      note: 'Steam "About This Game" lists podracers as a pilotable class.',
      lastChecked: '2026-07-24',
    },
    hasDetailPage: false,
  },
];
