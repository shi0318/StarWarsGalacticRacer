// 站点全局常量 —— 单一数据源，避免各页面硬编码不一致
export const SITE = {
  name: 'Star Wars Galactic Racer Wiki',
  shortName: 'SWGR Wiki',
  url: 'https://swgalacticracer.wiki',
  // 游戏发售日（方案基准：2026 年 10 月 6 日）
  releaseDate: '2026-10-06',
  tagline: 'Release date, story & guides for the Outer Rim racing game',
  description:
    'Your source-checked wiki for Star Wars: Galactic Racer, the runs-based combat-racing game from Fuse Games. Release date, the Galactic League story, vehicle classes, and pre-release guides — every fact tagged with its source.',
  locale: 'en',
  // 开发商 / 发行商（官方 Steam 页 App 4078430：Fuse Games 开发，Secret Mode 发行，Star Wars 授权）
  developer: 'Fuse Games',
  publisher: 'Secret Mode',
  franchise: 'Star Wars',
  contactEmail: 'hello@swgalacticracer.wiki',
  // 仅列官方确认的平台：Steam 页明确的是 PC/Steam。主机平台官方来源未确认前不写，避免编造。
  platforms: ['Steam (PC)'] as const,
} as const;

// 主导航 —— 与 Breadcrumb 层级保持一致（方案 3.2 约束）
export const NAV = [
  { label: 'Guide', href: '/guide/' },
  { label: 'Characters', href: '/characters/' },
  { label: 'Vehicles', href: '/vehicles/' },
  { label: 'Tracks', href: '/tracks/' },
  { label: 'Unlocks', href: '/unlocks/' },
  { label: 'Tips', href: '/tips/' },
] as const;

// 是否已发售 —— 编译期计算，控制「Pre-release」标记显隐
export function isReleased(now: Date = new Date()): boolean {
  return now >= new Date(SITE.releaseDate + 'T00:00:00Z');
}

// 距发售天数（负数表示已发售）
export function daysUntilRelease(now: Date = new Date()): number {
  const target = new Date(SITE.releaseDate + 'T00:00:00Z').getTime();
  const diff = target - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
