// 角色数据（发售前已知信息）
// 严格遵循方案第四章：每个角色都带确认状态与来源。
// 只收录官方 Steam 页 (App 4078430) 已确认的内容。
// 官方设定：帝国覆灭后的新共和国时代，原创主角 Shade，无原力、无预言。
// 因此不收录电影正史角色（Anakin/Sebulba/Boba 等）——那些在本作设定中不成立。
import type { SourceRef } from './sources';

export interface Racer {
  slug: string;
  name: string;
  // 一句话定位
  summary: string;
  // 阵营 / 派系
  faction: string;
  // 已知特长（发售前多为推测/预告片信息）
  knownTraits: string[];
  // 解锁方式
  unlock: string;
  source: SourceRef;
  // 是否已满足详情页拆分门槛（方案 5.2）。false = 仅存在于聚合页表格
  hasDetailPage: boolean;
  // optional override when guide lives outside /characters/<slug>/
  detailHref?: string;
}

export const RACERS: Racer[] = [
  {
    slug: 'shade',
    name: 'Shade',
    summary:
      'The protagonist and the only named racer confirmed so far — a lone driver chasing revenge and glory in the Galactic League.',
    faction: 'The Galactic League',
    knownTraits: [
      'Player-character; the story-driven campaign follows Shade',
      'Rises through the League via shifting alliances and grudge matches',
    ],
    unlock: 'Playable from the start as the campaign protagonist.',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/app/4078430/STAR_WARS_Galactic_Racer/',
      note: 'Official Steam description: "Become Shade, a lone racer chasing revenge and glory."',
      sourceDate: '2026-07-24',
      lastChecked: '2026-07-24',
    },
    hasDetailPage: false,
  },
];

// 发售前说明：官方尚未公布完整车手名单。除主角 Shade 外，
// 其余车手（联盟对手、辛迪加赞助的选手等）需等官方公布或实机确认后再补充。
export const ROSTER_STATUS =
  'Beyond the protagonist Shade, the developer has not announced the racer roster. ' +
  'The Galactic League is described as a circuit where syndicates sponsor pilots, so ' +
  'rival racers are expected — but no names are confirmed yet. This page updates as ' +
  'the developer reveals them.';
