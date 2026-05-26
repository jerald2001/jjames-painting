# SEO Strategy — J. James Painting

Top-level SEO strategy for the rebuild of `jjamespaintingcontractorsqld.com.au`. Builds on `client-brief/jjames-painting-website-brief.md` (Section 12) and the approved plan at `/home/jerald/.claude/plans/client-brief-jjames-painting-website-br-cheeky-quokka.md`.

For URL hierarchy and per-page keywords see [`site-structure.md`](site-structure.md). For competitor research see [`competitor-analysis.md`](competitor-analysis.md). For content cadence and blog topics see [`content-calendar.md`](content-calendar.md). For phased execution see [`implementation-roadmap.md`](implementation-roadmap.md).

---

## Positioning

> Sunshine Coast property painting, family-run since 1985 — for the homes you're renting, selling, buying, or staying in for good.

The rebuild is a repositioning, not just a refresh. The four priority services (Rental Repaint, Pre-Sale, New Home, Boutique) carry the brand. Legacy services stay accessible but no longer set the navigation hierarchy.

---

## Strategic priorities

1. **Rank for the four priority services × top 5 suburbs.** This is the conversion engine. Twenty head-keyword combinations drive the majority of qualified leads.
2. **Maintain existing local rankings during migration.** No suburb URL goes offline without a 301. The current site ranks for various `house painter [suburb]` queries; ranking equity is preserved through wave-based rewrites.
3. **Build topical authority through structured content.** Blog + case studies create the supporting depth Google now demands for E-E-A-T scoring on local service queries.
4. **Capture the referral funnel.** A dedicated `/for-agents` page targets real estate agents and property managers — a B2B funnel the current site does not address.

---

## Audience priority (drives keyword + content weighting)

| Priority | Audience | Primary service | Conversion mechanism |
|---|---|---|---|
| 1 | Vendors preparing to sell | Pre-Sale Painting | Quote form (3-step, conditional) |
| 2 | Rental property owners + property managers | Rental Repaint | Quote form + agent partner form |
| 3 | New home buyers | New Home Painting | Quote form |
| 4 | Boutique homeowners | Boutique Painting | "Book a consultation" — slower, higher-value |
| 5 | Real estate agents & PMs (referral source) | All of the above | `/for-agents` partner form |

Priority 1 and 2 carry the bulk of search volume and the fastest conversion cycle. Priority 4 (Boutique) is high-margin but lower-volume — it needs visual depth more than keyword breadth.

---

## Keyword strategy

### Tiered keyword targets

**Tier 1 — Priority service × top 5 suburbs (the 20 head terms)**

```
rental property painter Noosa
rental property painter Buderim
rental property painter Sunshine Beach
rental property painter Caloundra
rental property painter Maleny

pre-sale house painter Noosa
pre-sale house painter Buderim
pre-sale house painter Sunshine Beach
pre-sale house painter Caloundra
pre-sale house painter Maleny

new home painter Noosa
new home painter Buderim
new home painter Sunshine Beach
new home painter Caloundra
new home painter Maleny

boutique house painter Noosa
boutique house painter Sunshine Beach
boutique house painter Buderim
boutique house painter Maleny
boutique house painter Peregian
```

These are the keywords every quarterly report tracks. The 20 phrases are split across the 4 priority service pages (each page ranks for ~5 suburb variants) and the 12 suburb hubs (each hub references the 4 priority services).

**Tier 2 — Suburb-level head terms (12)**

```
painters [suburb]   × 12 suburbs
```

Carried by the 12 suburb hub pages. These are the highest-volume suburb terms; they're the safety net if priority service targeting underperforms.

**Tier 3 — Generic Sunshine Coast head terms (5)**

```
painters Sunshine Coast
house painters Sunshine Coast
painting contractors Sunshine Coast
residential painters Sunshine Coast
commercial painters Sunshine Coast
```

Carried by home, services index, and legacy service pages. These are the most competitive but also the most generic — ranking here is a long-term outcome of building topical authority across all the other layers.

**Tier 4 — Long-tail variants (48)**

```
[house-painter | painters | exterior | interior] [suburb]   × 48 variants
```

Carried by the 48 variant pages. Lower volume per phrase, but cumulatively significant. Long-tail captures buyers further along the decision funnel.

**Tier 5 — Informational / blog**

```
how much does it cost to repaint a rental between tenants
best neutral paint colours for selling a Sunshine Coast home
should you paint before or after you move in
choosing exterior paint for coastal conditions
heritage Queenslander repaints what's different
... (see content-calendar.md for full list)
```

