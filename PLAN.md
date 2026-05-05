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
