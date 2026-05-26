# Noosa suburb hub — wireframe spec

Route: `/locations/noosa`
Template: Suburb hub (shared by all 12 suburb hubs with content variation)
Primary keyword: `painters Noosa`
Reference: [`docs/seo/site-structure.md`](../seo/site-structure.md#suburb-hub-pages-12), [`docs/seo/topic-clusters.md`](../seo/topic-clusters.md#suburb-hubs-in-cluster-context)

## Page-level rules

- Exactly one `<h1>`.
- Minimum 600 words unique content per `docs/seo/strategy.md` quality gate.
- Two image patterns minimum. This page uses three: full-bleed local-context hero, bento grid (services × suburb), card-with-bleed (suburb projects).
- Schema: per-page `LocalBusiness` with `areaServed: Noosa` + parent `LocalBusiness` reference + `BreadcrumbList`. See `docs/seo/local-seo.md#suburb-hub-localbusiness-override`.
- Suburb hubs are the geographic anchor of the cluster architecture — every priority service links here, and this page links to all 4 variant pages.

## Template variations (the other 11 suburb hubs)

Same structure, content varies by suburb. Each hub must have:

- Unique opening paragraph referencing a real local condition (per `docs/seo/local-seo.md` anti-doorway rules).
- Unique service emphasis matching the suburb's strongest cluster fit (Noosa = Boutique + Pre-Sale; Sippy Downs = Rental; Aura = New Home; etc.).
- Unique project examples specific to the suburb (or omitted if no real projects available).
- Unique FAQ entries.

## Vertical section order

```
1.  Sticky header (shared)
2.  Breadcrumb
3.  Hero (full-bleed local-context photo, suburb H1)
4.  Local context intro (2-column: about Noosa + why painting there is different)
5.  Services we do in Noosa (bento grid of 4 priority services + scope notes)
6.  Variants strip (4 variant page links: house-painter, painters, exterior, interior)
7.  Recent projects in Noosa (card-with-bleed, 2–3 projects)
8.  Nearby suburbs (chip row to adjacent hubs)
9.  FAQ block (suburb-specific FAQ schema)
10. Quote form CTA
11. Footer (shared)
```

---

## 2. Breadcrumb

```
  Home  /  Locations  /  Noosa
```

Same pattern as service page breadcrumb. `BreadcrumbList` schema generated.

---

## 3. Hero

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│         [full-bleed photograph — real Noosa coastal residence,               │
│          ideally at golden hour, weatherboard or architectural]              │
│                                                                              │
│  PAINTERS / NOOSA                                                            │
│                                                                              │
│  Painters Noosa.                                                             │
│  Coastal homes, salt air,                                                    │
│  premium finishes.                                                           │
│                                                                              │
│  Family-run Sunshine Coast painters working across Noosa,                    │
│  Sunshine Beach, and Peregian since 1985. Boutique residential,              │
│  pre-sale prep, between-tenancy repaints.                                    │
│                                                                              │
│  [Get a quote for your Noosa home]   • 0403 571 616                          │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Full-bleed break**.
- Height: `min(80vh, 720px)`.
- Background image: a real Noosa property J. James has painted. If none available pre-shoot, use the strongest client-supplied Noosa image. Avoid stock seascape photos.
- Eyebrow: "PAINTERS / NOOSA" with slash separator. Small uppercase tracking-wide green accent rule above.
- H1: Fraunces, `text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.035em]`, navy. Three short lines.
- Subhead: Inter, `text-lg md:text-xl text-ink-soft leading-relaxed`, max-width 580px. Localises the offering ("Noosa, Sunshine Beach, Peregian" — the adjacent suburbs trigger geographic recall).
- Primary CTA: green "Get a quote for your Noosa home" (longer label is OK on the suburb pages — high local relevance).
- The H1 carries the primary keyword `Painters Noosa` literally. This is a hub page — the keyword density is concentrated, not subtle.

---

## 4. Local context intro

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   About painting Noosa homes              What's different here          │
│                                                                          │
│   Noosa sits on the salt edge             Coastal exposure breaks down   │
│   of the Sunshine Coast.                  exterior paint faster than     │
│   Architectural builds, character         hinterland conditions. The     │
│   Queenslanders, premium                  right product system is        │
│   coastal residences, and the             usually a 7–10-year exterior   │
│   occasional heritage cottage             cycle on a coast-facing wall   │
│   tucked behind the dune line.            and 10–15 on a protected one.  │
│                                                                          │
│   Most of our Noosa work is               We use Dulux Weathershield     │
│   pre-sale refreshes for                  and Taubmans All Weather as    │
│   vendor-priced homes, between-           the spine of most exterior     │
│   tenancy resets on holiday               systems on this coast. For     │
│   rentals, and boutique repaints          interiors, washable matte for  │
│   on character architecture.              high-traffic walls.            │
│                                                                          │
│   We've been on this stretch              Indoors, the southern light    │
│   of coast since 1985.                    pulls cool. Bring colour       │
│                                           samples to a Noosa home at     │
│                                           3pm before you commit.         │
└──────────────────────────────────────────────────────────────────────────┘
```

- 2-column layout on desktop, single column on mobile.
- Left column: H2 "About painting Noosa homes" — Fraunces `text-3xl md:text-4xl font-medium`. Body in Inter `text-base leading-relaxed`.
- Right column: H2 "What's different here" — same typography. Body emphasises real local conditions (salt exposure, coastal product systems, southern light).
- This is the critical anti-doorway section per `docs/seo/local-seo.md` — the content must fail the swap test. The lines above reference Noosa-specific conditions ("salt edge of the Sunshine Coast", "character Queenslanders", "vendor-priced homes", "3pm southern light") that wouldn't make sense if you swapped "Noosa" for "Caloundra".

### Swap-test verification (Phase 4 mandatory)

When the final Noosa copy is written, run this check: copy a paragraph, replace every "Noosa" with "Caloundra", and read it. If it still makes sense, rewrite. If it now reads false (e.g., "the dune line" doesn't apply to Caloundra), the paragraph is sufficiently local.

---

## 5. Services we do in Noosa (bento grid)

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Our services in Noosa                                      │
│   What we paint here.                                                    │
│                                                                          │
│  ┌─────────────────────────────────┐  ┌────────────────────────────┐    │
│  │                                 │  │                            │    │
│  │   [Noosa boutique project]      │  │  [Noosa pre-sale project]  │    │
│  │   Boutique house painting       │  │  House pre-sale painting   │    │
│  │   Architectural and heritage    │  │  Listing-ready in days,    │    │
│  │   homes across Noosa and        │  │  coordinated with your     │    │
│  │   Noosaville.              →   │  │  Noosa agent.            → │    │
│  │   (large tile)                  │  │                            │    │
│  └─────────────────────────────────┘  └────────────────────────────┘    │
│                                       ┌────────────────────────────┐    │
│                                       │  [Noosa rental project]    │    │
│                                       │  Rental property repaint   │    │
│                                       │  Between-tenancy turnaround│    │
│                                       │  on Noosa holiday rentals  │    │
│                                       │  and long-term homes.   →  │    │
│                                       └────────────────────────────┘    │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  [Noosa new home project]                                         │   │
│  │  New home painting                                                │   │
│  │  Settlement-to-keys painting for new Noosa owners.         →     │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Bento grid** (same asymmetry as home grid, scoped to Noosa).
- Tile order shifts by suburb cluster fit. Per `docs/seo/topic-clusters.md` Noosa is anchored in Boutique + Pre-Sale, so:
  - Boutique = largest tile (2 cols, 2 rows).
  - Pre-Sale = top-right.
  - Rental = bottom-right.
  - New Home = full-width below (lowest emphasis on this suburb).
- Each tile copy is Noosa-specific (mentions "Noosa", "Noosaville", "Noosa agent", "Noosa holiday rentals"). No generic reuse.
- Each tile links to the parent priority service page (`/services/[slug]`), not to a Noosa-scoped service page. The variant pages (section 6) carry the local-cross-product depth.

---

## 6. Variants strip

```
┌──────────────────────────────────────────────────────────────────────────┐
│   Looking for something more specific in Noosa?                          │
│                                                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │             │  │             │  │             │  │             │     │
│  │  House      │  │  Painters   │  │  Exterior   │  │  Interior   │     │
│  │  painter    │  │  Noosa      │  │  painter    │  │  painter    │     │
│  │  Noosa  →   │  │  →          │  │  Noosa  →   │  │  Noosa  →   │     │
│  │             │  │             │  │             │  │             │     │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │
└──────────────────────────────────────────────────────────────────────────┘
```

- 4-column grid on desktop, 2×2 on mobile.
- Each card: `bg-cream-cool`, navy/10 border, `p-6 rounded-md`, hover translate-y up by 1px + border darken.
- Card content: Fraunces serif title (`text-xl md:text-2xl font-medium`) + small arrow icon (lucide `ArrowUpRight`).
- Cards link to the four variant URLs:
  - `/locations/noosa/house-painter`
  - `/locations/noosa/painters`
  - `/locations/noosa/exterior`
  - `/locations/noosa/interior`
- These are the four variants that — at launch — are either rewritten unique (2 of 4 in launch wave per `docs/seo/content-calendar.md`: Noosa exterior + house-painter) or remaining at their existing URLs with existing content (the other 2 — painters + interior — get rewritten in week 1 wave per the rollout schedule).

### Critical anti-cannibalisation note

Per `docs/seo/strategy.md`: the suburb hub (`/locations/noosa`) and the `painters` variant (`/locations/noosa/painters`) both target `painters Noosa`. The hub is the canonical target — H1, title tag, and meta description optimise for it. The variant shifts to "house painters in Noosa" with a narrower H1. If post-launch GSC data shows the variant outranking the hub, consolidate via canonical or 301.

---

## 7. Recent projects in Noosa (card-with-bleed)

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Recent work in Noosa                                       │
│                                                                          │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐             │
│  │                │  │                │  │                │             │
│  │  [photo bleed] │  │  [photo bleed] │  │  [photo bleed] │             │
│  │                │  │                │  │                │             │
│  │  Rental repaint│  │  Boutique      │  │  Pre-sale      │             │
│  │  Noosaville    │  │  Sunshine      │  │  Noosa         │             │
│  │  apartment     │  │  Beach (cross- │  │  hinterland    │             │
│  │                │  │  link)         │  │                │             │
│  │  View case →   │  │  View case →   │  │  View case →   │             │
│  └────────────────┘  └────────────────┘  └────────────────┘             │
└──────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Card-with-bleed**.
- 2–3 case study cards. If only 1 real Noosa case study exists at launch, omit this section rather than ship card placeholders. The Boutique case study from Sunshine Beach can fill a slot with explicit "nearby project" framing — useful because Sunshine Beach is the adjacent suburb and Noosa-Sunshine-Beach buyers overlap.
- Each card links to `/projects/[slug]`.

---

## 8. Nearby suburbs

```
┌──────────────────────────────────────────────────────────────────────────┐
│   Nearby suburbs we paint                                                │
│                                                                          │
│   Sunshine Beach  →    Peregian  →    Coolum  →    Buderim  →           │
└──────────────────────────────────────────────────────────────────────────┘
```

- Horizontal row of 4 chip-style links (text + arrow, no pill shapes).
- These are the geographically nearest suburb hubs per `docs/seo/topic-clusters.md` internal linking rules ("2 nearest neighbouring suburb hubs").
- Noosa's nearest 4: Sunshine Beach, Peregian, Coolum, Buderim (Buderim is technically further but is the highest-traffic hub and Noosa-Buderim cross-traffic is common — confirmed via Phase 1 GSC data).
- Each link: Fraunces `text-lg`, navy, hover green underline. Click → `/locations/[suburb]`.

---

## 9. FAQ block

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Common questions                                           │
│   What Noosa homeowners ask before booking.                              │
│                                                                          │
│   Do you paint character Queenslanders in Noosa?              [+]        │
│   What product system holds up against Noosa salt air?        [+]        │
│   How much does it cost to paint a Noosa home?                [+]        │
│   Can you work around tourist season bookings?                [+]        │
│   Do you do limewash or specialty coastal finishes?           [+]        │
└──────────────────────────────────────────────────────────────────────────┘
```

- Same FAQ component as service page.
- 5 suburb-specific questions. Per `docs/seo/local-seo.md` anti-doorway rules, each suburb hub has unique FAQ entries — these questions cannot be reused on other suburb hubs.
- `FAQPage` schema mandatory.

### Noosa FAQ inventory (questions only — answers written in Phase 4)

1. Do you paint character Queenslanders in Noosa?
2. What product system holds up against Noosa salt air?
3. How much does it cost to paint a Noosa home?
4. Can you work around tourist season bookings?
5. Do you do limewash or specialty coastal finishes?

Each answer ≤ 80 words, plain language, locally specific. Generic answers fail the swap test and must be rewritten.

---

## 10. Quote form CTA

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│             [full-bleed photo — Noosa exterior or coastal                │
│              brushwork detail]                                           │
│                                                                          │
│             [navy gradient overlay 70%, cream text on top]               │
│                                                                          │
│             Get a quote for your Noosa home                              │
│                                                                          │
│             Address, beds, scope. We reply within one business day.      │
│                                                                          │
│             [Open the quote form]   [Call 0403 571 616]                  │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

- Same pattern as the service page final CTA.
- H2 references the suburb literally for SEO + buyer recall.
- Quote form auto-tags lead as `suburb: Noosa` in addition to the service type field — useful for routing leads to the right team member.

---

## Suburb variant sub-template

Variant pages (`/locations/noosa/exterior`, `/locations/noosa/house-painter`, etc.) inherit a shorter sub-template:

```
1.  Sticky header
2.  Breadcrumb (Home / Locations / Noosa / Exterior)
3.  Hero (smaller — 60vh — single-purpose photo, H1 "Exterior painters Noosa")
4.  Unique opening paragraph (suburb + service-specific local conditions)
5.  Scope details (what's included for this service in this suburb)
6.  One related project example
7.  FAQ block (1–2 unique questions, FAQ schema)
8.  Single CTA (service- and suburb-tagged)
9.  Internal links: parent suburb hub + matching priority service + 1 adjacent suburb's same variant
10. Footer
```

- Variant pages are shorter (500–800 words per `docs/seo/strategy.md`).
- Schema: `LocalBusiness` (Noosa areaServed) + `Service` (this specific service scoped to this suburb) + `FAQPage` + `BreadcrumbList`.
- Primary keyword example: `exterior painter Noosa` (H1 + title + meta).
- Each variant unique opening paragraph + project reference + FAQ entry — non-negotiable. Variants that can't hit unique-content gate get canonicalised or 301'd to the parent hub instead of shipping thin.

## SEO + schema slots summary

| Section | Schema | Notes |
|---|---|---|
| Page-level `<head>` | `LocalBusiness` (areaServed: Noosa) + `BreadcrumbList` + parent organization reference | Per `docs/seo/local-seo.md#suburb-hub-localbusiness-override` |
| Section 5 services bento | Each tile links to `/services/[priority-service]` | No per-tile schema |
| Section 7 projects | Links to `/projects/[slug]` | Case study pages carry own schema |
| Section 9 FAQ | `FAQPage` JSON-LD | Mandatory, suburb-specific questions only |
| Footer | Site-wide | Same as home and service pages |

## Internal link inventory (Noosa hub outgoing)

Counted from the wireframe:

- All 4 priority service pages: section 5 bento (×4) + header mega menu
- All 4 Noosa variant pages: section 6 strip (×4)
- 4 nearby suburb hubs: section 8 row (Sunshine Beach, Peregian, Coolum, Buderim)
- 2–3 project case studies: section 7
- Footer: full sitemap (12 suburbs + all services)

Total outgoing internal links: ~20, well above hub minimum of 10 per `docs/seo/topic-clusters.md` link weight rules.

## Mobile reflow notes

- Hero: H1 stays 3 lines (already short). CTAs stack.
- Section 4 intro: collapses to single column.
- Section 5 bento: 1 column, Boutique tile stays first.
- Section 6 variants: 2×2 grid (4 cards in 2 columns).
- Section 7 projects: snap-x carousel.
- Section 8 nearby: horizontal scroll if 4 chips overflow.
- Section 9 FAQ: no change (each question is its own row).
- Section 10 CTA: stacks vertically.
