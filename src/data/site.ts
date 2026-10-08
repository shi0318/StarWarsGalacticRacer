// 站点全局常量 —— 单一数据源，避免各页面硬编码不一致
export const SITE = {
  name: 'Star Wars Galactic Racer Guide',
  shortName: 'SWGR Guide',
  url: 'https://swgalacticracer.wiki',
  // 游戏已于 2026 年 10 月 6 日发售
  releaseDate: '2026-10-06',
  tagline: 'Racers, vehicles, tracks, and builds for the Outer Rim racing game',
  description:
    'A post-launch guide to Star Wars: Galactic Racer from Fuse Games. Racers, vehicle classes, circuits, campaign runs, and multiplayer — written for players who already have the game.',
  locale: 'en',
  developer: 'Fuse Games',
  publisher: 'Secret Mode',
  franchise: 'Star Wars',
  contactEmail: 'nmlkareem161@gmail.com',
  // 发售公告确认 PC、PS5、Xbox Series X|S。Steam 商店页本身只售 Windows 版。
  platforms: ['PC (Steam)', 'PlayStation 5', 'Xbox Series X|S'] as const,
  price: '$59.99',
} as const;

// 主导航只放分类枢纽。具体文章从分类页和正文内链进入，不直接挂在导航上。
export const NAV = [
  { label: 'Guide', href: '/guide/' },
  { label: 'Characters', href: '/characters/' },
  { label: 'Vehicles', href: '/vehicles/' },
  { label: 'Tracks', href: '/tracks/' },
  { label: 'Tips', href: '/tips/' },
] as const;

// 是否已发售 —— 编译期计算
export function isReleased(now: Date = new Date()): boolean {
  return now >= new Date(SITE.releaseDate + 'T00:00:00Z');
}

// 距发售天数（负数表示已发售）
export function daysUntilRelease(now: Date = new Date()): number {
  const target = new Date(SITE.releaseDate + 'T00:00:00Z').getTime();
  const diff = target - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
