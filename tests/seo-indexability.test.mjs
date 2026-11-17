import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { test } from 'node:test';

const readBuiltPage = (path) =>
  readFile(new URL(`../dist${path}index.html`, import.meta.url), 'utf8');

test('retained gameplay and buying pillars are indexable with self canonicals', async () => {
  const sitemap = await readFile(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');

  for (const path of ['/game-overview/', '/vehicles/landspeeders/', '/game-modes/', '/tips/galactic-racer-first-tour-plan/']) {
    const html = await readBuiltPage(path);
    assert.doesNotMatch(html, /<meta name="robots" content="noindex/);
    assert.ok(html.includes(`rel="canonical" href="https://swgalacticracer.wiki${path}"`));
    assert.ok(sitemap.includes(`https://swgalacticracer.wiki${path}`));
  }
});

test('merged search intents have one HTTP 301 rule without a competing HTML page', async () => {
  const map = JSON.parse(await readFile(new URL('../src/data/content-redirects.json', import.meta.url), 'utf8'));
  const redirects = await readFile(new URL('../dist/_redirects', import.meta.url), 'utf8');
  const sitemap = await readFile(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');

  for (const from of ['/cheats/', '/tips/fastest-vehicle/', '/star-wars-galactic-racer-gameplay-preview/', '/vehicle-classes-multiplayer-guide/', '/49-achievements/', '/platforms/', '/very-positive-october/', '/tips/tales-of-podracing/', '/tips/fix-the-hitch-before-the-pod/']) {
    const to = map[from];
    assert.ok(to, `no migration for ${from}`);
    assert.ok(redirects.split('\n').includes(`${from} ${to} 301`));
    assert.equal(map[to.split('#')[0]], undefined, `redirect chain for ${from}`);
    await assert.rejects(access(new URL(`../dist${from}index.html`, import.meta.url)));
    assert.ok(!sitemap.includes(`https://swgalacticracer.wiki${from}</loc>`));
    const target = await readBuiltPage(to.split('#')[0]);
    if (to.includes('#')) assert.ok(target.includes(`id="${to.split('#')[1]}"`));
  }
});

test('internal guide links use the canonical trailing-slash path', async () => {
  const vehicleGuide = await readBuiltPage('/vehicles/landspeeders/');

  assert.doesNotMatch(vehicleGuide, /href="\/guides\//);
  assert.match(vehicleGuide, /href="\/vehicles\/podracers\/"/);
});
