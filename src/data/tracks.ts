// 赛道数据（发售前已知信息）
// 重要：截至核对日，官方（Steam App 4078430）尚未公布任何具体赛道名称。
// 官方仅确认比赛发生在「帝国覆灭后新共和国重建期的 Outer Rim 地下赛车联盟
// The Galactic League」。此前站内列出的 Tatooine Boonta Eve / Coruscant /
// Endor / Kessel Run / Hoth / Mustafar 均为电影正史地点，与「无原力、原创主角、
// 帝国已覆灭」的官方设定冲突，属编造内容，已移除。
// 发售后（或官方公布赛道时）用确认信息填充下表。
import type { SourceRef } from './sources';

export interface Track {
  slug: string;
  name: string;
  // 所在星球 / 地点
  planet: string;
  // 一句话定位
  summary: string;
  // 难度（发售前多为推测）
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Unknown';
  // 已知地形特征
  knownHazards: string[];
  source: SourceRef;
  hasDetailPage: boolean;
  detailHref?: string;
}

// 官方尚未公布具体赛道，故列表为空。
// 页面会据此显示「赛道尚未公布」的诚实占位说明，而非编造条目。
export const TRACKS: Track[] = [];

// 官方唯一确认的赛道背景信息（供页面文案使用，均可溯源到 Steam 商店页）。
export const TRACK_SETTING = {
  league: 'The Galactic League',
  region: 'the Outer Rim',
  era: 'the years after the fall of the Empire, during the New Republic’s rebuilding',
  source: {
    status: 'official',
    sourceUrl: 'https://store.steampowered.com/app/4078430/',
    note: 'Races take place in the Outer Rim’s underground Galactic League. No individual tracks named yet.',
    lastChecked: '2026-07-24',
  } satisfies SourceRef,
} as const;
