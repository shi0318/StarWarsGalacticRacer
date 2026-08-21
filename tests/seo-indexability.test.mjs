import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const readBuiltPage = (path) =>
  readFile(new URL(`../dist${path}index.html`, import.meta.url), 'utf8');

test('temporary speculative guides use noindex follow and stay out of the sitemap', async () => {
  const cheats = await readBuiltPage('/cheats/');
  const fastestVehicle = await readBuiltPage('/tips/fastest-vehicle/');
  const sitemap = await readFile(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');

  assert.match(cheats, /<meta name="robots" content="noindex, follow"\s*\/?>/);
  assert.match(fastestVehicle, /<meta name="robots" content="noindex, follow"\s*\/?>/);
  assert.doesNotMatch(sitemap, /https:\/\/swgalacticracer\.wiki\/cheats\//);
  assert.doesNotMatch(sitemap, /https:\/\/swgalacticracer\.wiki\/tips\/fastest-vehicle\//);
});

test('officially sourced guide pages remain indexable', async () => {
  const gameplayPreview = await readBuiltPage('/star-wars-galactic-racer-gameplay-preview/');
  const sitemap = await readFile(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');

  assert.doesNotMatch(gameplayPreview, /<meta name="robots"/);
  assert.match(sitemap, /https:\/\/swgalacticracer\.wiki\/star-wars-galactic-racer-gameplay-preview\//);
});

test('internal guide links use the canonical trailing-slash path', async () => {
  const vehicleGuide = await readBuiltPage('/vehicle-classes-multiplayer-guide/');

  assert.doesNotMatch(vehicleGuide, /href="\/guides\//);
  assert.match(vehicleGuide, /href="\/tips\/fastest-vehicle\/"/);
});
