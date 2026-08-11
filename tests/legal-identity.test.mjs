import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const paths = [
  "src/content/en.ts",
  "src/content/fr.ts",
  "src/routes/index.tsx",
  "src/routes/__root.tsx",
];

async function sources() {
  return Promise.all(paths.map((path) => readFile(path, "utf8")));
}

test("uses the correct bilingual legal entities and removes the former entity", async () => {
  const [en, fr, index, root] = await sources();
  const all = [en, fr, index, root].join("\n");

  assert.equal(all.includes("Brice Mimifir Inc."), false);
  assert.equal(/faisant affaire sous le nom|doing business as|\bDBA\b/i.test(all), false);
  assert.match(fr, /Groupe Pheniiix Ankh Inc\./);
  assert.match(en, /Group Pheniiix Ankh Inc\./);
  assert.match(root, /Brice Mimifir — Business & Technology Transformation/);
  assert.match(root, /og:site_name.*Brice Mimifir/);
  assert.match(index, /Groupe Pheniiix Ankh Inc\./);
  assert.match(index, /Group Pheniiix Ankh Inc\./);
});

test("uses the approved consent and footer copy", async () => {
  const [en, fr] = await sources();
  assert.match(
    en,
    /I agree that Group Pheniiix Ankh Inc\. may use this information to respond to my inquiry\./,
  );
  assert.match(
    fr,
    /J'accepte que Groupe Pheniiix Ankh Inc\. utilise ces renseignements pour répondre à ma demande\./,
  );
  assert.match(en, /Group Pheniiix Ankh Inc\. — Professional website of Brice Mimifir\./);
  assert.match(fr, /Groupe Pheniiix Ankh Inc\. — Site professionnel de Brice Mimifir\./);
});
