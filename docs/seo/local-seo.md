# Local SEO — J. James Painting

Tactical depth for Google Business Profile, NAP management, AU/QLD citation targets, review velocity, and local schema. This document supplements [`strategy.md`](strategy.md) — strategy answers *what* and *why*, this answers *how* and *where*.

For URL structure see [`site-structure.md`](site-structure.md). For phased execution see [`implementation-roadmap.md`](implementation-roadmap.md).

---

## Business profile

| Field | Value |
|---|---|
| Business type | Service Area Business (SAB) |
| Industry vertical | Home Services — painting trade |
| Primary location | Sunshine Coast, QLD, Australia |
| Service area | 12 named suburbs (no whole-state per SAB June 2025 rules) |
| Schema subtype | `HomeAndConstructionBusiness` (Schema.org `LocalBusiness` parent — most specific subtype available for painting trade) |
| Established | 1985 |
| Phone | `0403 571 616` |
| Domain | `jjamespaintingcontractorsqld.com.au` |
| Address | TBC — confirm with client (required for LocalBusiness schema completeness) |
| ABN | TBC — confirm with client |
| QBCC license number | TBC — confirm with client |

SAB classification means: no street address displayed publicly; service-area pin only on Google Maps; `areaServed` lists named suburbs; no embedded directions map; no walk-in hours required.

---

## NAP master record

Single source of truth. Every page, every directory, every schema block uses this exact string.

```
Name:    J. James Painting Contractors
Phone:   0403 571 616
Website: https://jjamespaintingcontractorsqld.com.au
Address: [Suburb], QLD, Australia    ← TBC with client (suburb-only display for SAB)
ABN:     [TBC]
License: QBCC [TBC]
Email:   [TBC]
```

### NAP variation rules

- Phone: always `0403 571 616` on display, `+61 403 571 616` (E.164) in schema `telephone` and `tel:` links — Google accepts both forms but consistency matters across directories. Pick one display format and stick to it sitewide.
- Name: never abbreviate (no "J. James Painting" without "Contractors", no "JJP")
- Don't include trading-name variants ("Hume and Staff Painters" — the previous name) in the NAP. That history belongs on the About page narrative only, not in directory listings.

### NAP appears on every page

Footer (every page) — full NAP block:
```
J. James Painting Contractors
Sunshine Coast painters since 1985
Phone:   0403 571 616
Email:   [TBC]
Service area: 12 Sunshine Coast suburbs
ABN [TBC] · QBCC [TBC]
```

Header — phone only, persistent (`tel:` link, sticky on mobile).
Contact page — full NAP + service area list + business hours + map (service area pin, not street pin).

---

## Google Business Profile audit

Run via `claude-seo:seo-maps` in Phase 1 + manual review of the live GBP listing. Output goes to `docs/seo/gbp-audit.md` (separate doc — populated during Phase 1).

### Pre-audit verification

- [ ] Confirm GBP listing exists and is verified
- [ ] Confirm ownership (or initiate claim process if not owned)
- [ ] Confirm GBP listing's NAP matches the master record
- [ ] Confirm the listing has not been suspended or flagged

### Profile fields checklist

