# Hero Media Revert and Beyond Section Design

**Status:** Approved for implementation

## Objective

Restore the previous editorial image in the Hero, remove Brice MIMIFIR's portrait from the website and preserve all approved v2 French and English content.

## Hero

- Restore `public/images/hero-editorial-temporary.jpg` from the branch base.
- Use this image only in the Hero.
- Preserve the current Hero structure, copy, calls to action, location and responsive 56/44 composition.
- Restore the accurate localized alternative text used with that image:
  - French: “Photographie éditoriale temporaire : lumière du jour à travers de hautes fenêtres dans un hall de pierre silencieux.”
  - English: “Temporary editorial photograph: daylight through tall windows in a quiet stone lobby.”

## Personal portrait

- Remove `public/images/brice-mimifir-editorial.jpg` completely.
- Remove its media constant and every source-code reference.
- Do not replace it with another portrait or generated image.

## Beyond client work

- Keep the section independent and in its current page order.
- Preserve the complete approved French and English copy for Future Caribbean and ANBACHAIN, including both external links.
- Remove the photograph, figure and caption.
- Restore the former restrained editorial treatment: Ivory background, standard content shell, fine separators, generous spacing and no decorative image.
- Use the existing design tokens and typography without adding new visual rules.

## Content and scope protection

- Do not change any other approved v2 content, SEO metadata, navigation, contact behaviour or footer links.
- Remove image-only fields from the Beyond content contract and dictionaries because they are no longer rendered.
- Update documentation that currently states that the real portrait is used.

## Verification

- Confirm the old Hero image is present and referenced only by the Hero.
- Confirm the personal portrait file and all references are absent.
- Confirm both localized Beyond sections still contain Future Caribbean and ANBACHAIN.
- Run Prettier, ESLint, TypeScript, the Next.js production build and `git diff --check`.
