# Home — wireframe spec

Route: `/`
Template: Homepage (one-off)
Primary keyword: `painters Sunshine Coast`
Reference: [`docs/seo/site-structure.md`](../seo/site-structure.md#home) for keyword + schema details.

## Page-level rules

- Exactly one `<h1>` in the hero.
- All headings use Fraunces; body uses Inter (per Phase 1 brand tokens).
- 1280px max content width; full-bleed sections break out.
- Two image patterns minimum (per `docs/accepted-image.md`). This page uses five: full-bleed hero, asymmetric bento, card-with-bleed (projects carousel), collage/overlap (testimonials), full-bleed CTA band.
- Schema in `<head>`: `LocalBusiness` + `Organization` + `WebSite` with `SearchAction`.
- LCP target: hero image, preloaded.

## Vertical section order

```
1.  Sticky header
2.  Hero (full-bleed photo, H1, primary CTA)
3.  Trust rail (band immediately under hero)
4.  Four-service bento grid
5.  Why J. James (4 pillars)
6.  Featured projects carousel
7.  How it works (3 steps)
8.  Testimonials collage
9.  Suburbs we serve (map + chip list)
10. Final CTA band (full-bleed photo)
11. Footer
```

---

## 1. Sticky header

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  J.James            About  Services▾  Projects  Locations  For Agents  Contact│
│  painting contractors                                                          │
│                                                  • 0403 571 616 [Get a quote] │
└────────────────────────────────────────────────────────────────────────────────┘
```

- Background: `cream-cool` at 80% opacity + backdrop-blur. 1px navy/10 bottom border.
- Sticky on scroll. Persistent throughout the site.
- Left: wordmark — Fraunces semibold "J.James" + Inter uppercase tracking-wide "painting contractors" beneath. Click → `/`.
- Center nav (desktop ≥ md): 6 links. Hover state = navy → green underline animating in via `transform: scaleX`. Focus-visible = green outline.
- Services link has a chevron-down indicator; opens a mega-menu on hover/focus (see Mega menu below).
- Right cluster: phone link with small green dot accent + green primary CTA "Get a quote".
- Mobile: nav collapses behind a hamburger; phone + CTA stay visible.

### Mega menu (Services hover)

```
┌─────────────────────────────────────────────────────────────────┐
│  Priority services                  All services                │
│  ───────────────────                ───────────                  │
│  ▸ Rental property repaint          Residential                  │
│  ▸ House pre-sale painting          Commercial                   │
│  ▸ New home painting                Industrial                   │
│  ▸ Boutique house painting          Interior                     │
│                                     Exterior                     │
│                                     Body corporate               │
│                                     Specialty coatings           │
│                                     Lead & asbestos removal      │
└─────────────────────────────────────────────────────────────────┘
```

- 2-column dropdown, ≤640px wide.
- Priority list has a small green left-edge accent on each item — not a pill badge. Use a 2px vertical green rule on hover.
- All-services column is denser and less emphasised.

---

## 2. Hero

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                    [full-bleed photograph — coastal Queenslander]            │
│                                                                              │
│  SUNSHINE COAST PAINTING SINCE 1985                                          │
│                                                                              │
│  Painted to sell.                                                            │
│  Painted to last.                                                            │
│                                                                              │
│  Family-run painters serving Noosa, Buderim, Caloundra,                      │
│  Sunshine Beach, Maleny and the wider Sunshine Coast.                        │
│  Rental repaints, pre-sale prep, new-home refreshes,                         │
│  and boutique residential work.                                              │
│                                                                              │
│  [Get a free quote]   • 0403 571 616                                         │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Full-bleed break** (per `accepted-image.md`).
- Height: `min(90vh, 820px)` on desktop, `min(85vh, 720px)` on mobile.
- Background image: real Sunshine Coast project photo (drone exterior, mid-afternoon coastal light). Pre-launch: client-supplied highest-quality image. Phase 4: replace with shoot-day asset. Next.js `<Image>` with `priority`, `sizes="100vw"`.
- Overlay: linear-gradient from `cream/0.85` at left to `cream/0.25` at right — keeps text legible while letting the photo breathe on the right. Plus a 1% SVG noise multiply layer.
- Content alignment: left, max-width 700px, starts ~120px from top of hero on desktop / ~80px mobile.
- Eyebrow: `text-sm font-medium uppercase tracking-[0.22em] text-ink-muted`. Above a thin 24px green accent rule (`h-px w-6 bg-green`).
- H1: Fraunces, `font-medium`, `text-6xl md:text-8xl`, `leading-[0.95]`, `tracking-[-0.035em]`, color `navy`. Two visual lines via explicit `<br />`.
- Subhead: Inter, `text-lg md:text-xl`, `leading-relaxed`, color `ink-soft`, max-width 540px.
- Primary CTA: green button, `h-12 px-7`, label "Get a free quote", subtle navy-tinted shadow. On click → opens the quote form (in-page section anchor `#quote` on Phase 3 build, full quote-form modal in Phase 4 once the multi-step form ships).
- Secondary CTA: outlined "0403 571 616" with a green dot accent and a small phone-icon (lucide `Phone` size 16).
- Mobile: H1 reflows from 2 to 2 lines (still). CTAs stack vertically.

---

## 3. Trust rail

```
─────────────────────────────────────────────────────────────────────────────────
  Since 1985 /  Family-run, locally owned /  Fully insured  /
  Dulux + Taubmans accredited  /  Lead & asbestos qualified
─────────────────────────────────────────────────────────────────────────────────
```

- Single-row band, `bg-cream-cool` with 1px navy/10 top + bottom borders.
- Padding `py-5 md:py-6`.
- Centered horizontally, items separated by faint navy slashes (`text-navy/30`).
- Item text: Inter, `text-sm text-ink-muted` with the lead-in `Since 1985` in `font-medium text-navy`.
- Wraps to 2 lines on mobile.
- Schema relevance: this is a `LocalBusiness` foundedDate signal — make sure "Since 1985" string also appears in the LocalBusiness JSON-LD `foundingDate: "1985"`.

---

## 4. Four-service bento grid

```
┌──────────────────────────────────────────────────────────────────────────┐
│    [eyebrow]    What we do best                                          │
│    Four specialties, four conversations.                                 │
│                                                                          │
│  ┌─────────────────────────────────┐  ┌────────────────────────────┐    │
│  │                                 │  │                            │    │
│  │   [project photo]               │  │  [project photo]           │    │
│  │   Boutique house painting       │  │  Rental property repaint   │    │
│  │   Architectural, heritage,      │  │  Repaint between tenants.  │    │
│  │   and coastal premium homes.  →│  │  Re-let faster.          → │    │
│  │                                 │  │                            │    │
│  │   (large tile — 2 cols, 2 rows)│  └────────────────────────────┘    │
│  │                                 │  ┌────────────────────────────┐    │
│  │                                 │  │  [project photo]           │    │
│  │                                 │  │  House pre-sale painting   │    │
│  │                                 │  │  Painted ready for         │    │
│  │                                 │  │  inspection in days.    →  │    │
│  └─────────────────────────────────┘  └────────────────────────────┘    │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  [project photo]                                                 │   │
│  │  New home painting                                                │   │
│  │  Paint it before you move in.                              →     │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Bento grid** (per `accepted-image.md`).
- Desktop: 3-column CSS grid, asymmetric. Boutique tile spans `col-span-2 row-span-2` (the largest cell); Rental + Pre-Sale stack on the right (`col-span-1 row-span-1` each); New Home spans the full width below (`col-span-3 row-span-1`).
- Mobile: stacks 1-column, Boutique stays first to lead with the highest-value visual.
- Tile structure: real project photo background, dark navy → transparent gradient overlay covering the bottom 50% of the tile, content (serif title, 1-line description, arrow icon) sitting at bottom-left of the tile, cream text.
- Title: Fraunces, `text-2xl md:text-3xl font-medium tracking-tight`.
- Description: Inter, `text-sm md:text-base text-cream/80`.
- Arrow: `ArrowUpRight` from lucide-react, `size={18}`, positioned bottom-right of the tile, transitions to `translate-x-1 translate-y-[-2px]` on hover.
- Whole tile is the clickable link with focus-visible green outline at 3px.
- Eyebrow above the grid: same pattern as hero eyebrow (uppercase tracking + thin green accent rule).
- Section H2: Fraunces, `text-4xl md:text-5xl font-medium`, `tracking-[-0.025em]`, color navy, max-width 600px.

### Schema slot

- Each tile links to `/services/[priority-service]`.
- Each priority service page carries its own `Service` schema (see Pre-Sale spec).
- Grid does NOT carry an ItemList schema — keep the markup semantic but unschematised; the four service pages each carry their own discoverable schema.

---

## 5. Why J. James (4 pillars)

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Why us                                                     │
│   Forty years on the Sunshine Coast.                                     │
│                                                                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐         │
│  │   [icon]   │  │   [icon]   │  │   [icon]   │  │   [icon]   │         │
│  │            │  │            │  │            │  │            │         │
│  │  40 years  │  │  Fully     │  │  Premium   │  │  Detail-   │         │
│  │  in trade  │  │  qualified │  │  brand     │  │  led       │         │
│  │            │  │            │  │  partners  │  │  finish    │         │
│  │            │  │            │  │            │  │            │         │
│  │  body…     │  │  body…     │  │  body…     │  │  body…     │         │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘         │
└──────────────────────────────────────────────────────────────────────────┘
```

- 4-column grid on desktop, 2×2 on tablet, stacked on mobile.
- Each card: `bg-cream-cool`, navy/10 border, rounded-md, padding `p-7`.
- Icon: 32×32, navy stroke (lucide-react). Suggested choices: `Clock` for 40 years, `ShieldCheck` for qualifications, `Award` for brand partners, `Sparkles` for detail-led finish.
- Title (H3): Fraunces, `text-xl font-medium`.
- Body: Inter, `text-sm text-ink-muted leading-relaxed`.
- No hover lift (these aren't links). Subtle border darken on group-hover only if needed for visual interest.

### Pillar copy (placeholder, Phase 4 finalises)

- **40 years in trade** — Established 1985. Family business under the same name and most of the same team. Sunshine Coast homes are what we know.
- **Fully qualified** — QBCC licensed and insured. Lead-based paint and asbestos removal qualifications. Real safety documentation on every job.
- **Premium brand partners** — Dulux Accredited Painter and Taubmans Endorsed. Long-standing relationships with builders and trades across the Coast.
- **Detail-led finish** — Boutique-grade prep and finish across every job, not just the boutique ones. The reason the same clients call us back.

(All four copy stubs above must pass `copywriting/anti-slop-kill-list.md` checks in Phase 4. No em-dashes have been used in this stub.)

### Image pattern

- No images on this section. The icons provide visual interest. The next section (Featured projects) brings the imagery rhythm back.

---

## 6. Featured projects carousel

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Recent work                                                │
│   Sunshine Coast homes we've painted lately.                             │
│                                                                          │
│   ◀  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ▶          │
│      │  [photo] │  │  [photo] │  │  [photo] │  │  [photo] │             │
│      │          │  │          │  │          │  │          │             │
│      │  Suburb  │  │  Suburb  │  │  Suburb  │  │  Suburb  │             │
│      │  Scope   │  │  Scope   │  │  Scope   │  │  Scope   │             │
│      │  → View  │  │  → View  │  │  → View  │  │  → View  │             │
│      └──────────┘  └──────────┘  └──────────┘  └──────────┘             │
│                                                                          │
│                       [ View all projects → ]                            │
└──────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Card-with-bleed** (per `accepted-image.md`).
- Horizontal scrolling carousel. CSS scroll-snap-x. Visible items: 3–4 desktop, 1.4 mobile (peek of the next card to signal scrollability).
- Each card: project photo at 4:5 ratio, breaking 8px past the card's bottom edge with shadow separation. Below the photo: suburb (small uppercase tracking-wider), scope (Fraunces `text-xl`), arrow link "View case study".
- Cards link to `/projects/[slug]`.
- Arrows on either end of the carousel: round 44×44 navy/10 border, navy chevron icon, focus-visible green outline.
- Bottom of section: outlined "View all projects" link to `/projects`.

### Launch project set (per `docs/seo/content-calendar.md`)

Show 6–8 of the launch case studies. Priority order:
1. Boutique Sunshine Beach (Architectural coastal)
2. Pre-Sale Caloundra (14-day vendor refresh)
3. Rental Noosa (between-tenancy turnaround)
4. Boutique Maleny Queenslander
5. New Home Aura (empty-house full repaint)
6. Pre-Sale Sunshine Beach (premium vendor)
7. Rental Buderim (multi-property portfolio)
8. New Home Buderim hinterland (first-home buyer + colour consult)

If real photography isn't ready for a specific case study at launch, omit that card from the carousel rather than ship a placeholder.

---

## 7. How it works (3 steps)

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   How we work                                                │
│   Three steps from kerb to keys.                                         │
│                                                                          │
│  ┌────────────────┐    ┌────────────────┐    ┌────────────────┐         │
│  │ 01             │    │ 02             │    │ 03             │         │
│  │                │    │                │    │                │         │
│  │ We come and    │    │ We schedule    │    │ We paint, you  │         │
│  │ quote          │    │ around you     │    │ sign off       │         │
│  │                │    │                │    │                │         │
│  │ body copy…     │    │ body copy…     │    │ body copy…     │         │
│  └────────────────┘    └────────────────┘    └────────────────┘         │
└──────────────────────────────────────────────────────────────────────────┘
```

- 3-column desktop, stacked on mobile.
- Big serif numerals in navy (`Fraunces`, `text-7xl font-medium leading-none`).
- Thin green horizontal accent rule between numeral and title.
- Title (H3): Fraunces, `text-2xl font-medium`.
- Body: Inter, `text-base text-ink-soft leading-relaxed`.
- Each step is text-only (no images) — visual rhythm comes from the numerals.
- Background variant: this section sits on `bg-cream-cool` to break the page rhythm between two cream sections.

---

## 8. Testimonials collage

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   What clients say                                           │
│   Real reviews, real homes.                                              │
│                                                                          │
│      ┌──────────────────┐                                                │
│      │  [project photo] │                                                │
│      │                  │   ┌──────────────────┐                         │
│      │  "Jamie's team   │   │  [project photo] │                         │
│      │   painted our    │   │                  │                         │
│      │   listing in     │   │  "We painted the │ ┌──────────────────┐  │
│      │   four days."    │   │   rental between │ │  [project photo] │  │
│      │                  │   │   tenants in 3   │ │                  │  │
│      │   ─ Sarah, Noosa │   │   days."         │ │  "Heritage cottage│  │
│      │                  │   │                  │ │   repaint, done   │  │
│      │                  │   │   ─ Mark, PM     │ │   the right way." │  │
│      └──────────────────┘   │     Buderim      │ │                   │  │
│                             └──────────────────┘ │  ─ Anna, Maleny   │  │
│                                                  └───────────────────┘  │
└──────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Collage/overlap** (per `accepted-image.md`).
- 3 cards arranged at slight rotational offsets (~ ±2°) with overlapping edges, shadow separation between layers.
- Each card: project photo at top (4:5 ratio), then Fraunces italic quote `text-lg md:text-xl`, then attribution (named client + suburb + scope) in small uppercase tracking-wider.
- Quote anchor: the testimonials must be real with name + suburb consent (per `docs/seo/local-seo.md`). No anonymous or invented quotes.
- Schema slot: `Review` schema on each — referenced by the LocalBusiness `aggregateRating` block at the page level.
- Mobile: cards stack vertically, rotation removed (1 column, full-width).

### Bottom of section

- "See all reviews →" link to `/testimonials`.
- Below: a thin row showing Google Reviews aggregate rating (star count + total count + linked logo). Pulled live via Google Reviews API in Phase 4 where possible.

---

## 9. Suburbs we serve

```
┌──────────────────────────────────────────────────────────────────────────┐
│   [eyebrow]   Service area                                               │
│   We paint across the Sunshine Coast.                                    │
│                                                                          │
│  ┌────────────────────────────┐   Suburbs we serve                       │
│  │                            │                                           │
│  │   [outlined SVG map of     │   • Buderim                              │
│  │    Sunshine Coast region   │   • Caloundra                            │
│  │    with 12 pin markers]    │   • Coolum                               │
│  │                            │   • Forest Glen                          │
│  │                            │   • Glasshouse Mountains                 │
│  │                            │   • Kawana                               │
│  │                            │   • Maleny                               │
│  │                            │   • Noosa                                │
│  │                            │   • Peregian                             │
│  │                            │   • Sippy Downs                          │
│  │                            │   • Sunshine Beach                       │
│  │                            │   • Sunshine Coast (region)              │
│  │                            │                                           │
│  │     Don't see yours? Call. │                                           │
│  └────────────────────────────┘                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

- Two-column layout on desktop: outlined SVG map on the left, alphabetical suburb chip list on the right.
- Map: hand-drawn outline of the Sunshine Coast coastline + hinterland with 12 small navy pins, one per suburb. Hovering a pin highlights its corresponding suburb name in the chip list.
- Suburb chips: text-only, not pill-shaped. Each is an underlined link in Fraunces `text-lg`, navy. On hover: green underline, slight `translate-x-0.5`. Click → `/locations/[suburb]`.
- The map is decorative + functional. Lazy-load to keep LCP fast (the hero photo wins LCP).
- Mobile: map collapses to a single horizontal scroll image with pin labels; chip list stacks below.

### Bottom

- "Don't see your suburb? Call **0403 571 616**." (Catch-all line — keeps the page open to nearby suburbs without making 12 promises into 20.)

---

## 10. Final CTA band

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│             [full-bleed photo — interior brush detail or                 │
│              exterior in-progress shot with depth of field]              │
│                                                                          │
│             [navy gradient overlay, cream text on top]                   │
│                                                                          │
│             Ready for a quote?                                           │
│                                                                          │
│             We reply within one business day.                            │
│                                                                          │
│             [Get a free quote]   [Call 0403 571 616]                     │
│                                                                          │
│             For agents and property managers →                          │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

- Image pattern: **Full-bleed break** (the page's second use of this pattern, balancing the hero).
- Full-bleed real project photo. Navy → navy-deep linear gradient overlay at 70% opacity (per `CLAUDE.md` rule: no CTA banners without a background image).
- H2: Fraunces, `text-4xl md:text-6xl`, cream.
- Subhead: Inter, `text-lg`, cream/80.
- Primary green CTA + outlined cream CTA (call). Phone link triggers `tel:`.
- Below: "For agents and property managers →" link to `/for-agents`. Small, sky-coloured.
- This section is the page's last conversion opportunity — keep it tight, no copy beyond the H2 + subhead + CTAs + agent link.

---

## 11. Footer

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [navy background, cream text]                                           │
│                                                                          │
│  J.James                  Services            Locations       Company   │
│  painting contractors     Rental repaint      Buderim         About     │
│                           Pre-Sale            Caloundra       Projects  │
│  Sunshine Coast painters  New home            Coolum          Reviews   │
│  since 1985.              Boutique            Forest Glen     For Agents│
│                           Residential         Glasshouse Mt.  Blog      │
│  ABN [TBC]                Commercial          Kawana          Contact   │
│  QBCC [TBC]               Industrial          Maleny                    │
│                           Interior            Noosa           Legal     │
│  0403 571 616             Exterior            Peregian        Privacy   │
│  [email TBC]              Body corporate      Sippy Downs     Sitemap   │
│                           Specialty           Sunshine Beach            │
│  Mon–Fri 7:00–17:00       Lead & asbestos                               │
│  Sat 8:00–13:00                                                          │
│                                                                          │
│  [Facebook] [Instagram]   [Dulux Accredited]  [Taubmans Endorsed]       │
│                                                                          │
│  ────────────────────────────────────────────────────────────           │
│  © 2026 J. James Painting Contractors. All rights reserved.             │
└──────────────────────────────────────────────────────────────────────────┘
```

- Background `bg-navy`, text `text-cream`.
- 4 columns on desktop (wordmark + contact, Services, Locations, Company), stacks 2-col on tablet, 1-col on mobile.
- Wordmark column carries full NAP (per `docs/seo/local-seo.md` — NAP appears identically on every page).
- Locations column lists all 12 suburbs, each linking to its hub.
- Brand-partner logos at bottom — only ship these once entitlement is confirmed (open item from Phase 1).
- Social icons: lucide `Facebook`, `Instagram`. Only ship icons that link to verified live profiles.
- Sub-footer line: copyright + year.

---

## Mobile reflow notes

- Hero: H1 stays 2 lines via explicit `<br />`. CTAs stack. Background image shifts to a portrait-oriented crop via `<picture>` + `<source media>`.
- Bento grid: collapses to 1 column. Order: Boutique → Pre-Sale → Rental → New Home (highest-value visual first).
- Why J. James: 4 → 2 → 1 columns at breakpoints `md` / `sm`.
- Featured projects: 1.4 cards visible (snap-x peek).
- Testimonials: cards stack, lose rotation.
- Suburbs map: collapses; chip list becomes the primary navigation surface.
- Footer: 4 → 2 → 1 column.
- Sticky header retains phone + green CTA at all viewports.

## SEO + schema slots summary

| Section | Schema | Notes |
|---|---|---|
| Page-level `<head>` | `LocalBusiness`, `Organization`, `WebSite` + `SearchAction` | Per `docs/seo/local-seo.md` JSON-LD template. |
| Hero | H1 only | Primary keyword in H1 ("Painted to sell. Painted to last." is the hook; the keyword "Sunshine Coast painting since 1985" sits in the eyebrow + immediate subhead). Keyword density target 1–1.5% across body. |
| Bento grid | Each tile uses semantic `<article>` linking out; no per-tile schema | Schema lives on the linked service pages. |
| Testimonials | `Review` schema per card, `AggregateRating` referenced on `LocalBusiness` | Live Google Reviews API pull where possible. |
| Suburbs | Each chip is a direct internal link | All 12 suburb hubs reachable in 1 click from home (per `docs/seo/topic-clusters.md`). |
| Footer | Sitewide links to all 4 priority services + 12 suburbs + For Agents + Projects + Contact | Satisfies "no orphan pages" rule. |

## Internal link inventory (Home outgoing)

Counted from the wireframe:

- All 4 priority service pages: hero CTA, bento grid (×4 explicit tiles), header mega menu, final CTA band link, footer column.
- All 12 suburb hubs: suburbs section chip list, footer column.
- Projects gallery + 6–8 individual case study pages.
- About, For Agents, Testimonials, Contact, Blog: header + footer.
- Quote form anchor (`#quote` or `/contact#quote`): hero, final CTA band.

Total outgoing internal links: ~50, well above the no-orphan threshold.