Carried by blog posts. These build topical authority + capture top-of-funnel intent before the buyer is ready to convert. Internal links from blog posts to relevant service pages route that intent toward conversion.

### Keyword volume + difficulty validation

This document does not include search volume or difficulty estimates. Those must be pulled from a live data source. Recommended invocation in Phase 1:

```
claude-seo:seo-dataforseo
# Pull volume + difficulty for all Tier 1 (20), Tier 2 (12), and Tier 3 (5) keywords.
# Pull volume for Tier 4 sampled across top 12 variants and Tier 5 blog topics.
```

The 20 Tier 1 keywords drive ranking priority. If DataForSEO returns surprisingly low volume on a specific Service × Suburb combination, the variant may be deprioritised in the rewrite wave order (see `content-calendar.md`).

### Cannibalisation prevention

Suburb hub `painters [suburb]` and suburb variant `painters [suburb]` (the `painters` variant URL) target the same head phrase. To prevent cannibalisation:

- Hub page is the canonical target for the head phrase. H1 + title + meta optimised for `painters [suburb]`.
- The `painters` variant page (e.g., `/locations/noosa/painters`) shifts focus to "general house painters in [suburb]" with H1 like "House painters serving [suburb]" — narrower intent that complements rather than competes.
- Internal link from variant to hub uses anchor `painters in [suburb]` to signal the hub as primary.

If GSC data after launch shows the variant outranking the hub for the head term, consolidate via canonical or 301.

---

## Local SEO foundation

### Google Business Profile

Owned action (run via `claude-seo:seo-local` + `claude-seo:seo-maps` in Phase 1):

- Audit current GBP listing — confirm verified, claim ownership if needed
- NAP exactly matches the site (name, address, phone) — no abbreviation differences
- Categories: Painter (primary), House Painter (secondary), Commercial Painter (secondary)
- Service list synced to the four priority services + legacy services
- Service area set to the 12 specific suburbs (SAB June 2025 guidelines disallow whole-state service areas — list cities only)
- Business hours accurate (top-5 ranking factor per Whitespark 2026 — keep current)
- Photo refresh: real project work, team, vans
- WhatsApp integration considered (replaced Google Business Chat in 2025–26)
- Review response strategy: respond to every review within 48 hours, named team member signs off
- GBP description rewritten to align with the new positioning

### NAP consistency

NAP record (single source of truth, defined here):

```
Name: J. James Painting Contractors
Phone: 0403 571 616
Email: [to be confirmed — TBC]
Address: [to be confirmed — TBC, currently no street address shown on site]
Service area: Sunshine Coast region and Queensland
ABN: [to be confirmed]
License: [QBCC license number — to be confirmed]
```

NAP appears identically on every page (footer minimum). Address and ABN are required for full LocalBusiness schema — flagged as a Phase 1 client open item.

### Citation cleanup

Phase 5 task: audit existing citations across Yellow Pages, True Local, hipages, Word of Mouth, Yelp, Apple Maps, Bing Places, Facebook. Inconsistent NAPs get corrected through each platform's update flow. Run via `claude-seo:seo-backlinks` (cross-references citations) + manual.

### Review velocity

Current testimonial state is low-trust (per brief Appendix A). The new site uses a live Google Reviews widget (or scheduled API pull). A review request flow goes out post-project completion — automated via email/SMS — to lift volume from current to target.

Per Whitespark 2026 the AI-visibility signals weight detailed reviews with photos heavily. Review requests should ask for: a sentence about the work, the suburb, and an optional photo.

---

## Schema markup plan

