# Competitor Analysis — J. James Painting

This document is a competitive analysis framework + known signals from the trade landscape. The competitor list itself is filled in during a Phase 1 DataForSEO pull (see Methodology). Specific traffic figures, domain authority numbers, and ranking positions are intentionally absent from this draft — fabricated metrics are worse than absent ones.

Sources used: `client-brief/jjames-painting-website-brief.md` (Appendix A — current site audit), `docs/seo/strategy.md`, the local-service competitive context from `assets/local-service.md`.

---

## Competitive landscape

The Sunshine Coast painting market is dominated by three competitor archetypes:

### Archetype 1 — Established multi-trade local painters
- Long-running family-run businesses (10+ years), often founded in the 1980s-2000s
- Broad "we do everything" positioning: residential, commercial, industrial
- Strong word-of-mouth + GBP signals; moderate SEO investment
- Site quality: WordPress/Elementor templates, generic copy, thin location pages
- **This is J. James's current competitive cohort.** The rebuild repositions out of this cohort by leading with the four priority services.

### Archetype 2 — Premium / boutique-specialist painters
- Newer or rebranded operators targeting Noosa, Sunshine Beach, Peregian premium homes
- Architectural / heritage / coastal-premium positioning
- Site quality: cleaner, photography-led, smaller service surface
- Compete on the Boutique service line specifically. Win on visual portfolio depth.
- **This is where J. James's Boutique service page must compete directly.** The advantage J. James brings: 40+ years of trade history + qualifications + brand-partner accreditation, which the newer boutique operators rarely have.

### Archetype 3 — National franchises + lead-gen aggregators
- hipages, Oneflare, Service.com.au, ServiceSeeking — lead-gen marketplaces
- Don't compete for organic head terms but they buy ad inventory and rank on long-tail
- National franchise operations (e.g., painting franchise brands) running paid + light organic
- **These compete for paid clicks more than organic.** SEO strategy treats them as ad-spend pressure, not direct organic competitors.

---

## Differentiation map: where the rebuild wins

The brief's strategic premise is that no local Sunshine Coast painter currently leads with the four priority services. The rebuild's positioning advantage:

| Service line | Likely competitive density | Differentiation lever |
|---|---|---|
| Rental Property Repaint | Low — most painters list "investment property" as a sub-bullet, not a dedicated page | Dedicated landing page with PM coordination + multi-property packages |
| House Pre-Sale Painting | Very low — almost no competitor has a dedicated pre-sale page | Dedicated page + `/for-agents` referral funnel + ROI angle |
| New Home Purchase Painting | Very low — almost no competitor targets this audience | Dedicated page + settlement-timeline content + conveyancer referral angle |
| Boutique House Painting | Medium — Archetype 2 competes here | Long history + qualifications + photography + Dulux/Taubmans accreditation |

Three of the four priority services are essentially uncontested in organic search for Sunshine Coast suburbs. Owning these terms first is the single highest-leverage SEO action of the rebuild.

---

## Methodology — Phase 1 competitor research

The following pulls run in Phase 1 via `claude-seo:seo-dataforseo`:

### Step 1 — Identify top organic competitors per service × suburb

For each of the 20 Tier 1 keywords (4 priority services × 5 top suburbs), pull the top 10 SERP results. The domains appearing 3+ times across the 20 SERPs are the high-priority organic competitors.

```
For each in [rental property painter Noosa, rental property painter Buderim, ...]:
  pull top 10 organic results
  aggregate by domain
  rank by frequency
```

Expected output: 5–10 priority organic competitors. Likely additions: a couple of Archetype 1 established local painters, 1–2 Archetype 2 boutique specialists, and the lead-gen aggregators.

### Step 2 — Per-competitor profile

For each priority competitor pulled in Step 1, document:

| Field | Source |
|---|---|
| Domain | DataForSEO |
| Estimated organic traffic | DataForSEO `bulk_traffic_estimation` |
| Referring domains (link profile size) | `claude-seo:seo-backlinks` |
| Total ranking keywords | DataForSEO Labs |
| Top 10 keywords by traffic share | DataForSEO Labs |
| Service pages structure | manual review |
| Location page count + depth | manual review (counts + word counts on samples) |
| Schema usage | manual + Rich Results Test |
| Photography quality | manual review (real vs stock) |
| GBP rating + review count | `claude-seo:seo-maps` / manual |
| Last content update (rough) | manual (visible dates) |

### Step 3 — Keyword gap analysis

