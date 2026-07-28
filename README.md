# Star Wars Galactic Racer Wiki

Pre-release fan wiki for **Star Wars Galactic Racer** (release 2026-10-06), built with Astro 5 + Tailwind 4. Static output, SEO-first, every fact source-tracked.

🔗 **Live site: https://swgalacticracer.wiki**

Mirrors the architecture of the Mortal Shell II wiki, retargeted to the racing game and the `swgalacticracer.wiki` execution plan (`游戏攻略站/Star Wars Galactic Racer攻略站.docx`).

## Stack

- **Astro 5** (`output: 'static'`, `trailingSlash: 'always'`)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **@astrojs/sitemap** — generates `sitemap-index.xml`
- Zero runtime JS except the hero countdown

## Commands

```bash
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the build
```

## Theme

Deep-space palette in `src/styles/global.css`:

- `void-950…200` — midnight-blue neutrals (backgrounds → text)
- `plasma` `#35d0e8` — engine-glow cyan (primary accent)
- `sand` `#e8b84b` — Tatooine gold (secondary accent)
- `ion` `#7c5cff` — violet highlight

## Content model

Every fact carries a **confidence status** (`src/data/sources.ts`) — the core
differentiator vs. the competitor site:

| Status | Meaning |
|--------|---------|
| ✅ Official | Confirmed by developer (site / Steam / Discord) |
| 🔬 Beta-tested | Verified in a beta or demo build |
| 👁️ Trailer | Seen in a trailer, systems unknown |
| 📖 Lore-based | Inferred from Star Wars canon — to verify at launch |
| ❓ Unconfirmed | Forum rumour, never used as primary content |

Structured data (`src/data/`):
- `characters.ts` — racers (`RACERS`)
- `vehicles.ts` — pods / speeders / swoops (`VEHICLES`)
- `tracks.ts` — circuits (`TRACKS`)
- `images.ts` — media catalog (original vector art only)

## Adding a page

Drop a `.md` file in `src/content/guides/` — the path becomes the URL.
`src/content/guides/tips/best-build.md` → `/tips/best-build/`.

Frontmatter fields are validated in `src/content.config.ts`:

```yaml
---
title: "..."          # <title>, ≤60 chars
heading: "..."         # H1 (optional, defaults to title)
description: "..."     # meta description, 50–160 chars
category: tips         # guide|characters|vehicles|tracks|unlocks|tips|news
status: lore           # overall confidence status
preRelease: true       # shows the pre-release notice banner
order: 30              # sort order in list pages
updatedAt: "2026-07-24"
sources:
  - status: lore
    note: "..."
    lastChecked: "2026-07-24"
---
```

## Legal note

Independent fan site. Not affiliated with Lucasfilm, Disney, EA, or Lucasfilm
Games. **No copyrighted Star Wars imagery is hosted** — all visuals in
`public/images/` are original, non-branded vector art. Swap in official
press-kit assets (with attribution) only if/when fair-use terms allow.

## Pages (19 built)

- `/` — home (WebSite + Organization schema, countdown)
- `/guide/` — guide hub (CollectionPage)
- `/characters/`, `/vehicles/`, `/tracks/`, `/tips/` — category indexes
- `/unlocks/` — unlock guide
- Detail articles: `/characters/anakin-skywalker/`, `/vehicles/anakin-podracer/`,
  `/tracks/tatooine-canyon/`, `/tips/{best-build,credits-farming,fastest-vehicle}/`,
  `/beginner-guide/`, `/release-date/` (NewsArticle)
- `/about/`, `/contact/`, `/privacy/`, `404`

## Deploy

Push to GitHub → Vercel / Cloudflare Pages. Set the final domain in
`astro.config.mjs` (`SITE`) and `src/data/site.ts`. Set `PUBLIC_GA4_ID` env var
to enable analytics. Submit `sitemap-index.xml` in Google Search Console.
