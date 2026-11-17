import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

test('guide directory promotes canonical task references and exposes every retained article', async () => {
  const html = await readFile(new URL('../dist/guide/index.html', import.meta.url), 'utf8');
  const start = html.indexOf('latest-guides');
  const end = start < 0 ? -1 : html.indexOf('</section>', start);
  const latest = start < 0 ? '' : html.slice(start, end < 0 ? html.length : end);

  assert.ok(latest, 'expected a latest guides section');
  for (const path of ['/tips/shunt-takedown/', '/pc-requirements/', '/tracks/all-named-tracks/']) {
    assert.ok(html.includes(`href="${path}"`), `missing canonical task reference ${path}`);
  }
  const page2 = await readFile(new URL('../dist/guide/page/2/index.html', import.meta.url), 'utf8');
  const page3 = await readFile(new URL('../dist/guide/page/3/index.html', import.meta.url), 'utf8');
  const directory = html + page2 + page3;
  for (const path of ['/act-three-podrace-vehicle-switch-plan/', '/no-sound-window-focus-race-audio/', '/keyboard-preset-driving-practice/', '/six-player-tour-race-plan/']) {
    assert.ok(directory.includes(`href="${path}"`), `recent substantive article was lost: ${path}`);
  }
  assert.doesNotMatch(directory, /href="\/(?:49-achievements|platforms|very-positive-october)\//);
});
