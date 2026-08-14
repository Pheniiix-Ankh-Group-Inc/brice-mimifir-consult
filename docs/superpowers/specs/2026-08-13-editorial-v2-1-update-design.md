# Editorial v2.1 Update Design

**Source:** `Brice-MIMIFIR-Site-Cahier-Editorial-et-Design-v2(1).md`

**Status:** Approved for implementation by the source document and the user's request to apply its updates.

## Scope

Apply only the differences introduced by editorial specification v2.1 while preserving later user decisions and already-approved code changes.

## Hero

- Replace the French headline with “Faire évoluer vos systèmes, avec vos équipes.”
- Replace the English headline with “Evolving your systems, alongside your teams.”
- Keep the existing eyebrow, body, calls to action, engagement line, location and 56/44 layout.
- Preserve the user's later media decision: the former editorial image remains in the Hero and the personal portrait remains absent.
- Keep the current accurate localized alternative text for the former editorial image.

## Merged About section

- Permanently merge About and Beyond into the single existing `#about` section.
- Remove the separate Beyond component and render call.
- Use the exact v2.1 French and English headings, four narrative paragraphs, four principles, Future Caribbean copy, ANBACHAIN copy and closing statement.
- Keep the Future Caribbean and ANBACHAIN links unchanged.
- Keep the section free of photography and avoid repeating case studies or technical inventory.
- Preserve the existing Ivory editorial treatment, generous spacing and fine Brass rules.
- Present the personal narrative first, the principles second, the initiatives third and the closing statement last.

## Content model

- Extend the About content object with `initiatives` and `conclusion`.
- Remove the superseded Beyond object from the typed content contract and both dictionaries.
- Keep all other content objects unchanged, including the recently implemented Experience tabs and accordions.

## Page and documentation

- Remove the Beyond import and render call from the localized home page.
- Delete the unused Beyond component.
- Update the changelog and README to describe v2.1 and the merged section.
- Do not deploy or publish.

## Verification

- Confirm the v2.1 Hero headlines in both rendered languages.
- Confirm one About section contains all narrative, principles, Future Caribbean, ANBACHAIN and closing copy.
- Confirm there is no separate Beyond section or component and no personal portrait reference.
- Confirm Experience tabs and accordions remain present.
- Run Prettier, ESLint, TypeScript, the Next.js production build and `git diff --check`.
