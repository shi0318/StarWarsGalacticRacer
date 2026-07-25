import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 站点最终域名（方案首选 swgalacticracer.wiki，注册后可替换）
const SITE = 'https://swgalacticracer.wiki';

// 发售前推测框架内容（GuideLayout 已对这些 status 设 noindex）——
// 与页面的 noindex 保持一致，一并从 sitemap 排除，避免把 noindex 页交给 Google。
// 发售后用实测内容改为 official/beta 时，从此列表移除即可重新收录。
const NOINDEX_GUIDE_URLS = [
  '/beginner-guide/',
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
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
