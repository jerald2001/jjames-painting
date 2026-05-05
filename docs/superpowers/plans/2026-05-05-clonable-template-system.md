# Clonable Local Business Template System — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the CLAUDE.md, PLAN.md, copywriting rules, and directory structure for a clonable local Australian business website template.

**Architecture:** File-based configuration system. CLAUDE.md defines all build rules and workflows. PLAN.md defines phased build steps. client-brief/ and copywriting/ directories provide per-client context and universal copy rules. All files are markdown. No application code in this plan.

**Tech Stack:** Markdown, directory conventions, references to Next.js / Tailwind v4 / shadcn/ui / Stitch MCP / Playwright MCP / web-asset-generator skill.

**Spec:** `docs/superpowers/specs/2026-05-05-clonable-template-system-design.md`

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Create | `client-brief/README.md` | Instructions for Claude on how to process client intel |
| Create | `copywriting/README.md` | Master voice and tone reference |
| Refactor | `copywriting/anti-slop-kill-list.md` | Universal banned words/phrases (strip doctor-specific content) |
| Delete | `copywriting/authority-openings.md` | Doctor/VSL-specific, not needed |
| Delete | `copywriting/doctor-language-swaps.md` | Doctor-specific, not needed |
| Delete | `copywriting/vsl-frameworks.md` | VSL/agency-specific, not needed |
| Create | `PLAN.md` | Phased build steps for each client site |
| Rewrite | `CLAUDE.md` | All build rules, tech stack, workflows |
| Create | `assets/icons/base/.gitkeep` | Placeholder for base icon library |
| Create | `assets/icons/industry/.gitkeep` | Placeholder for industry-specific icons |

---

### Task 1: Create Directory Structure

**Files:**
- Create: `client-brief/README.md` (placeholder, content in Task 2)
- Create: `assets/icons/base/.gitkeep`
- Create: `assets/icons/industry/.gitkeep`

- [ ] **Step 1: Create the client-brief directory and placeholder README**

```bash
mkdir -p "client-brief"
touch "client-brief/README.md"
```

- [ ] **Step 2: Create the icons directories**

```bash
mkdir -p "assets/icons/base"
mkdir -p "assets/icons/industry"
touch "assets/icons/base/.gitkeep"
touch "assets/icons/industry/.gitkeep"
```

- [ ] **Step 3: Verify structure**

```bash
ls -R client-brief/ assets/icons/
```

Expected:
```
client-brief/:
README.md

assets/icons/:
base/  industry/

assets/icons/base:
.gitkeep

assets/icons/industry:
.gitkeep
```

- [ ] **Step 4: Commit**

```bash
git add client-brief/ assets/icons/
git commit -m "chore: create client-brief and icons directory structure"
```

---

### Task 2: Create client-brief/README.md

**Files:**
- Create: `client-brief/README.md`

- [ ] **Step 1: Write the client-brief README**

Write to `client-brief/README.md`:

```markdown
# Client Brief

This folder contains everything about the client. Dump any format here: markdown, text files, voice recordings (.mp3, .wav), videos (.mp4), screenshots, images, PDFs, meeting notes, flyers, whatever you have.

## How Claude Processes This Folder

### Priority Order

1. Read `client-brief.md` first if it exists. This is the primary source of truth.
2. Process everything else in the folder as supplementary context.

### What To Extract

From all materials in this folder, extract and confirm with the user:

- Business name
- Industry / what they do
- Location(s) in Australia
- Services offered
- Target audience
- Pages needed (brochure vs lead-gen direction)
- Any specific requests or constraints mentioned
- Competitor sites or references if provided

### Rules

- If something is ambiguous or missing, ask. Do not guess.
- Produce a one-page summary at the start of Phase 1.
- Confirm the summary with the user before moving to Phase 2.
- Re-read this folder any time the user adds new materials.
```

- [ ] **Step 2: Read back the file to verify**

Read `client-brief/README.md` and confirm content matches.

- [ ] **Step 3: Commit**

```bash
git add client-brief/README.md
git commit -m "docs: add client-brief processing instructions"
```

---

### Task 3: Create copywriting/README.md

**Files:**
- Create: `copywriting/README.md`

- [ ] **Step 1: Write the copywriting README**

Write to `copywriting/README.md`:

