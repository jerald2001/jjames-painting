# SEO Implementation Roadmap — J. James Painting

Phased SEO action plan mapped onto the existing build phases in `PLAN.md`. Each phase lists the `claude-seo:*` skill invocations, deliverables, and quality gates. This document is execution-focused — strategy and rationale live in [`strategy.md`](strategy.md).

For URL structure see [`site-structure.md`](site-structure.md). For content cadence see [`content-calendar.md`](content-calendar.md). For competitor research framework see [`competitor-analysis.md`](competitor-analysis.md).

---

## Phase 1 — Discovery & Setup (weeks 1–2)

SEO foundation: baselines, competitive intelligence, keyword validation.

### Skill invocations
- `claude-seo:seo-plan` — completed (this doc set)
- `claude-seo:seo-local` — GBP audit + NAP audit + citation target list
- `claude-seo:seo-cluster` — topic cluster map for the four priority services
- `claude-seo:seo-dataforseo` — keyword volume + difficulty + competitor SERP pulls
- `claude-seo:seo-backlinks` — current backlink profile + competitor link gap
- `claude-seo:seo-google` — pull current GSC baseline (impressions, clicks, position) + GA4 baseline traffic

### Deliverables
- Baseline metrics document (GA4 traffic, GSC rankings, conversion volume) — written to `docs/seo/baseline.md`
- Filled-in competitor profiles in `docs/seo/competitor-analysis.md`
- Validated keyword volume + difficulty for Tier 1, Tier 2, Tier 3
- GBP audit report with action items
- Citation cleanup list (Yellow Pages, True Local, hipages, Apple Maps, Bing Places, etc.)
- Confirmed 8-launch-variant selection (based on GSC traffic)
- NAP master record finalised (address + ABN + QBCC license from client)
- 301 redirect map (current URL → new URL) for every existing URL

### Quality gates
- Baseline metrics captured before any URL changes
- Keyword strategy validated against live volume data (not assumed)
- 8 launch variants selected based on real ranking data (not guesses)
- GBP claim ownership confirmed before any updates

### Client open items to resolve
- Address + ABN + QBCC license number for NAP record
- Confirmation of Dulux Accredited / Taubmans Endorsed entitlements
- Master Painters QLD / HIA membership status
- Photography shoot day booking (or confirmation of available client photos)

---

## Phase 2 — Layout via Stitch (weeks 3–6)

SEO ensures layouts support keyword targeting and schema-rich content.

### Skill invocations
- `claude-seo:seo-cluster` (refresh) — finalise the hub-and-spoke architecture into the wireframe

### Deliverables
- Stitch layout output reviewed for SEO requirements:
  - One `<h1>` per page
  - H2 carries primary keyword on priority service + suburb hub pages
  - Space allocated for FAQ block (FAQ schema)
  - Space for breadcrumb component (BreadcrumbList schema)
  - Internal-linking surface designed in (footer site map, mega menu, related-services blocks)
- Sitemap.xml structure planned (priority + changefreq per URL pattern)

### Quality gates
- Layouts pass heading-hierarchy review (no skips, exactly one H1)
- Internal link structure from `site-structure.md` reflected in layout (mega menu, contextual link blocks)
- Mobile layout preserves the same heading order as desktop (Google reads mobile-first)

---

## Phase 3 — Build (weeks 7–11)

Schema markup, sitemap, technical foundation.

### Skill invocations
- `claude-seo:seo-schema` — generate JSON-LD per page type, per the matrix in `site-structure.md`
- `claude-seo:seo-sitemap` — generate `sitemap.xml` with proper priority + changefreq

### Deliverables
- LocalBusiness schema on every page (single canonical block sitewide + per-page additions)
- Service schema on every service page
- FAQPage schema on every page with an FAQ block
- BreadcrumbList sitewide
- BlogPosting schema scaffolding ready for Phase 4 content
- `sitemap.xml` published at `/sitemap.xml`, referenced from `robots.txt`
- `robots.txt` configured (allow all except Next.js internals, point to sitemap)
- Canonical URLs on every page
- OG meta tag scaffolding ready for Phase 4 + 5 fill-in
- 301 redirect map implemented at the framework level (Next.js `redirects()` config or Vercel routing)
- Multi-step quote form with conditional fields auto-tagging lead by service type
- GA4 conversion events wired: form submit, phone click, partner form submit, scroll depth
- GTM container consolidation: tags audited and migrated to single container