See [`site-structure.md`](site-structure.md#schema-markup-plan) for the page-by-page schema matrix. Highlights:

- `LocalBusiness` schema sitewide, with full property coverage (geo, openingHours, priceRange, areaServed, aggregateRating)
- `Service` schema on every service page referencing the parent LocalBusiness
- `FAQPage` schema on every page that ships an FAQ block (priority services + suburb variants + select blog posts)
- `BreadcrumbList` sitewide
- `BlogPosting` on every blog post with proper `author` and dates
- `Review` + `AggregateRating` on testimonials page

All schema validated against Schema.org Rich Results Test before deploy. Built via `claude-seo:seo-schema` per page.

---

## Generative Engine Optimization (GEO)

Per `assets/local-service.md` (Whitespark 2026 report): AI Overviews appear for only ~0.14% of local keywords, so AI disruption risk is low for this vertical. But ChatGPT and Perplexity are increasingly used for local recommendations — and the AI-visibility factors matter:

### Owned actions (run via `claude-seo:seo-geo` in Phase 4)

- Ensure presence on expert-curated "best of" lists (Whitespark ranked this #1 AI visibility factor for 2026). Targets: local business directories, "best painters Sunshine Coast" listicles, real estate agent recommendation lists.
- Maintain NAP consistency across all platforms (covered above).
- Build genuine review volume and quality (covered above).
- LocalBusiness schema with full properties (covered above).
- Include original photos in schema `image` arrays.
- Structure FAQ content for common local service questions (covered in FAQPage schema).
- Add `llms.txt` at the site root listing key content URLs (handled in Phase 5 via `claude-seo:seo-geo`).
- Make passage-level content citable: short, quotable answers under H3 subheadings on each priority service page (e.g., "How much does a pre-sale repaint cost on the Sunshine Coast?" → a single quotable paragraph).

---

## Quality gates and risk flags

### Location page count: AT the warning, well under the hard stop

The local-service template sets a warning at 30+ location pages and a hard stop at 50+. Total location pages planned = 12 hubs + 48 variants = **60 URLs**.

**This is over the hard stop.** Mitigation:

1. **Launch ships 20 location pages** (12 hubs + 8 priority variants). 20 is under the warning threshold. Each of the 20 is unique, locally-contextualised, and meets the 500-word minimum.
2. **The remaining 40 variants stay at their current URLs**, with their current content, until rewritten in waves at 2 variants per week. Each variant is reviewed against the unique-content gate (40% unique, 500 words, suburb-specific paragraph + project reference + FAQ entry) before its rewrite is published.
3. **Quality gate**: any variant that cannot meet the unique-content requirement at rewrite time is consolidated to the hub via canonical or 301 instead of shipping thin.

If after the wave-rollout completes, GSC monitoring shows variant pages competing with hubs for the same head term, individual variants are consolidated. The 60-page total is a ceiling, not a target.

### Other migration risks

- **48 → fewer than 48 pages**: if any variant URL goes offline during the wave rollout (e.g., consolidated), a 301 to the hub is mandatory. No 404s on URLs that currently rank.
- **GTM container consolidation**: two containers exist (GTM-NX2KJB57, GTM-T8ZR6HGF). Inventory tags from both before tear-down; ensure all conversion events move to the consolidated container before old one is removed.
- **Photography**: the boutique and pre-sale pages are highest-impact and most dependent on real imagery. If the shoot day isn't booked by Phase 4 entry, those pages launch with client-supplied imagery and get a v1.1 re-shoot pass post-launch.

---

## KPI framework

Baseline must be pulled in Phase 1 from current GA4 + GSC. Targets are expressed as relative lift, not absolute numbers, until baseline is confirmed.

| Metric | Baseline | 3 month | 6 month | 12 month |
|---|---|---|---|---|
| Organic traffic | TBC from GA4 | +20% | +50% | +100% |
| Quote form submissions | TBC | +25% | +60% | +120% |
| Click-to-call events | TBC | +20% | +40% | +75% |
| Tier 1 keyword rankings (page 1) | TBC | 8 of 20 on page 1 | 14 of 20 | 18 of 20 |
| Tier 2 suburb head terms (page 1) | TBC | 6 of 12 | 9 of 12 | 12 of 12 |
| Indexed pages (Search Console) | TBC from current | ~30 (launch + variants in wave) | ~50 | 60 |
| Mobile Core Web Vitals | Audit at launch | All green | All green | All green |
| Google reviews (count) | TBC | +15 reviews | +35 reviews | +75 reviews |
| Domain Authority (proxy: referring domains) | TBC | +5 | +12 | +25 |

KPIs are tracked in a monthly report (Phase 6 ongoing deliverable). Tools: GA4, Google Search Console, GBP Insights, Whitespark or Local Falcon (geo-grid), `claude-seo:seo-drift` for site-level regression detection.

### Success criteria (12-month)

Aligned with brief Section 19:

- 40%+ of new enquiries come from the four priority service lines (vs generic "house painting")
- 4 active agency/PM referral partners onboarded via `/for-agents`
- Page 1 rankings for Tier 1 (priority service + top 5 suburbs) — 18 of 20 phrases
- Core Web Vitals green across all key pages, LCP < 2.5s
- Quote requests increasingly reference the four specialties by name (qualitative signal)

---

## Sources

- `client-brief/jjames-painting-website-brief.md`
- `/home/jerald/.claude/plans/client-brief-jjames-painting-website-br-cheeky-quokka.md`
- `docs/seo/google-search-guidelines-summary.md`
- `docs/seo/seo-workflow.md`
- `assets/local-service.md` (claude-seo skill, local-service industry template)
- Whitespark 2026 Local Search Ranking Factors Report (referenced in template)
