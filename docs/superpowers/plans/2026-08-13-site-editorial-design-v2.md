# Site Editorial and Design v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved bilingual editorial and design v2 specification to the existing Next.js website without publishing it.

**Architecture:** Keep the current typed dictionary architecture and existing accessible editorial components. Extend content types for richer experience narratives, About and Beyond sections; keep interactive behaviour isolated in the existing client components and validate contact data at both client and server boundaries.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Zod, Resend.

## Global Constraints

- French and English content must remain complete and synchronized.
- Keep the Midnight `#101E2D`, Ivory `#F3EFE6`, Soft White `#FBFAF7` and Brass `#B9975B` visual system with Newsreader and Manrope.
- No Hero metrics, no Kori Venture public case study and no invented claims or portraits.
- Use the former editorial image only in the Hero; keep Beyond independent, Ivory and free of photography, as superseded by `2026-08-13-media-revert-design.md`.
- Keep the technical stack inside the Experience accordion and out of primary navigation.
- Preserve keyboard access, focus management, reduced motion and field-level errors.
- Do not add tests or Playwright because the repository owner explicitly removed them.
- Do not deploy or publish.

---

### Task 1: Content model and media

**Files:**

- Modify: `src/content/types.ts`
- Modify: `src/content/site.ts`
- Restore: `public/images/hero-editorial-temporary.jpg`

- [x] Extend the typed content contract for localized Open Graph data, Hero support text, offer outcomes and engagement models, rich experience sections, About, Beyond and contact consent.
- [x] Restore the former editorial image as the Hero image.
- [x] Remove the personal portrait asset and all consumers.

### Task 2: Complete French and English dictionaries

**Files:**

- Modify: `src/content/fr.ts`
- Modify: `src/content/en.ts`

- [x] Replace navigation, Hero, challenges and offer copy with the approved wording.
- [x] Add the complete National Bank and CGI narratives, contextual metrics, Genesys Cloud CX work and categorized technical context.
- [x] Add the full three perspective articles, About biography and principles, Beyond initiatives, contact copy, footer, privacy, accessibility and error wording.
- [x] Confirm Kori Venture is absent and prototype technologies are explicitly qualified.

### Task 3: Page structure and editorial components

**Files:**

- Modify: `app/[lang]/page.tsx`
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/sections/HowIHelp.tsx`
- Modify: `src/components/sections/Experience.tsx`
- Modify: `src/components/sections/Thinking.tsx`
- Create: `src/components/sections/About.tsx`
- Create: `src/components/sections/Beyond.tsx`

- [x] Render the approved section order and anchor IDs.
- [x] Remove Hero proof points, then render engagement models and location within the existing 56/44 composition.
- [x] Render offer outcomes, engagement models and CTA using existing editorial rules and tabs/accordions.
- [x] Render detailed experience narratives and contextual metrics, keeping technical data in the existing accessible accordion.
- [x] Render About and Beyond as separate sections, with Beyond using its restrained Ivory treatment and no photograph.

### Task 4: SEO, navigation, footer and errors

**Files:**

- Modify: `src/lib/metadata.ts`
- Modify: `app/[lang]/page.tsx`
- Modify: `src/components/layout/FullscreenMenu.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `app/[lang]/error.tsx`

- [x] Use localized SEO and Open Graph titles/descriptions independently.
- [x] Update Person and Organization JSON-LD with the exact titles, location and LinkedIn/Instagram `sameAs` values.
- [x] Match menu and footer navigation, location, accessible social labels, legal notices and external ANBACHAIN treatment.
- [x] Match localized general-error wording and actions.

### Task 5: Contact consent and privacy behaviour

**Files:**

- Modify: `src/components/sections/Contact.tsx`
- Modify: `src/server/contact/schema.ts`
- Modify: `src/server/contact/email-template.ts`

- [x] Add required consent state, field-level client validation and submission payload.
- [x] Require literal consent server-side while preserving origin, size, timing, honeypot and idempotency protections.
- [x] Include consent in plain-text and HTML email templates without logging personal content.

### Task 6: Documentation and verification

**Files:**

- Modify: `README.md`
- Modify: `CHANGELOG.md`

- [x] Document the v2 positioning, final media decision and updated form fields.
- [x] Run `npx prettier --check .`, `npm run lint`, `npm run typecheck`, `npm run build` and `git diff --check`.
- [x] Start the production build locally and verify `/`, `/fr`, `/en`, legal pages, social links, metadata and contact validation through HTTP requests.
- [x] Stop the local server and remove generated `.next` and `tsconfig.tsbuildinfo` outputs.
