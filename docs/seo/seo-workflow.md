# SEO Workflow

Referenced from [`CLAUDE.md`](../../CLAUDE.md) > SEO Workflow and [`PLAN.md`](../../PLAN.md) > Phases 3-6.

This template uses the `claude-seo` skill suite. These are local business websites — local SEO is the priority.

Consult [`google-search-guidelines-summary.md`](google-search-guidelines-summary.md) throughout all phases for official Google Search compliance.


## Skill Invocation by Phase

| Phase | Skills to Invoke | Purpose |
|---|---|---|
| 1. Discovery | `claude-seo:seo-plan` | Keyword strategy, content architecture, page hierarchy |
| 1. Discovery | `claude-seo:seo-local` | GBP optimization checklist, NAP format, citation targets |
| 1. Discovery | `claude-seo:seo-cluster` | Topic clustering for service pages and blog content |
| 3. Build | `claude-seo:seo-schema` | LocalBusiness, Service, FAQPage, BreadcrumbList markup |
| 3. Build | `claude-seo:seo-sitemap` | Generate XML sitemap with proper priority/changefreq |
| 4. Content | `claude-seo:seo-content` | E-E-A-T scoring, readability, thin content detection |
| 4. Content | `claude-seo:seo-geo` | Optimize for AI Overviews, citation-readiness |
| 4. Content | `claude-seo:seo-images` | Alt text, sizing, lazy loading, CLS prevention |
| 5. SEO & Polish | `claude-seo:seo-technical` | Crawlability, indexability, Core Web Vitals, security headers |
| 5. SEO & Polish | `claude-seo:seo-page` | Deep per-page audit (run on every page) |
| 5. SEO & Polish | `claude-seo:seo-maps` | Geo-grid analysis, competitor radius, review signals |
| 6. Deploy | `claude-seo:seo-drift` | Capture baseline so future changes can be diffed |
| 6. Deploy | `claude-seo:seo-google` | PageSpeed Insights, CrUX field data verification |

## Local Business SEO Priorities

These are non-negotiable for every local business site:

1. **LocalBusiness schema** on every page (invoke `claude-seo:seo-schema`). Include `@type`, `name`, `address`, `geo`, `telephone`, `openingHours`, `areaServed`.
2. **NAP consistency** — Name, Address, Phone must be identical everywhere on the site and match the Google Business Profile exactly.
3. **Service area pages** — one page per core service, one page per location served (if multi-location). Each gets unique copy, unique schema, and a unique H1.
4. **Google Maps embed** on the contact page. No competing CTAs near it.
5. **Reviews/testimonials** with structured data (`Review` or `AggregateRating` schema).
6. **Local keyword targeting** — "{service} in {city}" patterns in title tags, H1s, meta descriptions. Derive from `claude-seo:seo-plan` output.
7. **Image geo-tagging** — where possible, include location in image alt text and filenames.

## On-Page SEO Checklist (Every Page)

Run this before marking any page as done:

- [ ] Unique `<title>` tag (50-60 chars, includes primary keyword + location)
- [ ] Unique `<meta name="description">` (150-160 chars, includes CTA + location)
- [ ] Single `<h1>` per page with primary keyword
- [ ] Logical heading hierarchy (H1 > H2 > H3, no skips)
- [ ] Internal links to related service/location pages
- [ ] Schema markup validated (no errors in Google Rich Results Test)
- [ ] Open Graph and Twitter Card meta tags
- [ ] Canonical URL set
- [ ] Images optimized (alt text, WebP/AVIF, proper sizing)
- [ ] Mobile rendering verified via Playwright screenshot

## SEO Assets to Generate

Use `claude-seo:seo-image-gen` for:
- Open Graph images (1200x630) for each page
- Twitter Card images
- Schema `image` property assets

Use `web-asset-generator` for favicons and app icons (already in Phase 1).

## When to Run Full Audits

- **Before launch:** Run `claude-seo:seo-technical` + `claude-seo:seo-page` on every page.
- **After launch:** Run `claude-seo:seo-google` once Search Console data is available (48-72hrs).
- **Ongoing:** Run `claude-seo:seo-drift` to detect regressions after any content or code changes.
- **Competitor intel:** Run `claude-seo:seo-maps` and `claude-seo:seo-competitor-pages` if the client wants comparison or "alternatives" pages.

## Optional Skills (Invoke When Relevant)

| Skill | When to Use |
|---|---|
| `claude-seo:seo-backlinks` | Client has existing site with link profile to analyze |
| `claude-seo:seo-hreflang` | Multi-language or multi-region site |
| `claude-seo:seo-ecommerce` | Client sells products online |
| `claude-seo:seo-programmatic` | Generating pages at scale (e.g., 50+ location pages) |
| `claude-seo:seo-dataforseo` | Need live SERP data, keyword volumes, or competitor analysis |
| `claude-seo:seo-sxo` | Page is well-optimized but not ranking — diagnose intent mismatch |
| `claude-seo:seo-flow` | Want evidence-led SEO prompts using the FLOW framework |
| `claude-seo:seo-audit` | Full-site audit with parallel subagent delegation (post-launch) |