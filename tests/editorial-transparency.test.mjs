import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';

const dist = new URL('../dist/', import.meta.url);
const readPage = (path = '') => readFile(new URL(`${path}index.html`, dist), 'utf8');
const structuredData = (html) => [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .flatMap((match) => JSON.parse(match[1])['@graph'] ?? []);

async function pages(directory = dist) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const url = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    if (entry.isDirectory()) result.push(...await pages(url));
    else if (entry.name.endsWith('.html')) result.push(url);
  }
  return result;
}

test('every generated page identifies the independent fan site and exposes its policies', async () => {
  for (const file of await pages()) {
    const html = await readFile(file, 'utf8');
    const footer = html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? '';
    assert.match(footer, /Unofficial fan guide\. Not affiliated with Lucasfilm, Disney, Fuse Games or Secret Mode\./, file.href);
    for (const path of ['about', 'contact', 'privacy', 'terms', 'editorial']) {
      assert.ok(footer.includes(`href="/${path}/"`), `${file.href} missing ${path}`);
    }
    assert.doesNotMatch(html, />Beta-tested<|Personally verified in a Beta|Last verified|>Official<|Confirmed by the developer via official website/);
    assert.doesNotMatch(html, /<script[^>]+src=["'][^"']*(?:googletagmanager|googlesyndication|clarity\.ms|analytics\.ahrefs)/);
    assert.doesNotMatch(html, /ca-pub-0{8,}|pub-123456|googlesyndication\.com/);
  }
});

test('article authorship and dates describe the page rather than a claimed verification', async () => {
  let articleCount = 0;
  for (const file of await pages()) {
    const html = await readFile(file, 'utf8');
    for (const article of structuredData(html).filter((node) => ['Article', 'NewsArticle'].includes(node['@type']))) {
      articleCount++;
      const header = html.match(/<article\b[\s\S]*?<header\b[^>]*>([\s\S]*?)<\/header>/)?.[1] ?? '';
      const visibleDates = [...header.matchAll(/<time\b([^>]*)>([\s\S]*?)<\/time>/g)]
        .map((match) => ({ date: match[1].match(/\bdatetime="([^"]+)"/)?.[1], text: match[2].trim() }));
      assert.match(html, /Star Wars Galactic Racer Guide editorial team/);
      assert.equal(article.author?.['@id'], 'https://swgalacticracer.wiki/#organization');
      const publisher = structuredData(html).find((node) => node['@id'] === article.author['@id']);
      assert.equal(publisher?.['@type'], 'Organization');
      assert.equal(publisher?.name, 'Star Wars Galactic Racer Guide editorial team');
      assert.match(article.dateModified, /^\d{4}-\d{2}-\d{2}$/);
      if (article.dateModified) {
        assert.match(header, /Last updated/);
        assert.ok(visibleDates.some((time) => time.date === article.dateModified && time.text === article.dateModified));
        assert.ok(article.dateModified <= new Date().toISOString().slice(0, 10), `${file.href}: future modified date`);
      }
      // Publication time is optional; an ordinary update must not manufacture one.
      if (article.datePublished) {
        assert.match(header, /Published/);
        assert.ok(visibleDates.some((time) => time.date === article.datePublished && time.text === article.datePublished));
      }
    }
  }
  assert.ok(articleCount > 0, 'expected substantive guide articles');
  assert.ok(!structuredData(await readPage()).some((node) => node['@type'] === 'FAQPage'), 'no independent hardcoded homepage FAQ');
});

test('trust pages provide current substantive policies without pretending ads or a CMP are active', async () => {
  for (const path of ['about', 'contact', 'privacy', 'terms', 'editorial']) {
    const html = await readPage(`${path}/`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.ok(structuredData(html).some((node) => node['@type'] === 'WebPage'));
    assert.match(html, /2026-11-17/);
  }
  const privacy = await readPage('privacy/');
  assert.match(privacy, /does not load Google Analytics/);
  assert.match(privacy, /does not currently serve advertising/);
  assert.doesNotMatch(privacy, /record anonymised data|may display ads served/);
  const editorial = await readPage('editorial/');
  assert.match(editorial, /not a hands-on test/);
  assert.match(editorial, /hardware/);
});