### Quality gates
- Every schema block validates in Rich Results Test
- Every page has a canonical URL set
- Every redirect tested via curl / browser (no 404s on any current URL)
- Quote form server action tested with each service type tag
- GA4 events confirmed firing in DebugView

---

## Phase 4 — Content & Copy (weeks 8–11, parallel to Phase 3 final weeks)

Content production, on-page optimisation, AI/GEO readiness.

### Skill invocations
- `claude-seo:seo-content` — E-E-A-T + readability + thin-content scoring on every page
- `claude-seo:seo-geo` — AI Overview / ChatGPT / Perplexity citability per page
- `claude-seo:seo-images` — alt text, sizing, lazy loading, CLS prevention
- `claude-seo:seo-page` — per-page audit before mark-complete

### Deliverables
- Homepage copy (passes anti-slop check + three-line sanity check)
- About page copy
- 4 priority service pages (1,200 words min, FAQ block, schema valid)
- 8 legacy service pages
- 12 suburb hub pages (unique local context per `site-structure.md`)
- 8 launch suburb variants (rewritten unique, 500 words min)
- 8 launch project case studies
- 6 launch blog posts (see `content-calendar.md`)
- `/for-agents` referral landing page
- Testimonials page (with Google Reviews integration or named cases)
- Pre-Sale Colour Guide PDF (lead magnet)
- Every page: unique `<title>` (50–60 chars), unique meta description (150–160 chars), OG tags, Twitter Card tags
- `llms.txt` at site root listing key content URLs

### Quality gates
- Every page passes the anti-slop kill list
- Three-line sanity check passes (could-be-any-painter test fails the line)
- Every page reaches Hemingway grade 5–6
- `claude-seo:seo-content` E-E-A-T score acceptable per page
- `claude-seo:seo-page` audit passes per page
- NAP appears identically on every page
- No orphan pages (every page has at least one internal link pointing to it)

---

## Phase 5 — SEO & Polish (weeks 12)

Full audit suite, technical hardening, asset generation, speed.

### Skill invocations
- `claude-seo:seo-technical` — crawlability, indexability, Core Web Vitals, security headers
- `claude-seo:seo-page` — final per-page audit pass on every page
- `claude-seo:seo-maps` — geo-grid analysis, competitor radius, review velocity check
- `claude-seo:seo-schema` — full validation pass against Rich Results Test
- `claude-seo:seo-image-gen` — generate Open Graph images (1200×630) per page
- `claude-seo:seo-image-gen` — generate Twitter Card images
- `web-asset-generator` skill — favicon + app icons (manifest.json for PWA)

### Deliverables
- Full technical SEO audit clean: crawlable, indexable, no broken links, no soft 404s, no orphan pages, no duplicate canonicals
- All schema validates with zero errors
- OG images live on every page (homepage + 4 priority services + 12 suburb hubs + 8 case studies + 6 blog posts minimum)
- Favicon + Apple touch icons + Android manifest icons
- Lighthouse 90+ on all four categories (Performance, Accessibility, Best Practices, SEO) on desktop + mobile
- Core Web Vitals green: LCP < 2.5s, INP < 200ms, CLS < 0.1
- All images converted to WebP/AVIF with proper `sizes` attributes
- Critical fonts preloaded with `font-display: swap`
- Bundle size flagged if any route > 100kb gzipped

### Quality gates
- Lighthouse 90+ mandatory before any deploy approval
- Schema validation: zero errors across all pages
- OG images render correctly in Facebook Debugger, Twitter Card Validator, LinkedIn Post Inspector
- No orphan pages confirmed via crawl
- Heading hierarchy correct on every page (no H1→H3 skips)

---

## Phase 6 — Deploy & Verify (week 13+)

Launch, baseline capture, ongoing monitoring.

### Skill invocations
- `claude-seo:seo-drift` — capture SEO baseline for future regression detection (run pre-launch on staging, then immediately post-launch on production)
- `claude-seo:seo-google` — submit sitemap to GSC, request indexing for priority pages
- `claude-seo:seo-maps` — GBP refresh post-launch, geo-grid initial capture