```markdown
# Copywriting Rules

Master reference for all copy on client websites. CLAUDE.md points here. Every piece of user-facing text must pass these rules before shipping.

## Brand Voice

Friendly professional. Casual, confident, direct. No swearing in client-facing copy.

Write like you're explaining something to a mate who asked for your help. You know what you're doing, you're not trying to impress anyone, you just get it done.

### Voice Characteristics

- **Confident, not arrogant.** State what you do. Don't brag about it.
- **Casual, not sloppy.** Contractions are good. Sentence fragments are fine. Rambling isn't.
- **Direct, not aggressive.** Get to the point. Don't soften everything with qualifiers, but don't bark at people either.
- **Warm, not saccharine.** Be approachable. Don't overdo it with forced friendliness.

### Examples

Good: "We build websites that actually bring people through your door."
Bad: "We craft bespoke digital solutions that drive unprecedented growth."

Good: "Your website should be working as hard as you do. We make that happen."
Bad: "In today's fast-paced digital landscape, a robust online presence is invaluable."

Good: "Here's what we did for a cafe in Fitzroy. Same thing works for you."
Bad: "Our proven methodology has delivered game-changing results across diverse verticals."

## Hard Rules

1. **No em-dashes.** They signal AI authorship. Use commas, periods, or parentheses.
2. **No emojis.** Anywhere. Ever.
3. **Use contractions.** "You've" not "you have." "That's" not "that is." Unless emphasis demands the full form.
4. **Vary sentence length.** If every paragraph is 3 sentences and ~40 words, it reads like AI wrote it. Break rhythm deliberately. Short sentences. Then a longer one that breathes a bit.
5. **Use sentence fragments.** Humans use them. AI doesn't.
6. **No fabricated facts.** Every specific claim must trace to a real source. If you can't point to where the number came from, cut it.
7. **5th-6th grade reading level.** Target a Hemingway Editor score of 5 or 6. If a word wouldn't come up at the dinner table, cut it.

## Anti-Slop Enforcement

Every piece of user-facing copy is checked against `anti-slop-kill-list.md`. If a banned word or pattern appears, the copy fails. No exceptions. Read that file before writing any copy.

## Three-Line Sanity Check

Before shipping any copy, read the first three lines aloud. If any of these are true, rewrite:

1. **Could this be about any other business in the same industry?** If the line applies to any plumber, any cafe, or any physio, it's not specific enough.
2. **Would the business owner actually say this in a conversation?** If not, rewrite in their language.
3. **Does this put a thought in their head they weren't having?** If yes, rewrite to match what they were actually thinking when they landed on the page.

## Kitchen-Table Test

Read the copy aloud to a non-marketer. If they:

- Stumble over a word, cut it
- Ask "what does X mean?", X dies
- Check their phone mid-sentence, the sentence failed
- Laugh at an unintended line, rewrite

## Word Swaps

Keep it plain. Dinner-table words only.

| Don't say | Say instead |
|---|---|
| Utilize | use |
| Demonstrate | show |
| Individuals | people |
| Endeavor | try |
| Subsequently | then |
| Implement | do, build |
| Optimize | improve, fix |
| Facilitate | help |
| Comprehensive | full, complete |
| Leverage (verb) | use |
| Robust | solid, strong |
| Seamless | smooth |
```

- [ ] **Step 2: Read back the file to verify**

Read `copywriting/README.md` and confirm content matches.

- [ ] **Step 3: Commit**

```bash
git add copywriting/README.md
git commit -m "docs: add universal copywriting rules and brand voice guide"
```

---

### Task 4: Refactor copywriting/anti-slop-kill-list.md

**Files:**
- Modify: `copywriting/anti-slop-kill-list.md`

- [ ] **Step 1: Read the current file**

Read `copywriting/anti-slop-kill-list.md` to confirm current content.

- [ ] **Step 2: Rewrite the file, stripping all doctor/IPG-specific content**

Remove these sections entirely:
- "Doctor-Specific Triggers" section (lines 64-77 in current file)
- All references to "IPG," "Med Matrix," "practice owners," "doctors," "Cole"
- The "Sources" section references to "Direct feedback from Cole on IPG VSL v1 draft"

Keep these sections (with minor generalizations):
- "Words That Get Cut on Sight" (universal)
- "Phrase Patterns That Get Cut" (universal)
- "Sentence Structure Tells" (universal)
- "Specificity Tells" (universal, but replace doctor examples with generic local business examples)
- "The Three-Line Sanity Check" (generalized in copywriting/README.md, but keep a version here too)
- "Halbert's Kitchen-Table Test" (universal)
- "Ogilvy's Dinner Table Rule" (universal)

