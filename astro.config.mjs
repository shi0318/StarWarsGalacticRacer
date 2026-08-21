import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// 站点最终域名（方案首选 swgalacticracer.wiki，注册后可替换）
const SITE = 'https://swgalacticracer.wiki';

const ROOT = dirname(fileURLToPath(import.meta.url));
function frontmatterDate(file) {
  const source = readFileSync(join(ROOT, file), 'utf8');
  const match = source.match(/^updatedAt:\s*["']?(\d{4}-\d{2}-\d{2})/m);
  return match?.[1];
}

// Only guide frontmatter supplies a sitemap date; static routes omit it.
function lastmodFor(url) {
  const pathname = new URL(url).pathname;
  const slug = pathname.replace(/^\/+|\/+$/g, ''); // 去首尾斜杠
  const candidates = [`src/content/guides/${slug}.md`, `src/content/guides/${slug}.mdx`];
  const file = candidates.find((rel) => existsSync(join(ROOT, rel)));
  return file ? frontmatterDate(file) : undefined;
}

// 发售前推测框架内容（GuideLayout 已对这些 status 设 noindex）——
// 与页面的 noindex 保持一致，一并从 sitemap 排除，避免把 noindex 页交给 Google。
// 发售后用实测内容改为 official/beta 时，从此列表移除即可重新收录。
const NOINDEX_GUIDE_URLS = [
  '/beginner-guide/',
  '/cheats/',
  '/unlocks/',
  '/tips/best-build/',
  '/tips/credits-farming/',
  '/tips/fastest-vehicle/',
];
const isNoindexUrl = (url) =>
  NOINDEX_GUIDE_URLS.some((path) => url.endsWith(path));

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !isNoindexUrl(page),
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
