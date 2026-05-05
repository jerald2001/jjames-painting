# Design Spec: Clonable Local Business Website Template

**Date:** 2026-05-05
**Status:** Approved

## Overview

A clonable template system for building static local business websites across Australia. Each client gets their own repo clone with branding, copy, and content dropped in. Supports both brochure-style sites (hero, about, services, testimonials, contact) and lead-gen focused sites (landing page, strong CTA, booking widget, trust signals).

## Project Structure

```
bobgunn-website/
  CLAUDE.md              # All build rules, tech stack, workflows
  PLAN.md                # Phased build steps (mirrors CLAUDE.md phases)
  .env                   # API keys, env vars per client
  client-brief/          # Everything about the client goes here
    README.md            # Processing instructions for Claude
  assets/
    branding/            # Flat dump: logos, flyers, palettes, whatever
    icons/
      base/              # Base icon library (checkmarks, arrows, phone, location, etc.)
      industry/          # Industry-specific icons generated during build
  copywriting/
    README.md            # Voice rules, anti-slop, tone guidelines (universal)
    anti-slop-kill-list.md
  public/
    fonts/               # Self-hosted .woff2 files
  src/                   # Next.js app (created during Phase 3)
```

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (lean) / React 19 / TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Fonts | Self-hosted via `next/font/local` (defined per client) |
| Icons | Generated via web-asset-generator skill (base + industry-specific) |
| Screenshots | Playwright MCP server |
| Layout Generation | Google Stitch MCP server |
| Hosting | Vercel |

No heavy animation libraries by default. Add Framer Motion only if a specific client needs it.

## Stitch MCP Workflow

1. Invoke Stitch MCP to generate full page layouts based on client brief and branding
2. Present layout options to user
3. Claude reviews chosen layout against client branding and copywriting rules
4. Claude codes the final version, applying brand colors, typography, voice, and anti-slop checks

Stitch is the architect's sketch. Claude is the builder who makes sure the sketch works with the materials on hand. Stitch output is never shipped as-is.

## client-brief/ Directory

A flat dump directory where all client intel goes. Any format accepted: .md, .txt, .mp3, .wav, .mp4, .pdf, .png, screenshots, meeting notes.

**Processing order:**
1. Read `client-brief.md` first if it exists (primary source of truth)
2. Process everything else as supplementary context
3. Extract: business name, industry, location(s), services, target audience, pages needed, site direction (brochure vs lead-gen), constraints, competitor references
4. If anything is ambiguous or missing, ask the user
5. Produce a one-page summary at start of Phase 1, confirm with user before proceeding

## Brand Assets

`assets/branding/` is a flat dump. Claude reads everything in there and figures out what's what:
- Extract colors from logos if no palette is provided
- Identify reference materials (flyers, existing collateral)
- Use real assets wherever they exist, never use placeholders where real assets are available

## Copywriting Rules

All copy rules live in `copywriting/README.md` (master reference) and `copywriting/anti-slop-kill-list.md`.

**Brand voice:** Friendly professional. Casual, confident, direct. No swearing in client-facing copy. "Write like you're explaining something to a mate who asked for your help. You know what you're doing, you're not trying to impress anyone, you just get it done."

**Hard rules:**
- No em-dashes (signals AI authorship)
- No emojis anywhere
- Use contractions naturally
- Vary sentence length, use fragments where natural
- Reading level target: 5th-6th grade (Hemingway Editor score 5-6)

**Three-line sanity check (generalized):**
1. Could this be about any other business in the same industry? If yes, not specific enough.
2. Would the business owner actually say this? If not, rewrite.
3. Does this put a thought in their head they weren't having? If yes, rewrite.

**Anti-slop enforcement:** Every piece of user-facing copy is checked against `anti-slop-kill-list.md`. If a banned word or pattern appears, the copy fails. No exceptions.

**Removed (doctor/IPG-specific):**
- `authority-openings.md`
- `doctor-language-swaps.md`
- `vsl-frameworks.md`

