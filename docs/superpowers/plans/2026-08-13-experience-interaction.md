# Experience Interaction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the two client realizations into desktop tabs and mobile accordions, attach a filtered technical accordion to each realization and retain one separate complementary-experience accordion.

**Architecture:** Extend the typed dictionaries so each case study owns its stable interaction id, short label and technical groups. Refactor the existing client-side Experience component into focused render helpers while keeping all interaction state local and preserving the current editorial presentation.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.

## Global Constraints

- Keep all approved client narratives, dates, indicators and conclusions unchanged in French and English.
- Preserve the Ivory, Midnight, Brass, Newsreader and Manrope design system.
- Do not add dependencies, tests, Playwright, cards, shadows or rounded containers.
- Keep technical toggles independent and all controls keyboard accessible.
- Do not publish or deploy.

---

### Task 1: Typed experience content

**Files:**

- Modify: `src/content/types.ts`
- Modify: `src/content/fr.ts`
- Modify: `src/content/en.ts`

**Interfaces:**

- Produces: `TechnicalContext`, `CaseStudy.id`, `CaseStudy.tab`, `CaseStudy.technical` and `Content["experience"].complementary`.
- Consumes: the approved v2 case-study text and technical inventory.

- [x] Add stable ids and localized short labels to both case studies.
- [x] Move National Bank technologies into its own categorized technical context.
- [x] Move CGI technologies into its own categorized technical context.
- [x] Replace the global technical object with shared technical labels plus the independent complementary experience object.
- [x] Preserve all client narrative and indicator strings verbatim.

### Task 2: Responsive interaction component

**Files:**

- Modify: `src/components/sections/Experience.tsx`

**Interfaces:**

- Consumes: `Content["experience"]` from Task 1.
- Produces: desktop tabs, mobile realization accordions, per-case technical accordions and one independent complementary accordion.

- [x] Extract reusable case-study and technical-group render helpers within `Experience.tsx`.
- [x] Add the desktop tab list with click, `ArrowLeft`, `ArrowRight`, `Home` and `End` support.
- [x] Add the mobile realization accordions with National Bank initially open.
- [x] Add unique accessible ids for desktop and mobile panels and nested technical contexts.
- [x] Add the separate complementary-experience accordion after both client realizations.
- [x] Remove the old global technical accordion.

### Task 3: Documentation and verification

**Files:**

- Modify: `CHANGELOG.md`
- Modify: `docs/superpowers/plans/2026-08-13-experience-interaction.md`

- [x] Record the responsive realization interaction and per-case technical contexts.
- [x] Run Prettier, ESLint, TypeScript, the Next.js production build and `git diff --check`.
- [x] Verify through rendered output that both languages contain the two cases, their technical contexts and the separate complementary accordion.
- [x] Remove generated build outputs after verification.