Write the full refactored file to `copywriting/anti-slop-kill-list.md`:

```markdown
# Anti-Slop Kill List

Words, phrases, and sentence structures that instantly mark copy as AI-generated. Banned in all client work.

**The rule:** if a line from this file shows up in a draft, the draft fails. No exceptions.

## Words That Get Cut on Sight

Never ship copy containing any of these:

- "explode," "crush," "10x," "scale" (as a verb), "dominate," "unleash," "unlock," "skyrocket"
- "game-changer," "game-changing," "cutting-edge," "next-level"
- "groundbreaking," "unparalleled," "invaluable," "meticulous," "intricate"
- "paradigm," "leverage" (as a verb), "harness," "elevate," "embark"
- "compelling," "illuminate," "serves as," "stands as a testament"
- "plays a pivotal role," "underscores the importance"
- "simple yet powerful," "proven yet"
- "meticulously crafted," "carefully curated"
- "in today's fast-paced world," "in the modern era"
- "seamless," "robust," "comprehensive"
- "delve into," "dive deep," "explore the depths"
- "nestled," "boasts," "vibrant tapestry," "rich landscape"

## Phrase Patterns That Get Cut

- **Negative parallelism.** "It's not X, it's Y." "Not just X, but Y." "No X, no Y, just Z." AI's favorite crutch. Rewrite in positive assertion.
- **Rule of three.** AI reflexively lists three adjectives, three benefits, three examples. Humans don't. Cut to one strong option or extend to four, five.
- **"In a world of X..."** — every variation. Dead.
- **"When it comes to X..."** — dead.
- **"At the heart of..."** — dead.
- **"The truth is..."** — dead.
- **"Here's the thing..."** — sounds human, isn't. Dead.
- **Rhetorical question with predictable answer.** "And you know what?" "What does this mean?" Cut.
- **Restating the question before answering it.** "So you're asking how X works? Well, X works by..." — cut.

## Sentence Structure Tells

- **Uniform paragraph length.** If every paragraph is 3 sentences and ~40 words, AI wrote it. Break rhythm deliberately.
- **No contractions.** Humans say "you've," "that's," "I'm." AI writes "you have," "that is," "I am" unless emphatic.
- **No sentence fragments.** Humans. Use. Fragments. AI doesn't.
- **Em-dashes as explanatory clauses.** "The system — which I built myself — does X." Cut. Use a period or comma.
- **"Additionally," "Furthermore," "Moreover" as sentence-starters.** Dead.
- **"Overall," "In summary," "In conclusion" closers that restate what was just said.** Dead.

## Specificity Tells

AI specificity looks specific but isn't. Real specificity has a source.

**Fake specific:**
- "Exactly 7 minutes on Tuesday" (why Tuesday? why 7?)
- "3.7x ROI in 43 days" (the 43 is invented)
- "We've helped 7,429 businesses grow" (the 4-digit precision is the tell)
- "$5K-$50K on agencies" (10x range = zero specificity)

**Real specific:**
- "One of our clients was paying $2,100/month for ads and getting maybe two calls a week" — traces to a real person
- "$11,340 in the first month" — odd digits survive the "why that number" test
- "At 2:47 a.m. last Thursday" — time anchor only a human would write

**The "why that number" test:** every specific claim must survive one sentence pointing to the source (a study, a client, a dated event). If you can't answer, replace with a named anchor or cut.

## The Three-Line Sanity Check

Before shipping any copy, read the first three lines aloud. If any of these are true, rewrite:

1. **Could this be about any other business in the same industry?** If the line applies to any plumber, any cafe, or any accountant too, it's not specific enough.
2. **Would the business owner actually say this in a conversation?** If not, rewrite using their language.
3. **Does this put a thought in their head they weren't having?** If yes, rewrite to match what they were actually thinking when they clicked.

## Halbert's Kitchen-Table Test

Read the copy aloud to a non-marketer. If they:

- Stumble over a word, cut it
- Ask "what does X mean?", X dies
- Check their phone mid-sentence, the sentence failed
- Laugh at an unintended line, rewrite

**Target reading level:** 5th-6th grade (Hemingway Editor, score 5 or 6). Halbert's winners all tested here.

## Ogilvy's "Dinner Table" Rule

If a word wouldn't show up in normal dinner-table conversation, cut it.

- "Utilize" -> "use"
- "Demonstrate" -> "show"
- "Individuals" -> "people"
- "Endeavor" -> "try"
- "Subsequently" -> "then"
- "Implement" -> "do" or "build"
- "Optimize" -> "improve" or "fix"
- "Facilitate" -> "help"

## Sources

- Wikipedia: Signs of AI writing
- Gary Halbert, The Boron Letters
- David Ogilvy, Ogilvy on Advertising
- Eugene Schwartz, Breakthrough Advertising
```

