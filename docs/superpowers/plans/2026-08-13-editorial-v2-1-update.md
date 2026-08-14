# Editorial v2.1 Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved v2.1 Hero and merged About content in French and English while preserving the user's later media decision and the recently implemented Experience interactions.

**Architecture:** Replace only the localized Hero headline and About content model, then merge the Beyond data and UI into About. Remove the now-unused Beyond component and page render while leaving all unrelated sections and application behaviour intact.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.

## Global Constraints

- Use exact approved v2.1 French and English copy.
- Keep the former editorial image in the Hero and keep Brice's personal portrait absent.
- Keep the Experience tabs, mobile accordions and technical contexts unchanged.
- Keep the existing Ivory editorial system and do not add cards, photography or dependencies.
- Do not add tests or Playwright, per the repository owner's prior instruction.
- Do not publish or deploy.

---

### Task 1: Localized content model

**Files:**

- Modify: `src/content/types.ts`
- Modify: `src/content/fr.ts`
- Modify: `src/content/en.ts`

**Interfaces:**

- Produces: `Content["about"]` with biography, principles, initiatives and conclusion.
- Removes: `Content["beyond"]`.

- [x] Replace the localized Hero headline lines with the exact v2.1 titles.
- [x] Replace the About biography, headline, principles label and four principles with the exact v2.1 copy.
- [x] Move the updated Future Caribbean and ANBACHAIN entries into `about.initiatives`.
- [x] Add the exact localized closing statement to `about.conclusion`.
- [x] Remove the standalone Beyond data from both dictionaries and the type contract.

### Task 2: Merged About presentation

**Files:**

- Modify: `src/components/sections/About.tsx`
- Delete: `src/components/sections/Beyond.tsx`
- Modify: `app/[lang]/page.tsx`

**Interfaces:**

- Consumes: the expanded `Content["about"]` from Task 1.
- Produces: one `#about` section containing narrative, principles, initiatives and closing statement.

- [x] Preserve the existing About heading and narrative grid.
- [x] Render four principles with fine rules and editorial numbering.
- [x] Render Future Caribbean and ANBACHAIN as secondary initiative rows with external links.
- [x] Render the closing statement after a Brass-accented separator.
- [x] Remove the Beyond import, component render and source file.

### Task 3: Documentation and verification

**Files:**

- Modify: `README.md`
- Modify: `CHANGELOG.md`
- Modify: `docs/superpowers/plans/2026-08-13-editorial-v2-1-update.md`

- [x] Document the v2.1 merged About section and shorter Hero title.
- [x] Run Prettier, ESLint, TypeScript, the Next.js production build and `git diff --check`.
- [x] Verify the rendered French and English output contains the exact new Hero, About, initiatives and closing copy.
- [x] Confirm the separate Beyond component and personal portrait references are absent while Experience interactions remain present.
- [x] Confirm generated `.next` and `tsconfig.tsbuildinfo` outputs remain ignored and untracked (the active local preview may regenerate `.next`).