## Design System

Colors and typography are derived per-client from their branding, not hardcoded in CLAUDE.md.

**Anti-generic guardrails (universal):**
- Never use default Tailwind palette (indigo-500, blue-600, etc.)
- Layered, color-tinted shadows with low opacity (never flat shadow-md)
- Different fonts for headings and body
- Tight tracking on large headings, generous line-height on body
- Intentional, consistent spacing tokens
- Every clickable element gets hover, focus-visible, and active states
- Only animate `transform` and `opacity`, never `transition-all`

## Build Phases (PLAN.md)

### Phase 1: Discovery & Setup
- Read client-brief/ (client-brief.md first, then everything else)
- Read assets/branding/ and extract colors, fonts, style direction
- Generate base icon library using web-asset-generator skill
- Initialize Next.js project (lean setup)
- Install Tailwind v4 + shadcn/ui
- Set up self-hosted fonts
- Summarize findings and confirm direction with user

**Done when:** Project runs on localhost, branding is understood, user confirms direction.

### Phase 2: Layout via Stitch
- Invoke Stitch MCP to generate page layouts based on client brief
- Present layout options to user
- Review chosen layout against branding and copy rules
- Generate industry-specific icons using web-asset-generator

**Done when:** User approves layout direction for all pages.

### Phase 3: Build
- Code pages from Stitch-approved layouts
- Apply brand colors, typography, spacing
- Build all components (hero, services, testimonials, contact, etc.)
- Mobile-first responsive
- Screenshot with Playwright MCP and compare against approved layouts

**Done when:** All pages built, responsive, visually matching approved layouts.

### Phase 4: Content & Copy
- Write all copy following copywriting/README.md rules
- Run anti-slop check against every piece of user-facing text
- Add real client content (images, testimonials, service details)
- Replace any remaining placeholders

**Done when:** No placeholder content remains, all copy passes anti-slop check.

### Phase 5: Polish & Deploy
- SEO meta tags, Open Graph images, schema markup
- Favicon and app icons via web-asset-generator
- Speed optimization:
  - Lazy-load all images below the fold
  - Next.js Image component with proper sizes and formats (WebP/AVIF)
  - Remove unused CSS/JS, tree-shake dependencies
  - Minimize client-side JavaScript, prefer server components
  - Code splitting per route
  - Preload critical fonts, font-display: swap
  - Check bundle size, flag anything over 100kb
- Performance check (Lighthouse, target 90+ on all scores)
- Final Playwright MCP screenshot review
- Deploy to Vercel

**Done when:** Live on Vercel, Lighthouse 90+ on all scores, user signs off.

## Screenshot & Testing Workflow

- Use Playwright MCP server for all screenshots and browser testing
- Always screenshot from localhost, never file:/// URLs
- Start dev server before taking screenshots
- After screenshotting, read the image with the Read tool for visual comparison
- When comparing against reference: check spacing, font size/weight, colors (exact hex), alignment, border-radius, shadows, image sizing

## Hard Rules

- No em-dashes in user-facing copy
- No emojis anywhere
- No fabricated facts
- No default Tailwind colors as primary
- No `transition-all`
- No unused imports, no dead code, no bloated dependencies
- Every clickable element gets hover, focus-visible, and active states
- No competing CTAs near embedded iframes or widgets
- Invoke Stitch MCP before writing any front-end code
- Read client-brief/ and assets/branding/ before designing anything

## Files To Create/Modify

| Action | File |
|---|---|
| Rewrite | `CLAUDE.md` |
| Create | `PLAN.md` |
| Create | `client-brief/README.md` |
| Refactor | `copywriting/anti-slop-kill-list.md` (strip doctor-specific content) |
| Create | `copywriting/README.md` |
| Delete | `copywriting/authority-openings.md` |
| Delete | `copywriting/doctor-language-swaps.md` |
| Delete | `copywriting/vsl-frameworks.md` |