| Field | Required state |
|---|---|
| Business name | `J. James Painting Contractors` (exact match — no keyword stuffing like "Best Sunshine Coast Painter" — Google flags + reduces rankings) |
| Primary category | **Painter** (single most important local pack factor per Whitespark 2026, score 193 — incorrect primary category is the #1 negative factor, score 176) |
| Secondary categories | House Painter, Commercial Painter, Industrial Painter (target 4 secondary per BrightLocal — add Painting Contractor if available) |
| Service area | 12 suburbs listed individually: Buderim, Maleny, Forest Glen, Sippy Downs, Caloundra, Sunshine Beach, Noosa, Peregian, Coolum, Glasshouse Mountains, Aura, Kawana. **Do NOT list "Queensland" or "Sunshine Coast region"** — June 2025 SAB rules disallow whole-state/region service areas |
| Phone | `0403 571 616` |
| Website URL | **Do NOT link to the homepage** if home is the strongest organic page. Per Sterling Sky Diversity Update, GBP linking to the strongest page can suppress its organic rankings. Recommendation: link to `/contact` or `/services`. Test both and monitor. |
| Business hours | Accurate (top-5 ranking factor per Whitespark 2026 — "business is open at time of search" ranked top individual factor for the first time). Consider extended hours if feasible. |
| Special hours | Set for QLD public holidays + summer closure if applicable |
| Description | Rewritten to lead with the four priority services + "since 1985" + 12-suburb service area. 750-character limit; no keyword stuffing; no URLs in description. |
| Services list | Synced to the 4 priority services + legacy services from `site-structure.md`. Each service gets a 300-character description block. |
| Products | Skip (not relevant for trade service) |
| Photos | Minimum 10 real project photos (before/after where possible), team photos, vans/branded vehicles, completed exteriors. Refresh quarterly. 45% more direction requests with photos (Agency Jet). |
| Cover photo | A signature project — landscape, well-lit, instantly identifiable as Sunshine Coast |
| Logo | The existing logo at correct aspect ratio (Google requires 250×250 minimum) |
| Video | 1–2 short videos if available (under 30s, real work footage) |
| Attributes | "Family-owned", "Locally owned and operated", "Online estimates" (turn on the quote-request flow), "Wheelchair accessible" attributes are not applicable for SAB painters |
| Posts | Weekly cadence post-launch — project updates, seasonal tips, blog post promos. Posts don't directly rank but trigger Post Justifications in search results. |
| Q&A | Note: GBP Q&A was deprecated December 2025 (replaced by Ask Maps Gemini AI). Existing Q&A content should be migrated into the website's FAQ sections (already planned per `site-structure.md` schema matrix). |
| Messaging | Enable. Consider WhatsApp integration (replaced Google Business Chat in 2025–26). |
| Online booking | Enable if quote-request flow can connect via supported integrator |
| Google Verified badge | Apply (replaced Guaranteed/Screened in October 2025) — adds trust signal in local pack |
| Reviews | See Review Velocity Plan below |

### GBP post cadence (post-launch)

Weekly post types rotating through:
1. Project showcase (before/after photo, suburb, scope)
2. Seasonal tip (linking to a blog post)
3. New service callout (linking to a service page)
4. Community involvement / behind-the-scenes (team photo)

Each post ~150–300 words, one image minimum, one CTA (Call, Learn More, Book — varies by post type).

---

## Review velocity plan

### Why this matters

- The 18-day rule (Sterling Sky): local rankings cliff if no new reviews for 3 weeks. Set review cadence to a minimum of 1 review every 2 weeks; target 2/week.
- Magic threshold: 10 Google reviews (Sterling Sky). The current site's reviews are low-trust per brief Appendix A — the rebuild needs an active review-generation program from day one.
- 74% of consumers only care about reviews in the last 3 months (BrightLocal 2026). Total count matters less than recency.
- 31% of consumers only use 4.5+ rated businesses, 68% only 4+ (BrightLocal 2026). Maintain rating above 4.5 to avoid losing the 31% segment.
- 88% of consumers would use a business that responds to reviews (BrightLocal 2026). Response cadence is a trust signal.

### Generation flow

Post-project automated request:

```
Day 0 — project complete, final walkthrough
Day 1 — SMS: thank-you + photo of completed work + Google review link
Day 4 — Email reminder (if no review left): direct Google review link + light ask
Day 14 — Final reminder if still no review: include link, no further follow-ups
```

The link goes to the Google review form via the GBP Place ID URL (not the search result page — direct URL ensures the review flows correctly).

### Anti-gating compliance

Google's "fake engagement" policy and FTC vertical rules prohibit pre-screening review intent. Do NOT ask "were you happy?" first and route only satisfied customers to Google. Send every customer the same review link regardless of satisfaction signal.

### Response strategy

- Respond to **every** review within 48 hours (target 24 hours during business days)
- Named team member signs off (e.g., "— Jamie, J. James Painting Contractors") — adds personality, satisfies the "real human responding" trust signal
- Positive review response: thank by name where possible, reference the specific work, sign off
- Negative review response: never argumentative, acknowledge concern, offer offline resolution path, keep public response short
- HIPAA does not apply (this is a painting trade) — full latitude to reference suburb/scope in responses where relevant

### Review platforms beyond Google

Consumers use an average of 6 review sites (BrightLocal 2026). Target multi-platform presence:

| Platform | Notes |
|---|---|
| Google Business Profile | Primary — drives local pack |
| Facebook | Painter trade clients often check this — link Facebook page from footer |
| hipages | Australian trade marketplace — strong domain authority for painter queries |
| Word of Mouth | AU-specific review site, well-indexed for trades |
| True Local | AU directory + reviews, still pulled by aggregators |
| Yelp AU | Less used in AU than US but still indexed |
| Product Review (.com.au) | Has a "painters" category, AU-specific |
| TrustPilot | Indexed by Google; pulled by ChatGPT — see AI Visibility section |

Channel review requests through Google first (highest weight). After 10+ Google reviews are established, expand request flow to include Facebook and one AU-specific platform per request batch.

---

## Citation targets (AU / QLD / Sunshine Coast)

ChatGPT does NOT access GBP directly — it sources from Bing index, Yelp, TripAdvisor, BBB, Reddit, and selected directories. Citation strategy serves both traditional local pack ranking AND AI visibility.

### Tier 1 — Critical (Phase 1 + ongoing)

| Platform | Phase | Notes |
|---|---|---|
| Google Business Profile | 1 | Covered above |
| Bing Places for Business | 1 | **Critical** — powers ChatGPT, Microsoft Copilot, Alexa. Many businesses skip Bing; J. James won't. |
| Apple Business Connect | 1 | Usage doubled to 27% in 2025–26 (BrightLocal). Required for Apple Maps + Siri citations. |
| Facebook business page | 1 | Update NAP, hours, service list, About section to match master record |
| LinkedIn Company Page | 1 | Lower priority for trade but Google indexes; sets a "real business" signal |

### Tier 2 — AU trade directories (Phase 1–2)

| Platform | Domain | Notes |
|---|---|---|
| hipages | hipages.com.au | High-DA Australian trades marketplace |
| Yellow Pages AU | yellowpages.com.au | Free listing; still consulted by older demographics |
| True Local | truelocal.com.au | AU directory, reviews indexed |
| Word of Mouth | womo.com.au | AU review platform |
| Oneflare | oneflare.com.au | AU trade marketplace |
| ServiceSeeking | serviceseeking.com.au | AU trade marketplace |
| Yelp AU | yelp.com.au | Lower usage but ChatGPT sourcing |
| TripAdvisor | (only if hospitality-adjacent — n/a for painters) |
| Houzz AU | houzz.com.au | Architectural + boutique audience — set up with portfolio focus |
| BCI Central | bcicentral.com | Construction industry — useful for commercial + body corporate work |

### Tier 3 — Industry-specific / trust-signal directories (Phase 2)

| Platform | Notes |
|---|---|
| Dulux Accredited Painter directory | Confirm accreditation first (Phase 1 client open item). High trust signal — link badge to verification page in footer. |
| Taubmans Endorsed Painter directory | Confirm endorsement first. Same treatment as Dulux. |
| Master Painters Australia QLD member directory | Confirm membership first. Strongly relevant for the AU trade audience. |
| HIA (Housing Industry Association) member directory | Confirm membership. Lower direct SEO value but local trust signal. |
| QBCC license verification | Public license search; consumer-facing trust signal — link to the license search result from the About page. |

### Tier 4 — Local / community (Phase 2–3)

| Platform | Notes |
|---|---|
| Sunshine Coast Council business directory | Council-run directory if available |
| Sunshine Coast Daily / local news directories | Any free local-paper directory listings |
| Local chamber of commerce | Sunshine Coast Business Council / Sunshine Coast Chamber if applicable |
| BBB equivalent | Not directly applicable in AU; QBCC license + Master Painters serve this trust role |
| Real estate agency partner pages | Reach out to agency partners (Phase 6+) for inclusion on their recommended-trades pages |

### Tier 5 — Data aggregators (Phase 2)

| Aggregator | Why |
|---|---|
| Data Axle | Distributes to many downstream directories |
| Foursquare | Powers Apple Maps fallback data + other apps |
| Neustar / TransUnion | Less critical in AU but still pulled by some aggregators |

### Citation hygiene rules

- Every submission uses the master NAP exactly
- One canonical listing per platform (no duplicates)
- Categories selected per platform's painter/painting/trades taxonomy
- Photos and descriptions match the GBP listing
- Phone formatted consistently (use display format `0403 571 616` on directories; use `+61 403 571 616` only where E.164 is required)
- Listings audited quarterly for NAP drift

Run via `claude-seo:seo-backlinks` to monitor citation health + via manual quarterly review.

---

## Doorway page risk — the 48-variant problem

Local-service quality gates flag two doorway risks for J. James:

1. **The swap test (RicketyRoo method):** if the city name can be swapped and the page still makes sense, it's a doorway. The HVAC case study cited by claude-seo: lost 80% rankings + 63% traffic after the March 2024 Core Update for exactly this pattern.
2. **Hard stop at 50+ location pages.** J. James will have 60 location URLs total (12 hubs + 48 variants). Migration plan keeps the live count at 20 at launch (12 hubs + 8 priority variants) with the remaining 40 staying at their current URLs until rewritten 2/week.

### Anti-doorway rules per variant

Each suburb variant page MUST include all five:

1. **Unique opening paragraph** referencing a real, specific local condition (salt spray for Sunshine Beach, slope/drainage for Buderim, hinterland weatherboards for Maleny). The paragraph fails the swap test by design.
2. **At least one suburb-specific project reference** — a real recent project, named with the suburb (e.g., "We repainted a 1960s weatherboard in Maleny last spring..."). After Phase 4 case studies are shot, link to the project case study.
3. **Unique FAQ entry** not repeated on any other variant
4. **Minimum 500 words** of substantive content (per local-service template quality gate — 40% unique threshold; we aim higher at 60%+)
5. **Local internal links**: to the parent suburb hub, to 1 nearby suburb hub (geographic adjacency), to 1 priority service page, to 1 suburb-specific project case study where available

If a variant cannot meet all five at rewrite time, **consolidate to the hub via canonical or 301**. Shipping thin is worse than redirecting.

### Wave rollout enforcement

Per `content-calendar.md` the rewrite cadence is 2 variants per week. Each variant goes through:

```
Draft → Anti-slop check → claude-seo:seo-content (E-E-A-T + thin-content) → claude-seo:seo-page → publish
```

A variant that fails `seo-content`'s thin-content detection is reworked or consolidated — never published as-is.

---

## LocalBusiness schema spec

Concrete JSON-LD template. Generated per page via `claude-seo:seo-schema` in Phase 3.

### Sitewide LocalBusiness (homepage + footer reference)

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://jjamespaintingcontractorsqld.com.au/#organization",
  "name": "J. James Painting Contractors",
  "alternateName": "J. James Painting",
  "description": "Sunshine Coast painting contractors, family-run since 1985. Specialising in rental property repaint, pre-sale painting, new-home painting, and boutique residential work across 12 Sunshine Coast suburbs.",
  "url": "https://jjamespaintingcontractorsqld.com.au",
  "telephone": "+61 403 571 616",
  "email": "[TBC]",
  "image": [
    "https://jjamespaintingcontractorsqld.com.au/og/home.jpg",
    "https://jjamespaintingcontractorsqld.com.au/og/team.jpg",
    "https://jjamespaintingcontractorsqld.com.au/og/project-boutique.jpg"
  ],
  "logo": "https://jjamespaintingcontractorsqld.com.au/logo.png",
  "priceRange": "$$",
  "foundingDate": "1985",
  "areaServed": [
    { "@type": "Place", "name": "Buderim, QLD" },
    { "@type": "Place", "name": "Maleny, QLD" },
    { "@type": "Place", "name": "Forest Glen, QLD" },
    { "@type": "Place", "name": "Sippy Downs, QLD" },
    { "@type": "Place", "name": "Caloundra, QLD" },
    { "@type": "Place", "name": "Sunshine Beach, QLD" },
    { "@type": "Place", "name": "Noosa, QLD" },
    { "@type": "Place", "name": "Peregian, QLD" },
    { "@type": "Place", "name": "Coolum, QLD" },
    { "@type": "Place", "name": "Glasshouse Mountains, QLD" },
    { "@type": "Place", "name": "Aura, QLD" },
    { "@type": "Place", "name": "Kawana, QLD" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[suburb TBC]",
    "addressRegion": "QLD",
    "postalCode": "[TBC]",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-26.65000",
    "longitude": "153.05000"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/[TBC]",
    "https://www.instagram.com/[TBC]",
    "https://www.google.com/maps/place/[Place-ID]"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[TBC live from GBP]",
    "reviewCount": "[TBC live from GBP]",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "QBCC License [TBC]"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Lead-based paint removal qualified"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Asbestos removal qualified"
    }
  ]
}
```

Notes:
- Coordinates above are a Sunshine Coast region centroid placeholder. Replace with the actual address-derived coordinates (5+ decimal precision per Google Confirmed guidance).
- `aggregateRating` should be pulled live from Google Reviews API where possible (avoid hardcoded values that become stale).
- `priceRange` `"$$"` signals mid-market — adjust to `"$$$"` if Boutique work pricing justifies. Under 100 characters per schema spec.
- `address.streetAddress` deliberately omitted (SAB — no street address shown).

### Suburb hub LocalBusiness override

On each suburb hub page (e.g., `/locations/noosa`), add a page-specific LocalBusiness block with single-suburb `areaServed`:

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://jjamespaintingcontractorsqld.com.au/locations/noosa/#localbusiness",
  "name": "J. James Painting Contractors — Noosa",
  "url": "https://jjamespaintingcontractorsqld.com.au/locations/noosa",
  "telephone": "+61 403 571 616",
  "areaServed": { "@type": "Place", "name": "Noosa, QLD" },
  "parentOrganization": {
    "@id": "https://jjamespaintingcontractorsqld.com.au/#organization"
  }
}
```