- [ ] **Step 3: Read back the file to verify no doctor/IPG references remain**

Search the file for: "doctor," "IPG," "practice," "Cole," "Med Matrix," "patient," "provider." None should appear.

- [ ] **Step 4: Commit**

```bash
git add copywriting/anti-slop-kill-list.md
git commit -m "refactor: strip doctor-specific content from anti-slop kill list"
```

---

### Task 5: Delete Doctor-Specific Copywriting Files

**Files:**
- Delete: `copywriting/authority-openings.md`
- Delete: `copywriting/doctor-language-swaps.md`
- Delete: `copywriting/vsl-frameworks.md`

- [ ] **Step 1: Delete the three files**

```bash
rm copywriting/authority-openings.md
rm copywriting/doctor-language-swaps.md
rm copywriting/vsl-frameworks.md
```

- [ ] **Step 2: Verify only README.md and anti-slop-kill-list.md remain**

```bash
ls copywriting/
```

Expected:
```
README.md
anti-slop-kill-list.md
```

- [ ] **Step 3: Commit**

```bash
git add -u copywriting/
git commit -m "chore: remove doctor/IPG-specific copywriting files"
```

---

### Task 6: Create PLAN.md

**Files:**
- Create: `PLAN.md`

- [ ] **Step 1: Write PLAN.md**

Write to `PLAN.md`:

```markdown
# Build Plan

Phased build process for each client website. Work through phases in order. Do not skip ahead. Each phase has a "done when" gate. Confirm with the user before moving to the next phase.

---

## Phase 1: Discovery & Setup

- [ ] Read `client-brief/` directory (start with `client-brief.md` if it exists, then process everything else)
- [ ] Read `assets/branding/` and extract colors, logos, fonts, style direction
- [ ] Produce a one-page client summary and confirm with user
- [ ] Initialize Next.js project (lean: no extra dependencies beyond stack)
- [ ] Install Tailwind CSS v4 + shadcn/ui
- [ ] Set up self-hosted fonts in `public/fonts/` via `next/font/local`
- [ ] Generate base icon library in `assets/icons/base/` using web-asset-generator skill
- [ ] Start dev server and verify it runs on localhost
- [ ] Confirm direction with user

**Done when:** Project runs on localhost. Branding is understood. User confirms direction.

---

## Phase 2: Layout via Stitch

- [ ] Invoke Stitch MCP server to generate page layouts based on client brief and branding
- [ ] Present layout options to user (brochure vs lead-gen direction)
- [ ] Review chosen layout against client branding and copywriting rules (`copywriting/README.md`)
- [ ] Generate industry-specific icons in `assets/icons/industry/` using web-asset-generator skill
- [ ] Confirm final layout direction with user

**Done when:** User approves layout direction for all pages.

---

## Phase 3: Build

- [ ] Code pages from Stitch-approved layouts
- [ ] Apply brand colors, typography, spacing from client branding
- [ ] Build all components needed (hero, services, testimonials, contact, navigation, footer, etc.)
- [ ] Mobile-first responsive design
- [ ] Every clickable element has hover, focus-visible, and active states
- [ ] Screenshot with Playwright MCP and compare against approved layouts
- [ ] Fix any visual mismatches found in screenshot comparison

**Done when:** All pages built, responsive, visually matching approved layouts.

---

## Phase 4: Content & Copy

- [ ] Write all user-facing copy following `copywriting/README.md` rules
- [ ] Run anti-slop check: compare every piece of text against `copywriting/anti-slop-kill-list.md`
- [ ] Run three-line sanity check on every page
- [ ] Add real client content (images, testimonials, service details) from `client-brief/` and `assets/branding/`
- [ ] Replace any remaining placeholder content
- [ ] Read all copy aloud (kitchen-table test)

**Done when:** No placeholder content remains. All copy passes anti-slop check and sanity checks.

---

## Phase 5: Polish & Deploy

### SEO & Meta
- [ ] Add SEO meta tags (title, description, canonical) per page
- [ ] Generate Open Graph images using web-asset-generator skill
- [ ] Generate favicon and app icons using web-asset-generator skill
- [ ] Add schema markup (LocalBusiness, breadcrumbs, etc.)

### Speed Optimization
- [ ] Lazy-load all images below the fold
- [ ] Use Next.js Image component with proper `sizes` and formats (WebP/AVIF)
- [ ] Remove unused CSS/JS, tree-shake dependencies
- [ ] Minimize client-side JavaScript, prefer server components
- [ ] Code splitting per route
- [ ] Preload critical fonts, set `font-display: swap`
- [ ] Check bundle size, flag anything over 100kb

### Final Review
- [ ] Run Lighthouse audit, target 90+ on all four scores
- [ ] Final Playwright MCP screenshot review (desktop + mobile)
- [ ] Fix any issues found
- [ ] Deploy to Vercel
- [ ] Verify live site loads correctly
- [ ] User signs off

**Done when:** Live on Vercel. Lighthouse 90+ on all scores. User signs off.
```