### Deliverables
- Vercel deployment live
- Redirect map active and tested (every current URL resolves or 301s correctly)
- `seo-drift` baseline snapshot stored
- Sitemap submitted to Google Search Console + Bing Webmaster Tools
- Google Business Profile updated:
  - Categories synced
  - Services synced to new positioning
  - Service area set to 12 specific suburbs (no whole-state per June 2025 SAB rules)
  - Description rewritten
  - Photos refreshed
  - WhatsApp integration set up (if client opts in)
- IndexNow submission for priority URLs (Bing + Yandex)
- Monthly report dashboard built (GA4 + GSC + GBP Insights)

### Quality gates
- Every current URL resolves (no 404s) — verified via crawl
- GA4 conversion events firing on live site
- GSC indexing requested for the 20 priority pages within 48 hours of launch
- GBP changes published and verified

---

## Post-launch operations (months 1–12)

### Weekly
- 2 suburb variant rewrites published (per `content-calendar.md` wave schedule)
- Review responses (target < 48 hour response time)
- GBP photo + post update

### Bi-weekly
- 1 blog post published (alternating cadence to hit 2/month)
- GSC ranking position monitoring on 20 Tier 1 + 12 Tier 2 keywords

### Monthly
- Monthly SEO report delivered (traffic, rankings, conversions, top landing pages, top suburbs)
- `claude-seo:seo-drift` regression scan
- Review citation health (NAP consistency across platforms)
- Identify Tier 5 (blog) topic opportunities from `seo-content` competitor gap analysis

### Quarterly
- Full `claude-seo:seo-audit` regression pass
- Backlink profile audit + outreach plan refresh
- KPI review against the targets in `strategy.md`
- Content refresh on the priority service pages (information accuracy, fresh project examples)
- Decision point: any underperforming suburb variants worth consolidating to the hub?

### Annual
- Suburb hub content refresh (all 12)
- Service page content refresh
- Lead magnet PDFs refreshed
- Full competitor re-analysis via `claude-seo:seo-dataforseo`

---

## Risk register

| Risk | Severity | Mitigation | Owner |
|---|---|---|---|
| Migration drops existing rankings | High | Full URL audit + 1:1 redirect map + 90-day GSC monitoring | SEO lead |
| Suburb content lift slips behind cadence | Medium | Structured local-data table prevents from-scratch writing; consolidate to hub if quality can't be hit | Content lead |
| Photography day not booked by Phase 4 | Medium | Use strongest client-supplied photos at launch; schedule v1.1 photo refresh for boutique + pre-sale | Project lead |
| GTM container consolidation breaks tracking | Medium | Inventory both containers before tear-down; verify all events fire in DebugView before removal | Analytics lead |
| Schema errors at scale | Low | Build schema via `claude-seo:seo-schema`; validate every block in Rich Results Test before merge | Build lead |
| Anti-slop discipline collapses across 48 variants | Medium | Per-variant uniqueness gate (opening + project ref + FAQ); consolidate if can't hit | Content lead |
| QBCC / accreditation badges used without entitlement | High (compliance) | Client confirms entitlements in Phase 1; do not publish badges without confirmation | Project lead |
| AI Overview citation share is low | Low (low AI presence for local) | Run `claude-seo:seo-geo` in Phase 4; structure FAQ content for citability; ensure llms.txt published | SEO lead |

---

## Tooling summary

| Phase | Skills invoked |
|---|---|
| 1 | seo-plan, seo-local, seo-cluster, seo-dataforseo, seo-backlinks, seo-google |
| 2 | seo-cluster |
| 3 | seo-schema, seo-sitemap |
| 4 | seo-content, seo-geo, seo-images, seo-page |
| 5 | seo-technical, seo-page, seo-maps, seo-schema, seo-image-gen |
| 6 | seo-drift, seo-google, seo-maps |
| Ongoing | seo-drift (monthly), seo-audit (quarterly), seo-dataforseo (annual) |

External: GA4, Google Search Console, Google Business Profile, Bing Webmaster Tools, Microsoft Clarity (or Hotjar — first 6 months for heatmaps/recordings), Whitespark or Local Falcon (geo-grid), CallRail (optional, if call attribution becomes a priority).