This pattern repeats per suburb hub. Variant pages (`/locations/noosa/exterior`) reference the same parent organization @id but add a Service schema scoped to that suburb + service combination.

### Service schema per service page

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://jjamespaintingcontractorsqld.com.au/services/house-pre-sale-painting/#service",
  "name": "House Pre-Sale Painting",
  "description": "Fast-turn painting for vendors and real estate agents preparing a home for the market. Neutral palettes, tight pre-listing timelines, agent-coordinated scheduling.",
  "provider": {
    "@id": "https://jjamespaintingcontractorsqld.com.au/#organization"
  },
  "areaServed": [
    { "@type": "Place", "name": "Buderim, QLD" },
    { "@type": "Place", "name": "Noosa, QLD" }
    /* all 12 suburbs */
  ],
  "serviceType": "Pre-Sale Painting",
  "category": "Residential Painting"
}
```

### FAQPage schema where FAQ blocks exist

Generated automatically per FAQ block. Mandatory on every priority service page, every suburb variant, and any blog post with a structured Q&A section.

---

## AI visibility for local

Three of the top 5 AI visibility factors are citation-related (Whitespark 2026). Tactical actions specifically for AI sourcing:

| Action | Why |
|---|---|
| Bing Places claimed and optimised (Tier 1 above) | Powers ChatGPT, Copilot, Alexa |
| Reddit presence — answer relevant Sunshine Coast/painting threads under brand account | ChatGPT sources from Reddit |
| TrustPilot listing claimed and reviews requested | ChatGPT pulls TrustPilot |
| Apple Business Connect optimised | Siri local recommendations |
| "Best painters Sunshine Coast" listicle inclusion (digital PR target) | #1 AI visibility factor per Whitespark 2026 |
| llms.txt published at site root | Phase 5 deliverable per `implementation-roadmap.md` |
| FAQ blocks structured for passage-level citability — short, quotable answers under H3 | Improves AI Overview + ChatGPT citation odds |
| Author/team bios on About page with photos | E-E-A-T signal AI systems weight |
| Brand mentions outside backlinks (forum mentions, news mentions) | Ahrefs: brand mentions correlate 3x more strongly with AI visibility than backlinks (0.664 vs 0.218) |

Full AI visibility analysis runs via `claude-seo:seo-geo` in Phase 4.

---

## Top 10 prioritised local SEO actions

Priority order for Phase 1–2:

| # | Priority | Action | Owner |
|---|---|---|---|
| 1 | Critical | Confirm GBP ownership; if not owned, initiate claim | Project lead |
| 2 | Critical | Confirm address + ABN + QBCC license with client (required for schema completeness) | Project lead |
| 3 | Critical | NAP master record locked; update GBP + Facebook + Bing + Apple to match exactly | SEO lead |
| 4 | High | Bing Places claimed and optimised | SEO lead |
| 5 | High | Apple Business Connect claimed and optimised | SEO lead |
| 6 | High | Confirm Dulux + Taubmans + Master Painters QLD entitlements; if confirmed, badge usage rights in footer | Project lead |
| 7 | High | LocalBusiness `HomeAndConstructionBusiness` schema implemented sitewide via `claude-seo:seo-schema` in Phase 3 | Build lead |
| 8 | High | Review request flow built and tested (SMS + email at days 1, 4, 14 post-project) | Build lead |
| 9 | Medium | Hipages + Yellow Pages AU + True Local + Word of Mouth submissions in Phase 2 | SEO lead |
| 10 | Medium | Data aggregator submissions (Data Axle, Foursquare) in Phase 2 | SEO lead |

---

## Limitations of this analysis

This document is planned tactical depth. It does NOT replace:

- Live GBP audit (run via `claude-seo:seo-maps` against the live listing in Phase 1)
- Geo-grid rank tracking (Whitespark / Local Falcon / `claude-seo:seo-maps`)
- Live citation health audit (`claude-seo:seo-backlinks` + manual platform-by-platform check)
- Live competitor local pack positions (`claude-seo:seo-dataforseo`)
- GBP Insights data (impressions, direction requests, calls) — only available from the verified GBP account

All of these are Phase 1 follow-up actions that populate `docs/seo/baseline.md` and refine this document with live numbers.
