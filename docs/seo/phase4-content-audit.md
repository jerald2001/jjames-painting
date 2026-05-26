# Phase 4 — Content & E-E-A-T Audit

Scope: home + 4 priority service pages.
Run date: 2026-05-26
Tool: `claude-seo:seo-content`

## Quick-reference metrics

| Page | Title len | Desc len | Words | H1 | H2 | H3 | Internal links | External links | `<img>` tags | JSON-LD blocks |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | 54 | 149 | 1,385 | 1 | 10 | 11 | 79 | 1 | **0** | 2 |
| `/services/house-pre-sale-painting` | 58 | 154 | 1,500 | 1 | 13 | 13 | 65 | 0 | **0** | 2 |
| `/services/rental-property-repaint` | 58 | 154 | 1,192 | 1 | 11 | 12 | 64 | 0 | **0** | 2 |
| `/services/new-home-purchase-painting` | 52 | 153 | 1,226 | 1 | 10 | 12 | 63 | 0 | **0** | 2 |
| `/services/boutique-house-painting` | 58 | 154 | 1,150 | 1 | 9 | 10 | 63 | 0 | **0** | 2 |

Targets (CLAUDE.md + seo-content reference):
- Title: 50–60 chars → **all pass**
- Description: 150–160 chars → **home 149, others 153–154 (acceptable)**
- Home min words: 500 → **1,385 (177% over floor)**
- Service min words: 800 → **all pages 144–187% over floor**
- One `<h1>` per page → **all pass**
- Logical heading hierarchy → **all pass**
- 3–5 internal links / 1,000 words → all pages crush this (40+ per 1k words via header / footer / cross-links)

## E-E-A-T scoring

| Factor | Score | Per-page notes |
|---|---|---|
| **Experience** | 9/25 | All project imagery still renders as gradient-mesh placeholders (zero `<img>` tags across all 5 pages). No real before/after pairs, no case-study photography, no first-person process documentation. Brief flags photography as the single biggest visual upgrade — this is the dominant gap. |
| **Expertise** | 15/25 | Qualifications are claimed in body copy ("QBCC licensed and insured", "Lead-based paint and asbestos removal qualifications", "Dulux Accredited Painter and Taubmans Endorsed"). No backing certificates linked, no team / Person schema, no author bio. |
| **Authoritativeness** | 7/25 | One external link sitewide (the Google Reviews link in the testimonials banner). No outbound citations to Dulux / Taubmans / QBCC / Master Painters. No press, awards, or industry mentions. No backlink profile mature enough to lean on yet. |
| **Trustworthiness** | 13/25 | Phone + service area visible sitewide. NAP partially complete (no street address, no email, no ABN, no QBCC license number — all in `brand.ts` as empty strings and conditionally hidden per Q4 decision). No privacy policy / terms / sitemap pages built. HTTPS will land at Vercel deploy. Testimonials section is correctly labeled as "Sample review" placeholders — no fabricated trust signals. |
| **Total** | **44/100** | Floor that the Phase 4 content gaps establish. Photography day + verified qualifications + privacy/legal pages get this to ~75/100. |

## Content quality scoring

