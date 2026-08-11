import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("footer uses accessible icon-only social links", async () => {
  const footer = await readFile("src/components/layout/Footer.tsx", "utf8");
  const hero = await readFile("src/components/sections/Hero.tsx", "utf8");
  const menu = await readFile("src/components/layout/FullscreenMenu.tsx", "utf8");

  assert.match(footer, /LinkedInIcon/);
  assert.match(footer, /InstagramIcon/);
  assert.match(footer, /aria-label=\{t\.common\.linkedin\}/);
  assert.match(footer, /aria-label=\{t\.common\.instagram\}/);
  assert.match(footer, /h-11 w-11/);
  assert.match(footer, /hover:text-brass/);
  assert.match(hero, /\{t\.common\.linkedin\}/);
  assert.match(hero, /\{t\.common\.instagram\}/);
  assert.match(menu, /\{t\.common\.linkedin\}/);
  assert.match(menu, /\{t\.common\.instagram\}/);
});