- [ ] **Step 2: Read back the file to verify**

Read `PLAN.md` and confirm all 5 phases are present with checkboxes and done-when gates.

- [ ] **Step 3: Commit**

```bash
git add PLAN.md
git commit -m "docs: add phased build plan for client websites"
```

---

### Task 7: Rewrite CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Read the current CLAUDE.md**

Read `CLAUDE.md` to confirm current content before overwriting.

- [ ] **Step 2: Write the new CLAUDE.md**

Write the full new `CLAUDE.md`:

```markdown
# CLAUDE.md — Local Business Website Template

## Always Do First

1. Read `client-brief/` directory. Start with `client-brief.md` if it exists, then process everything else in the folder. Extract business name, industry, location, services, target audience, pages needed.
2. Read `assets/branding/`. Extract colors from logos, identify reference materials, note any style guides or palettes.
3. Read `copywriting/README.md` for voice and tone rules.
4. Check `PLAN.md` to see which phase you're in.
5. **Invoke the Stitch MCP server** before writing any front-end code. Every session, no exceptions.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (lean) / React 19 / TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Fonts | Self-hosted via `next/font/local` (defined per client) |
| Icons | Generated via web-asset-generator skill. No emojis. |
| Layout Generation | Google Stitch MCP server |
| Screenshots & Testing | Playwright MCP server |
| Hosting | Vercel |

No heavy animation libraries by default. Only add Framer Motion if a specific client needs it.

## Stitch MCP Workflow

1. Invoke Stitch to generate full page layouts based on client brief and branding.
2. Present layout options to the user.
3. Review the chosen layout against client branding and copywriting rules.
4. Code the final version, applying brand colors, typography, voice, and anti-slop checks.

Stitch is the architect's sketch. You are the builder. Stitch output is never shipped as-is.

## Client Brief

All client intel lives in `client-brief/`. See `client-brief/README.md` for processing instructions.

**Priority:** read `client-brief.md` first (primary source of truth), then everything else as supplementary context.

If anything is ambiguous or missing, ask. Do not guess.

## Brand Assets

Everything lives in `assets/branding/` as a flat dump. Claude reads everything in there and figures out what's what.

- If a logo is present, use it. Extract primary/secondary colors from the logo if no palette is provided.
- If a color palette is defined, use those exact values. Do not invent brand colors.
- If reference materials exist (flyers, screenshots, existing collateral), use them.
- Never use placeholders where real assets are available.

### Icons

- `assets/icons/base/` — base icon library (checkmarks, arrows, phone, location, clock, etc.). Generated in Phase 1 using the web-asset-generator skill.
- `assets/icons/industry/` — industry-specific icons generated in Phase 2 using web-asset-generator.
- No emojis. Ever. Use generated icons instead.

## Copywriting

All copy rules live in `copywriting/README.md`. Read it before writing any user-facing text.

**Quick reference:**
- Brand voice: friendly professional, casual, confident, direct. No swearing.
- Every piece of copy is checked against `copywriting/anti-slop-kill-list.md`. If a banned word or pattern appears, the copy fails.
- No em-dashes. No emojis. Use contractions. Vary sentence length.
- Reading level: 5th-6th grade.
- Run the three-line sanity check on every page before shipping.

## Design System

Colors and typography are derived per-client from their branding. Nothing is hardcoded here.

### Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Derive from the client's brand.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Different fonts for headings and body. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth when appropriate.
- **Spacing:** Use intentional, consistent spacing tokens. Not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base, elevated, floating), not all sit at the same z-plane.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Images:** Add a gradient overlay and a color treatment layer with `mix-blend-multiply` where appropriate.

## Build Phases

See `PLAN.md` for the full phased build process. Summary:

1. **Discovery & Setup** — process client brief, extract branding, initialize project
2. **Layout via Stitch** — generate and approve layouts before coding
3. **Build** — code pages from approved layouts, mobile-first
4. **Content & Copy** — write copy, anti-slop check, replace placeholders
5. **Polish & Deploy** — SEO, speed optimization, Lighthouse 90+, deploy to Vercel

Do not skip phases. Confirm with the user before moving to the next phase.

## Screenshot & Testing Workflow

- Use Playwright MCP server for all screenshots and browser testing.
- Always screenshot from localhost. Never `file:///` URLs.
- Start the dev server before taking screenshots. If it's already running, don't start a second instance.
- After screenshotting, read the PNG with the Read tool. Claude can see and analyze the image directly.
- When comparing against reference or approved layouts, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px."
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing.