```
claude-seo:seo-dataforseo
# dataforseo_labs_google_domain_intersection
# jjamespaintingcontractorsqld.com.au vs each priority competitor
# identify keywords competitor ranks for that J. James does not
```

Three gap buckets to identify:

1. **Service gaps** — keywords/topics competitors cover that the new site should add. Realistic in this market: hazardous coatings expansions, specific commercial verticals (medical, retail fit-out), painting maintenance contracts.
2. **Location gaps** — suburbs competitors cover that J. James doesn't. Currently 12 suburbs; competitors may cover Mooloolaba, Mountain Creek, Tewantin, Pomona — confirm via gap analysis whether to expand.
3. **Content gaps** — informational queries competitors cover via blog. Feeds the content calendar.

### Step 4 — Backlink gap analysis

```
claude-seo:seo-backlinks
# competitor referring domain analysis
# identify domains linking to multiple competitors but not J. James
```

Typical link sources for Sunshine Coast painters:
- Local trade directories (Sunshine Coast Daily, Sunshine Coast Council business directory)
- Real estate agency partner pages (link back to recommended trades)
- Builder partner pages (Dulux Accredited Painter directory, Taubmans directory)
- Local news / community sites
- HIA, Master Painters QLD member directories

### Step 5 — E-E-A-T signal comparison

For each priority competitor, assess:
- Author/team bios visible? (Trust signal)
- Qualifications + license numbers visible?
- Insurance certificates referenced?
- Brand-partner accreditation badges with link-out to verification?
- Real testimonial depth (named clients, dated, with photos)?
- Photography: real vs stock?

J. James's E-E-A-T position is strong: 40+ years history, family ownership, lead/asbestos qualifications, brand-partner accreditation. The rebuild's About page + footer needs to surface all of this with linked verification where possible.

---

## Known quantities (no DataForSEO required)

### Current site weaknesses (from brief Appendix A)

- WordPress + Elementor 3.35.6 — slow, template-feel
- Two GTM containers (consolidation needed)
- No clear value proposition in hero
- Thin service pages, similar copy across pages
- 48 location pages across 4 templates × 12 suburbs — duplicate-content risk
- No second-tier CTAs
- Trust signals (brand logos) present but unexplained, unlinked
- Testimonials present but low-trust (no names, no dates, no suburbs)
- No blog
- Schema is Yoast/Elementor defaults — not properly implemented LocalBusiness or Service

### Current site strengths

- 40+ years of trade history (irreplaceable)
- Existing local rankings on at least some `house painter [suburb]` queries (preserve via redirect map)
- Brand-partner relationships (Dulux, Taubmans)
- Qualifications competitors typically lack (lead-based paint, asbestos)
- Existing GTM + GA install (data continuity, once consolidated)
- Logo and brand recognition built since 1985 (do not rebrand the mark)

---

## Pre-fill: Likely competitor names to validate

These are categories of operators known to be active in the Sunshine Coast painting market. Specific business identification + ranking validation is the Phase 1 DataForSEO task — do not assume any of these are currently ranking until confirmed:

- Established multi-trade Sunshine Coast painters with 10+ year histories
- Noosa-focused premium painters (Archetype 2)
- Brisbane-region painting companies advertising into the Sunshine Coast
- National painting franchise operations (likely paid only)
- hipages / Oneflare / ServiceSeeking aggregator pages for relevant keywords

Specific operator names + URLs to be added to this document once the Step 1 SERP pull is complete.

---

## Output template — to be filled in Phase 1

### Competitor X
- **Domain:**
- **Archetype:** 1 / 2 / 3
- **Estimated organic traffic:**
- **Referring domains:**
- **Tier 1 keywords ranking on page 1:** X of 20
- **Location pages:** count, depth
- **Schema usage:**
- **Photography quality:**
- **GBP:** rating, review count, response cadence
- **Notable strength:**
- **Notable weakness J. James can exploit:**

---

## Action items

- [ ] Phase 1: Run `claude-seo:seo-dataforseo` SERP pull for all 20 Tier 1 keywords; identify top 5–10 priority competitors
- [ ] Phase 1: Run domain-intersection analysis between current J. James domain and each priority competitor
- [ ] Phase 1: Manual review of priority competitor sites (service page structure, location pages, schema, photography)
- [ ] Phase 1: Run `claude-seo:seo-backlinks` competitor gap analysis
- [ ] Phase 1: Fill in this document with competitor profiles
- [ ] Phase 4: Run `claude-seo:seo-content` on priority competitor pages to identify content-depth gap targets
- [ ] Phase 6: Re-run competitor SERP positions 30/60/90 days post-launch via `claude-seo:seo-drift`
