// Legacy editorial categories, retained for content-schema compatibility.
// A category does not prove developer approval, personal testing or verification.

// 4.2 确认状态标签体系
export type ConfidenceStatus =
  | 'official' // Legacy general-guide category
  | 'beta' // Legacy general-guide category; not evidence of personal testing
  | 'trailer' // 👁️ 预告片中出现但系统细节未知
  | 'lore' // 📖 基于星战正史（电影/游戏）推测
  | 'unconfirmed'; // ❓ 论坛流传但无官方来源（不作页面主体）

export interface StatusMeta {
  label: string;
  icon: string;
  // 用于徽章配色（Tailwind class 片段）
  classes: string;
  description: string;
}

export const STATUS_META: Record<ConfidenceStatus, StatusMeta> = {
  official: {
    label: 'Guide',
    icon: '',
    classes: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    description: 'Editorial guide. This label does not certify a claim or imply affiliation.',
  },
  beta: {
    label: 'Editorial analysis',
    icon: '',
    classes: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    description: 'Editorial guide. No hands-on testing is implied by this legacy category.',
  },
  trailer: {
    label: 'Trailer',
    icon: '👁️',
    classes: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    description: 'Seen in a trailer, but system details are still unknown.',
  },
  lore: {
    label: 'Lore-based',
    icon: '📖',
    classes: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    description: 'Discussion of Star Wars lore, separate from confirmed game mechanics.',
  },
  unconfirmed: {
    label: 'Unconfirmed',
    icon: '❓',
    classes: 'bg-void-600/40 text-void-300 border-void-500/40',
    description: 'Circulating on forums without an official source. Not used as primary content.',
  },
};

// 4.1 每个事实必须记录的溯源信息
export interface SourceRef {
  status: ConfidenceStatus;
  // 来源 URL（官网 / Steam 新闻 / 官方 Discord / 官方 Twitter）
  sourceUrl?: string;
  // 来源内容的发布日期
  sourceDate?: string;
  // 游戏版本（Beta 版本号 / Demo / 预告片名称）
  gameVersion?: string;
  // 最后人工核对日期
  lastChecked: string;
  // 备注（例如「Reveal Trailer 1:42 处」）
  note?: string;
}