| Page | Score | Drivers |
|---|---|---|
| `/` | **75/100** | Strong structure, generous word count, full schema graph (LocalBusiness + Organization + WebSite). Hits docked for: 0 images, 1 external link, sample-review section reduces trust depth. |
| `/services/house-pre-sale-painting` | **82/100** | Deepest of the 4 service pages: hero, intro, ROI 3-pillar, 4-step process, before/after, agent bridge, palette grid (4 swatches with brand + hex + note), projects, FAQ (6 Q+A), final CTA. FAQ schema firing. |
| `/services/rental-property-repaint` | **78/100** | Same shape as pre-sale minus palette + before-after. FAQ schema firing. |
| `/services/new-home-purchase-painting` | **76/100** | Same shape minus palette + agent-bridge. FAQ schema firing. |
| `/services/boutique-house-painting` | **76/100** | 5-step process (longer than other services'); no ROI, no agent-bridge, no before/after. Compensated by craft-focused process copy. FAQ schema firing. |

## AI citation readiness

**Score: 68/100**

### What's working
- **FAQ schema on every service page.** FAQ blocks are the single highest-yield format for AI Overview citation today. All 4 service pages have 5–6 Q+A pairs with answer-first format.
- **Clear quotable timelines.** "3–7 working days", "2–4 working days for between-tenancy", "5–10 working days for whole-home interior", "Most pre-sale jobs finish inside a single week". These are extractable, specific, and citation-friendly.
- **Specific named products + colours.** "Dulux Natural White Half", "Lexicon Quarter", "Antique White U.S.A.", "Taubmans White Tea", "Dulux Weathershield", "Taubmans All Weather". AI systems can lift these as authoritative product references.
- **Strong H2/H3 hierarchy + section structure.** 9–13 H2s per page with descriptive headings (not generic).
- **LocalBusiness + BreadcrumbList + Service schema** correctly emitting on all pages.

### What's blocking higher AI citation
- **No first-party data.** No original research, statistics, or proprietary datasets. AI systems disproportionately cite sources with unique numbers. Even one published "Average days to sell after pre-sale repaint in Sunshine Coast (n=X)" stat would lift this materially.
- **No Person schema.** AI systems cite content tied to identifiable experts. Need an author / team profile with Person schema for at least Jamie + key tradespeople.
- **No structured Tables or comparison data.** All copy is prose + bullet equivalents. Tables get extracted more reliably by AI parsers.
- **No "last updated" timestamp.** Freshness boosts citation, especially for time-sensitive topics (pricing, timelines, regulations).

## Per-page issues

### Home (`/`)
- Zero `<img>` elements; bento / projects carousel / testimonials all use gradient-mesh background divs. Replace with real photography in Phase 4 photo shoot.
- "Real reviews, real homes." H2 followed by a "Sample review" labeled set — the H2 copy is aspirational and risks confusing AI extractors. Consider softening the H2 to "What clients say" or making the placeholder framing more prominent in the heading area.
- Suburbs section drops the SVG map from spec; functional but loses a visual anchor that aids local-pack ranking confidence.

### `/services/house-pre-sale-painting`
- Strongest of the 4. Only material gap: the "Caloundra, 14 days to listing" before/after section has no real images.
- Palette section displays hex codes + brand names + notes — extractable for AI Overviews. Good.

### `/services/rental-property-repaint`
- No before/after section (Phase 4 content not produced). Adds visual rhythm gap.
- No palette section (correctly skipped — rentals use the durable-finish copy instead).

### `/services/new-home-purchase-painting`
- No agent-bridge, no palette, no before/after. Lightest of the 4 service pages by section count, though word count still strong.
- "Empty-house economics" sub-card is the kind of original framing AI systems will pull. Worth amplifying.

### `/services/boutique-house-painting`
- 5-step process (vs 4 elsewhere) earns the boutique positioning.
- No ROI block, no agent-bridge, no before/after. By design — boutique audience doesn't respond to ROI framing.
- The "Prep that takes as long as the painting" step copy is now strong (was "Meticulous prep" — kill-list word fixed this pass).

## Phase 4 content recommendations (prioritised)

1. **Photography day.** Real photos on home bento, service hero backgrounds, before/after pairs, projects carousel, and case-study pages. Lifts Experience score from 9 → ~20, plus enables image SERP visibility and image alt-text density.
2. **Build /about page with Person schema for Jamie + team.** Adds Expertise signal that's currently absent from the entire site.
3. **Confirm + display QBCC license, ABN, accreditation badges.** Currently claimed in copy but not verified or linked. One source of truth in `brand.ts`, conditionally rendered when populated.
4. **Add 1–2 outbound citations per service page** — link "Dulux Accredited Painter" to Dulux's accreditation page, link "QBCC licensed" to QBCC verification lookup. Cheap authority signal.
5. **Wire real Google Reviews** so AggregateRating schema can fire on LocalBusiness. The brief identifies this as a Phase 4 feature; doing it now unlocks rich results.
6. **Privacy policy + terms + sitemap pages.** Required for trust + footer-link completeness. The footer links exist but currently 404.
7. **Add a "Last updated: <date>" stamp on each service page.** Freshness signal for both Google and AI systems.
8. **Add one or two original-data lines per service page.** E.g. "We turned 47 vendor listings around inside 14 days during the 2025 spring market." (Real numbers, not invented.) Pulls AI citations.

## Phase 5 follow-up (out of scope for this pass)

- Core Web Vitals measurement once images land
- Schema validator pass (`claude-seo:seo-schema`)
- Indexation + sitemap generation (`claude-seo:seo-sitemap`)
- Full backlink baseline (`claude-seo:seo-backlinks`)
- SXO persona scoring on each service page (`claude-seo:seo-sxo`)

---
*Audit generated by `claude-seo:seo-content` skill. Page HTML pulled from `localhost:3000` during Phase 4 copy pass.*