## Speed Optimization

Applied in Phase 5, but keep these principles throughout the build:

- Lazy-load all images below the fold.
- Use Next.js Image component with proper `sizes` and formats (WebP/AVIF).
- Remove unused CSS/JS. Tree-shake dependencies.
- Minimize client-side JavaScript. Prefer server components.
- Code splitting per route.
- Preload critical fonts. Set `font-display: swap`.
- Check bundle size. Flag anything over 100kb.
- Keep the bundle lean. No unused imports, no dead code, no bloated dependencies.

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
- Do not add sections, features, or content not discussed with the user
- Mobile-first responsive on every page
```

- [ ] **Step 3: Read back the file to verify**

Read the new `CLAUDE.md`. Verify:
- "Always Do First" section lists all 5 steps in correct order
- Tech stack table has all entries
- Stitch MCP workflow has 4 steps
- All copywriting references point to `copywriting/README.md` and `copywriting/anti-slop-kill-list.md`
- Build phases reference `PLAN.md`
- Screenshot workflow references Playwright MCP (not Puppeteer)
- Hard rules section has all 12 rules
- No references to doctors, IPG, Cole, GHL, Puppeteer, or medical terminology

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: rewrite CLAUDE.md for clonable local business template system"
```

---

### Task 8: Final Verification

- [ ] **Step 1: Verify full directory structure**

```bash
find . -not -path './.git/*' -not -path './node_modules/*' | sort
```

Expected key paths:
```
./CLAUDE.md
./PLAN.md
./assets/branding/
./assets/icons/base/.gitkeep
./assets/icons/industry/.gitkeep
./client-brief/README.md
./copywriting/README.md
./copywriting/anti-slop-kill-list.md
./docs/superpowers/specs/2026-05-05-clonable-template-system-design.md
./docs/superpowers/plans/2026-05-05-clonable-template-system.md
```

- [ ] **Step 2: Verify deleted files are gone**

```bash
ls copywriting/authority-openings.md 2>&1
ls copywriting/doctor-language-swaps.md 2>&1
ls copywriting/vsl-frameworks.md 2>&1
```

Expected: all three return "No such file or directory"

- [ ] **Step 3: Verify no doctor/IPG references remain in any file**

```bash
grep -ri "doctor\|IPG\|practice owner\|patient acquisition\|Cole Gordon\|GHL\|puppeteer" --include="*.md" . --exclude-dir=docs/superpowers
```

Expected: no matches.

- [ ] **Step 4: Verify CLAUDE.md references are valid**

Check that every file path mentioned in CLAUDE.md actually exists:
- `client-brief/README.md`
- `copywriting/README.md`
- `copywriting/anti-slop-kill-list.md`
- `PLAN.md`
- `assets/branding/`
- `assets/icons/base/`
- `assets/icons/industry/`

- [ ] **Step 5: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "chore: final verification pass"
```
