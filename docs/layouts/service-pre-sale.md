# House Pre-Sale Painting — wireframe spec

Route: `/services/house-pre-sale-painting`
Template: Priority service template (shared by all 4 priority services with content variation)
Primary keyword: `pre-sale house painter Sunshine Coast`
Reference: [`docs/seo/site-structure.md`](../seo/site-structure.md#priority-service-2-house-pre-sale-painting), [`docs/seo/topic-clusters.md`](../seo/topic-clusters.md#cluster-2-house-pre-sale-painting)

## Page-level rules

- Exactly one `<h1>` in the hero.
- Minimum 1,200 words of body copy (per `docs/seo/strategy.md`).
- Two image patterns minimum. This page uses four: full-bleed hero, staggered/offset (process), before/after split (transformations), card-with-bleed (related work).
- Schema in `<head>`: `Service` referencing parent `LocalBusiness`, `FAQPage` on FAQ block, `BreadcrumbList`.
- LCP target: hero image, preloaded.
- Header + footer identical to [`home.md`](home.md) (sticky header sections 1, footer section 11).

## Template variations (for the other 3 priority service pages)

This same template structure carries to:

- `/services/rental-property-repaint` — content variation (different hero photo, copy stubs reference landlord/PM audience, before/after replaces with "between-tenancy turnaround" angle, FAQ swaps to rental questions).
- `/services/new-home-purchase-painting` — content variation (settlement-to-keys timeline replaces the agent coordination angle).
- `/services/boutique-house-painting` — content variation + editorial treatment (heavier collage/overlap, larger typography, less copy, parallax accent on hero; see notes at end of doc).

## Vertical section order

```
1.  Sticky header (shared)
2.  Breadcrumb
3.  Hero (full-bleed photo, H1, audience hook, primary CTA)
4.  Two-column intro (audience + outcome)
5.  ROI block ("Why a pre-sale repaint pays for itself")
6.  Process timeline (staggered/offset, 4 steps)
7.  Before / after split section
8.  Agent partner cross-link block (this is the page's strongest bridge)
9.  Colour palette block ("Agent-recommended palettes")
10. Project examples (card-with-bleed, 3 cards)
11. FAQ block (FAQ schema)
12. Quote form CTA (service-tagged)
13. Related services + related blog posts
14. Footer (shared)
```

---

## 2. Breadcrumb

```
  Home  /  Services  /  House Pre-Sale Painting
```

- Small uppercase tracking-wide text, `text-xs text-ink-muted`.
- Sits in a thin band directly under the sticky header, padding `py-3`.
- Last item (current page) not linked, slightly stronger weight.
- Schema: `BreadcrumbList` JSON-LD generated automatically.

---

## 3. Hero

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│             [full-bleed photo — recently repainted exterior staged           │
│              for a real estate listing photo, late afternoon light]          │
│                                                                              │
│  HOUSE PRE-SALE PAINTING                                                     │
│                                                                              │
│  Painted to sell. Ready for                                                  │
│  inspection in days, not weeks.                                              │
│                                                                              │
│  For vendors with a listing date and an agent who wants                      │
│  the photos to land. Neutral palettes that broaden buyer                     │
│  appeal. Tight scheduling around stylists and inspections.                   │
│                                                                              │
│  [Get a pre-sale quote]   • 0403 571 616                                     │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Full-bleed break**.
- Height: `min(80vh, 720px)` (slightly shorter than home hero — service pages need more room for body content above the fold).
- Eyebrow: "HOUSE PRE-SALE PAINTING" — uppercase tracking-wider, green accent rule above.
- H1: Fraunces, `text-5xl md:text-7xl font-medium leading-[0.95] tracking-[-0.035em]`, navy. Two lines.
- Subhead: Inter, `text-lg md:text-xl text-ink-soft leading-relaxed`, max-width 580px.
- Primary CTA: green "Get a pre-sale quote" (service-specific label — auto-tags the lead as Pre-Sale on submission).
- Secondary CTA: outlined phone link.
- Background image: real Sunshine Coast vendor home, exterior preferred (drone if available). Use the published case study photo set from Phase 4 once the photo shoot day is done. Pre-shoot fallback: best client-supplied vendor project.

---

## 4. Two-column intro (audience + outcome)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   For vendors and agents who              A fresh coat is one of the     │
│   are getting a home ready                highest-return improvements    │
│   for the market.                         a vendor can make before       │
│                                           listing. Neutral palettes      │
│   Selling in 30–90 days.                  photograph well, broaden       │
│   Photos in two weeks.                    buyer appeal, and signal a     │
│   Inspections starting soon.              well-maintained home from      │
│                                           the kerb.                      │
│   We've painted Sunshine Coast            On the right schedule, the     │
│   homes between contract                  paint job pays for itself      │
│   and listing for over 40                 in the sale price.             │
│   years.                                                                 │
└──────────────────────────────────────────────────────────────────────────┘
```

- 2-column grid on desktop, single column on mobile.
- Left column: audience framing. Fraunces serif H2 `text-3xl md:text-4xl font-medium`, body in Inter `text-base text-ink-soft leading-relaxed`. Tone: empathetic, plain-spoken.
- Right column: outcome framing. Similar typography but slightly tighter line lengths.
- Background: `cream-cool`.
- 1px green vertical rule between columns on desktop (use a subtle `border-l border-green/30`).

---

## 5. ROI block

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Why a pre-sale paint pays                                  │
│   Three numbers vendors should know.                                     │
│                                                                          │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐               │
│  │              │    │              │    │              │               │
│  │  Highest     │    │  Fewer days  │    │  Stronger    │               │
│  │  ROI cosmetic│    │  on market   │    │  first       │               │
│  │  improvement │    │  for         │    │  listing     │               │
│  │  per real    │    │  market-     │    │  photos      │               │
│  │  estate      │    │  ready       │    │              │               │
│  │  research    │    │  homes       │    │              │               │
│  │              │    │              │    │              │               │
│  │  body…       │    │  body…       │    │  body…       │               │
│  └──────────────┘    └──────────────┘    └──────────────┘               │
└──────────────────────────────────────────────────────────────────────────┘
```

- 3 columns desktop, stacked mobile.
- Each card: `bg-cream`, navy/10 border, `p-7 rounded-md`.
- Card title (H3): Fraunces, `text-xl md:text-2xl font-medium tracking-tight`, navy.
- Body: Inter, `text-sm text-ink-soft leading-relaxed`.
- No emojis. No fabricated specifics — the body copy must reference verifiable sources or stay qualitative (per `copywriting/anti-slop-kill-list.md`'s "Specificity Tells" rule). If a real percentage is cited, it must trace to a named real estate body or study.
- Card hover: subtle border darken from navy/10 → navy/25.

---

## 6. Process timeline (staggered/offset)

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   How it works                                               │
│   Four steps from quote to listing.                                      │
│                                                                          │
│  01  ┌──────────────────────┐                                            │
│  └──┤  Quote within 24      │   [photo of Jamie at a kerb, clipboard]   │
│     │  hours of your call.  │                                            │
│     │  Quick site visit,    │                                            │
│     │  honest scope,        │                                            │
│     │  transparent pricing. │                                            │
│     └──────────────────────┘                                             │
│                                                                          │
│                                       02  ┌──────────────────────┐      │
│              [photo of paint can,         │  Scheduled around    │      │
│               brand-partner Dulux logo]   │  your listing date.  │──┘   │
│                                           │  We block windows     │      │
│                                           │  that fit your        │      │
│                                           │  agent's calendar.    │      │
│                                           └──────────────────────┘      │
│                                                                          │
│  03  ┌──────────────────────┐                                            │
│  └──┤  Paint in 3–7 days.   │   [photo of a wall mid-roll,              │
│     │  Most pre-sale jobs   │    drop sheets and tradesman]              │
│     │  finish inside a      │                                            │
│     │  single week. Faster  │                                            │
│     │  for partial scopes.  │                                            │
│     └──────────────────────┘                                             │
│                                                                          │
│                                       04  ┌──────────────────────┐      │
│              [photo of finished           │  Walkthrough before  │      │
│               interior, styled for        │  photo day. Touch-   │      │
│               listing photos]             │  ups before stylists │      │
│                                           │  arrive.             │──┘   │
│                                           └──────────────────────┘      │
└──────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Staggered/offset**.
- Each row: step number in giant serif (Fraunces `text-7xl` navy), title (H3), 2-line description, paired with a real project photo that bleeds slightly past the column edge on alternating sides.
- Odd steps (01, 03): text on the left, photo on the right.
- Even steps (02, 04): photo on the left, text on the right.
- Spacing between steps: `py-12`.
- Mobile: collapses to vertical single column, photos sit above their text.

---

## 7. Before / after split

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Recent pre-sale work                                       │
│   Caloundra, 14 days to listing.                                         │
│                                                                          │
│  ┌────────────────────────────┬────────────────────────────┐            │
│  │                            │                            │            │
│  │   [before photo —          │   [after photo —           │            │
│  │    weathered exterior]     │    refreshed exterior]     │            │
│  │                            │                            │            │
│  │   ◀── drag ──▶  (slider)   │                            │            │
│  │                            │                            │            │
│  └────────────────────────────┴────────────────────────────┘            │
│                                                                          │
│  Scope: full exterior repaint, weatherboard restoration,                 │
│  trim and gutter line refresh. Dulux Weathershield system.               │
│  Timeline: 5 working days. Listing photos two days later.                │
│                                                                          │
│  View full case study →                                                  │
└──────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Before/after split**.
- Side-by-side comparison with an optional drag-slider component (CSS clip-path, JS drag handler). MVP: static side-by-side; v1.1 adds the slider.
- Below: scope details in 3-line block, then "View full case study →" link to `/projects/pre-sale-caloundra`.
- Use real photos only. If the launch case study isn't shot yet, omit this section rather than use placeholder/stock before/after.

---

## 8. Agent partner cross-link block

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [navy background, cream text, full-width band]                         │
│                                                                          │
│   For real estate agents and property managers.                          │
│                                                                          │
│   Vendor-paid or agency-arranged invoicing. Before/after                 │
│   photo packs for your owner reports. Direct PM coordination             │
│   when the property's tenanted.                                          │
│                                                                          │
│   [Become a referral partner →]                                          │
│                                                                          │
│   "Jamie's team painted three of our vendor listings                     │
│    this quarter. Each one was ready for photo day on time."             │
│   — [agency name], Noosa                                                 │
└──────────────────────────────────────────────────────────────────────────┘
```

- Background: navy with subtle radial gradient + 1% SVG noise overlay (per `docs/anti-generic-guardrails.md`).
- H2: Fraunces `text-3xl md:text-4xl font-medium`, cream.
- Body: Inter `text-base md:text-lg text-cream/85 leading-relaxed`.
- CTA: outlined cream button "Become a referral partner →" linking to `/for-agents`. On hover: green border, slight `translate-y-[-1px]`.
- Quote: Fraunces italic `text-base text-cream/80`, attribution in small uppercase tracking-wider.
- This is the strongest cluster bridge on the page — Pre-Sale → For-Agents is the highest-conversion B2B funnel per `docs/seo/topic-clusters.md`.

---

## 9. Colour palette block

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Agent-recommended palettes                                 │
│   Neutrals that photograph well.                                         │
│                                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │  swatch  │  │  swatch  │  │  swatch  │  │  swatch  │                 │
│  │          │  │          │  │          │  │          │                 │
│  │  Dulux   │  │  Dulux   │  │  Taubmans│  │  Dulux   │                 │
│  │  Natural │  │  Lexicon │  │  White   │  │  Antique │                 │
│  │  White   │  │  Quarter │  │  Tea     │  │  White   │                 │
│  │  Half    │  │          │  │          │  │          │                 │
│  │          │  │          │  │          │  │          │                 │
│  │  body…   │  │  body…   │  │  body…   │  │  body…   │                 │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘                 │
│                                                                          │
│   Download our Pre-Sale Colour Guide PDF →                               │
└──────────────────────────────────────────────────────────────────────────┘
```

- 4 swatch cards on desktop, 2×2 on tablet, stacked on mobile.
- Each card: square swatch at top showing the actual paint colour (real OKLCH/hex values from Dulux + Taubmans, not approximations), paint name + code, 1-line note on where it works ("works on coastal exteriors", "warm interior neutral", etc.).
- Bottom: link to download the Pre-Sale Colour Guide PDF (lead magnet — gated email capture per `docs/seo/content-calendar.md`).
- Schema relevance: this is a passage-citable block for AI Overviews (per `docs/seo/strategy.md` GEO plan) — keep the swatch captions quotable and short.

### Colour set (placeholder pending client validation)

Final colour codes must be confirmed with the J. James team in Phase 4. Sample/placeholder set:

- Dulux Natural White Half
- Dulux Lexicon Quarter
- Taubmans White Tea
- Dulux Antique White U.S.A.

---

## 10. Project examples (card-with-bleed)

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   More pre-sale projects                                     │
│                                                                          │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐             │
│  │                │  │                │  │                │             │
│  │  [photo bleed] │  │  [photo bleed] │  │  [photo bleed] │             │
│  │                │  │                │  │                │             │
│  │  Caloundra     │  │  Sunshine Beach│  │  Buderim       │             │
│  │  14-day refresh│  │  Premium vendor│  │  Investor sell │             │
│  │  View case →   │  │  View case →   │  │  View case →   │             │
│  └────────────────┘  └────────────────┘  └────────────────┘             │
└──────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Card-with-bleed**.
- 3 cards desktop, horizontal-scroll mobile (snap-x).
- Photos break ~8px past the card's bottom edge with shadow separation.
- Each card links to `/projects/[slug]`.

---

## 11. FAQ block

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Common questions                                           │
│   What vendors ask before booking.                                       │
│                                                                          │
│   How fast can you turn around a pre-sale paint?              [+]        │
│   Do you coordinate with my real estate agent and stylist?    [+]        │
│   How much does a pre-sale repaint typically cost?            [+]        │
│   What colours photograph best for property listings?         [+]        │
│   Can you work around inspection bookings?                    [+]        │
│   What if my listing date moves?                              [+]        │
└──────────────────────────────────────────────────────────────────────────┘
```

- Native HTML `<details><summary>` (accessible by default, no JS needed for basic toggle). Custom styled.
- Question: Fraunces `text-lg md:text-xl font-medium`, navy.
- Answer body: Inter `text-base text-ink-soft leading-relaxed`.
- `[+]` becomes `[−]` on expand. Use lucide `Plus` / `Minus`.
- Vertical rhythm: 1px navy/10 separator between questions.
- Schema: `FAQPage` JSON-LD wraps the questions + answers. Mandatory.

### FAQ inventory (questions only — answers written in Phase 4)

1. How fast can you turn around a pre-sale paint?
2. Do you coordinate with my real estate agent and stylist?
3. How much does a pre-sale repaint typically cost on the Sunshine Coast?
4. What colours photograph best for property listings?
5. Can you work around inspection bookings?
6. What if my listing date moves?

Each answer ≤ 80 words, plain language, citable (per GEO/AI passage-level optimisation in `docs/seo/strategy.md`).

---

## 12. Quote form CTA (service-tagged)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│             [full-bleed photo — interior repaint mid-stage,              │
│              brushwork detail, paint can label visible]                  │
│                                                                          │
│             [navy gradient overlay 70%, cream text on top]               │
│                                                                          │
│             Get a pre-sale quote                                         │
│                                                                          │
│             Address, beds, target listing date.                          │
│             We reply within one business day.                            │
│                                                                          │
│             [Open the quote form]   [Call 0403 571 616]                  │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

- Full-bleed photo + navy gradient overlay (same pattern as home final CTA).
- H2: Fraunces `text-4xl md:text-6xl font-medium`, cream.
- Subhead: Inter `text-lg`, cream/80.
- Primary CTA "Open the quote form" → triggers the multi-step quote form (Phase 3 build) with the service-type field auto-tagged to **Pre-Sale**. The lead enters the inbox tagged as Pre-Sale per `docs/seo/strategy.md`.
- This is the page's primary conversion event; GA4 tracks this as `quote_form_submit_presale`.

---

## 13. Related services + related blog posts

```
┌──────────────────────────────────────────────────────────────────────────┐
│  Related                                                                 │
│                                                                          │
│  Services                                  Reading                       │
│  ▸ Boutique house painting                 ▸ Best neutral paint colours  │
│    For higher-end vendors                    for selling a Sunshine      │
│  ▸ Rental property repaint                   Coast home                  │
│    For investor-vendors selling            ▸ The pre-sale paint refresh  │
│  ▸ Exterior painting                         checklist for real estate   │
│    Pre-sale scope, exterior only             agents                      │
└──────────────────────────────────────────────────────────────────────────┘
```

- 2-column layout: related services on left, related blog posts on right.
- Per `docs/seo/topic-clusters.md`: Pre-Sale cluster bridges to Boutique and Rental clusters. Boutique link uses anchor "For higher-end vendors". Rental link uses anchor "For investor-vendors selling".
- Each link: Fraunces serif title + Inter caption beneath, navy `text-lg`. Hover: green underline.
- Schema: no special schema. These are just contextual internal links satisfying the cluster scorecard (minimum 8 outbound on a pillar page — per `docs/seo/topic-clusters.md` link weight rules).

---

## Boutique template variation note

When this template is used for `/services/boutique-house-painting`, apply these overrides:

- Hero height extends to `min(95vh, 880px)` (cinematic).
- Hero photo is mandatorily a drone exterior of an architectural/coastal-premium home. No interior alternatives at launch.
- Section 5 ROI block: remove. Replace with a "What boutique means here" editorial block (Fraunces `text-3xl md:text-5xl`, generous whitespace).
- Section 6 process timeline: keep staggered/offset, but copy emphasises consultation depth (heritage colour matching, product specification, etc.).
- Section 9 colour palette: keep, but content emphasises bespoke and premium finishes (limewash, lime-render, specialty coatings) rather than agent-friendly neutrals.
- Section 10 project examples: use collage/overlap pattern instead of card-with-bleed for the editorial feel.
- Add a parallax accent image somewhere between sections 7 and 8 (per `accepted-image.md` Parallax/scroll reveal pattern).
- CTA "Open the quote form" relabel to "Book a consultation" (per `docs/seo/strategy.md` audience priority — Boutique uses consultation framing, not quick-quote).

## Rental + New Home variations

Use the base template structure. Variations are content-level only (different hero photo, different audience hook, different process emphasis, different FAQ entries). Schema slots, image patterns, and section count are identical.

## SEO + schema slots summary

| Section | Schema | Notes |
|---|---|---|
| Page-level `<head>` | `Service` (referencing parent `LocalBusiness`), `BreadcrumbList` | Per `docs/seo/local-seo.md` JSON-LD template. |
| Section 11 FAQ | `FAQPage` | Mandatory. Each Q/A pair becomes a `Question` + `Answer` entity. |
| Section 7 Before/after | Schema lives on the linked project case study, not on this page | Card link only. |
| Section 8 agent quote | `Review` if the quote is from a named agency partner with consent | Otherwise just visual quote, no schema. |
| Section 10 projects | Each card links to `/projects/[slug]`; case study pages carry their own schema | |

## Internal link inventory (Pre-Sale outgoing)

- Other 3 priority service pages: section 13 related services (×2) + header mega menu (always present)
- 5 top suburb hubs: footer column + contextual link in section 4 intro copy ("Noosa, Buderim, Sunshine Beach, Caloundra, Maleny")
- 2–3 project case studies: section 7 (Caloundra), section 10 (Sunshine Beach, Buderim)
- 2 related blog posts: section 13
- `/for-agents`: section 8 (primary bridge)
- Pre-Sale Colour Guide PDF: section 9
- Quote form: hero, section 12, sticky header

Total outgoing internal links: ~20, well above the pillar page minimum of 8 per `docs/seo/topic-clusters.md`.

## Mobile reflow notes

- Hero: H1 stays 2 lines via explicit `<br />`. CTAs stack.
- Section 4 intro: collapses to single column, vertical green rule disappears.
- Section 6 process timeline: photos stack above text in single column; alternating-side layout flattens.
- Section 7 before/after: cards stack vertically; the drag-slider degrades to side-by-side static photos.
- Section 8 agent block: H2 stays large but body wraps tighter.
- Section 9 colour palettes: 4 → 2 → 1 column at md/sm.
- Section 10 projects: snap-x carousel (peek of next card).
- Section 11 FAQ: questions remain individually toggleable; no layout change.
- Section 13 related: 2 → 1 column on mobile.
