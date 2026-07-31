// 角色数据（发售前已知信息）
// 严格遵循方案第四章：每个角色都带确认状态与来源。
// 只收录官方 Steam 页 (App 4078430) 已确认的内容。
// 官方设定：帝国覆灭后的新共和国时代，原创主角 Shade。
// 官方商店原文："No Force. No prophecy. Just skill, strategy, and the will to rise."
// 注意：这句讲的是故事前提（不是绝地故事），不等于本作排除星战正史角色。
// App 4078430 新闻中心 2026-06-05 关于首个故事预告的报道即点名 Sebulba 等既有角色出场。
// 因此下面的名单不收录他们，原因只是官方尚未确认其为可驾驶车手——而非其"在本作设定中不成立"。
// 一旦第一方来源确认为可玩车手，再按同样的 source 规范补入。
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
      lastChecked: '2026-07-31',
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
