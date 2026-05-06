# Build Plan

Phased build process for each client website. Work through phases in order. Do not skip ahead. Each phase has a "done when" gate. Confirm with the user before moving to the next phase.

---

## Phase 1: Discovery & Setup

### Client & Branding
- [ ] Read `client-brief/` directory (start with `client-brief.md` if it exists, then process everything else)
- [ ] Read `assets/branding/` and extract colors, logos, fonts, style direction
- [ ] Produce a one-page client summary and confirm with user

### SEO Strategy
- [ ] Invoke `claude-seo:seo-plan` — generate keyword strategy, content architecture, page hierarchy
- [ ] Invoke `claude-seo:seo-local` — GBP optimization checklist, NAP format, citation targets
- [ ] Invoke `claude-seo:seo-cluster` — topic clustering for service pages and blog content
- [ ] Document target keywords per page (primary + secondary) in a SEO brief

### Project Initialization
- [ ] Initialize Next.js project (lean: no extra dependencies beyond stack)
- [ ] Install Tailwind CSS v4 + shadcn/ui
- [ ] Set up self-hosted fonts in `public/fonts/` via `next/font/local`
- [ ] Generate base icon library in `assets/icons/base/` using web-asset-generator skill
- [ ] Start dev server and verify it runs on localhost
- [ ] Confirm direction with user

**Done when:** Project runs on localhost. Branding is understood. SEO plan is documented. User confirms direction.

---

## Phase 2: Layout via Stitch

- [ ] Invoke Stitch MCP server to generate page layouts based on client brief and branding
- [ ] Incorporate SEO plan outputs into layout: page hierarchy, internal linking structure, H1 placement
- [ ] Present layout options to user (brochure vs lead-gen direction)
- [ ] Review chosen layout against client branding and copywriting rules (`copywriting/README.md`)
- [ ] Verify layout supports SEO requirements: one H1 per page, logical heading hierarchy, space for schema-rich content
- [ ] Generate industry-specific icons in `assets/icons/industry/` using web-asset-generator skill
- [ ] Confirm final layout direction with user

**Done when:** User approves layout direction for all pages. Layouts accommodate SEO structure.

---

## Phase 3: Build

### Core Build
- [ ] Code pages from Stitch-approved layouts
- [ ] Apply brand colors, typography, spacing from client branding
- [ ] Build all components needed (hero, services, testimonials, contact, navigation, footer, etc.)
- [ ] Mobile-first responsive design
- [ ] Every clickable element has hover, focus-visible, and active states

### Schema & Structure
- [ ] Invoke `claude-seo:seo-schema` — add LocalBusiness schema to every page
- [ ] Add Service schema to each service page
- [ ] Add BreadcrumbList schema for navigation
- [ ] Add FAQPage schema where FAQ sections exist
- [ ] Invoke `claude-seo:seo-sitemap` — generate XML sitemap with priority/changefreq
- [ ] Set canonical URLs on all pages
- [ ] Implement internal linking structure from SEO plan

### Visual QA
- [ ] Screenshot with Playwright MCP and compare against approved layouts
- [ ] Fix any visual mismatches found in screenshot comparison

**Done when:** All pages built, responsive, visually matching approved layouts. Schema markup on every page. Sitemap generated.

---

## Phase 4: Content & Copy

### Copywriting
- [ ] Write all user-facing copy following `copywriting/README.md` rules
- [ ] Target keywords from SEO plan integrated naturally into copy (no keyword stuffing)
- [ ] "{service} in {city}" patterns in title tags, H1s, and meta descriptions
- [ ] Run anti-slop check: compare every piece of text against `copywriting/anti-slop-kill-list.md`
- [ ] Run three-line sanity check on every page
- [ ] Add real client content (images, testimonials, service details) from `client-brief/` and `assets/branding/`
- [ ] Replace any remaining placeholder content
- [ ] Read all copy aloud (kitchen-table test)

### Content SEO
- [ ] Invoke `claude-seo:seo-content` on each page — E-E-A-T scoring, readability, thin content detection
- [ ] Invoke `claude-seo:seo-geo` — optimize for AI Overviews, citation-readiness, passage-level citability
- [ ] Invoke `claude-seo:seo-images` — validate alt text, sizing, lazy loading, CLS prevention
- [ ] Add unique `<title>` (50-60 chars) and `<meta description>` (150-160 chars) per page
- [ ] Add Open Graph and Twitter Card meta tags per page
- [ ] Ensure NAP (Name, Address, Phone) is consistent across all pages

**Done when:** No placeholder content remains. All copy passes anti-slop check, sanity checks, and E-E-A-T scoring. Every page has unique meta tags.

---

## Phase 5: SEO & Polish

### Full SEO Audit
- [ ] Invoke `claude-seo:seo-technical` — crawlability, indexability, Core Web Vitals, security headers
- [ ] Invoke `claude-seo:seo-page` on every page — deep per-page audit
- [ ] Invoke `claude-seo:seo-maps` — geo-grid analysis, competitor radius, review signals
- [ ] Fix all issues found in audits
- [ ] Validate all schema markup (no errors in Rich Results Test)
- [ ] Verify no orphan pages — every page has at least one internal link pointing to it
- [ ] Verify heading hierarchy on all pages (H1 > H2 > H3, no skips)

### SEO Asset Generation
- [ ] Generate Open Graph images (1200x630) per page using `claude-seo:seo-image-gen`
- [ ] Generate Twitter Card images using `claude-seo:seo-image-gen`
- [ ] Generate favicon and app icons using web-asset-generator skill
- [ ] Add schema `image` property assets where needed

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
- [ ] Confirm with user before deploying

**Done when:** All SEO audits pass. Lighthouse 90+ on all scores. User approves for deployment.

---

## Phase 6: Deploy & Verify

- [ ] Deploy to Vercel
- [ ] Verify live site loads correctly
- [ ] Invoke `claude-seo:seo-drift` — capture SEO baseline for future regression detection
- [ ] Invoke `claude-seo:seo-google` — PageSpeed Insights and CrUX field data verification (if available)
- [ ] Submit sitemap to Google Search Console (instruct user)
- [ ] Verify Google Business Profile NAP matches site exactly
- [ ] User signs off

**Done when:** Live on Vercel. SEO baseline captured. Sitemap submitted. User signs off.
