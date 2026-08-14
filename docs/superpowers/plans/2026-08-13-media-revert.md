# Hero Media Revert Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the former Hero image, remove the personal portrait and return Beyond to its former restrained Ivory treatment while preserving all v2 bilingual copy.

**Architecture:** Keep media paths centralized in `src/content/site.ts`, keep the Hero as the only image consumer and simplify Beyond into a server-rendered editorial section. Remove obsolete image-only dictionary fields and update documentation to match the final state.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.

## Global Constraints

- Preserve every approved French and English content paragraph for Future Caribbean and ANBACHAIN.
- Do not modify SEO, navigation, contact behaviour or footer links.
- Do not introduce tests or Playwright, per the repository owner's prior instruction.
- Do not publish or deploy.

---

### Task 1: Restore the Hero media

**Files:**

- Restore: `public/images/hero-editorial-temporary.jpg`
- Delete: `public/images/brice-mimifir-editorial.jpg`
- Modify: `src/content/site.ts`
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/content/fr.ts`
- Modify: `src/content/en.ts`

**Interfaces:**

- Produces: `HERO_IMAGE: "/images/hero-editorial-temporary.jpg"`
- Consumes: `Content["hero"].imageAlt`

- [x] Restore the former Hero binary asset from the branch base.
- [x] Replace `PORTRAIT_IMAGE` with `HERO_IMAGE` and use it only in `Hero.tsx`.
- [x] Restore accurate French and English alternative text for the former image.
- [x] Delete the personal portrait asset.
- [x] Confirm with `rg` that no personal portrait reference remains.

### Task 2: Restore the restrained Beyond treatment

**Files:**

- Modify: `src/components/sections/Beyond.tsx`
- Modify: `src/content/types.ts`
- Modify: `src/content/fr.ts`
- Modify: `src/content/en.ts`

**Interfaces:**

- Consumes: `Content["beyond"]` containing `eyebrow`, `headline`, `intro` and `items` only.
- Produces: an independent Ivory section with a standard shell, fine separators and no image.

- [x] Remove `next/image`, the figure and the caption from Beyond.
- [x] Render the existing heading and complete initiative copy inside `section-y bg-ivory` and `shell`.
- [x] Remove `imageAlt` and `imageCaption` from the typed contract and both dictionaries.
- [x] Confirm Future Caribbean and ANBACHAIN copy and links remain in both languages.

### Task 3: Documentation and verification

**Files:**

- Modify: `README.md`
- Modify: `CHANGELOG.md`
- Modify: `docs/superpowers/plans/2026-08-13-site-editorial-design-v2.md`

- [x] Remove documentation claims that the personal portrait is used.
- [x] Record the restored Hero image and portrait removal in the changelog.
- [x] Run `npm exec prettier -- --write .`.
- [x] Run `npm run lint`, `npm run typecheck`, `npm run build` and `git diff --check`.
- [x] Remove generated `.next` and `tsconfig.tsbuildinfo` outputs after verification.
