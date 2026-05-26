# Topic Clusters — J. James Painting

Hub-and-spoke architecture for the four priority services. Defines cluster membership, internal-linking matrix, and content gaps for build + content phases.

For per-page keyword targets see [`site-structure.md`](site-structure.md). For blog topic descriptions see [`content-calendar.md`](content-calendar.md). For phased execution see [`implementation-roadmap.md`](implementation-roadmap.md).

This document is the pre-build cluster plan. Live SERP-overlap validation (counting shared top-10 URLs across keyword pairs to confirm cluster boundaries) is a Phase 1 follow-up via `claude-seo:seo-dataforseo`. The cluster structure here is designed from buyer intent and the brief's positioning, not from live SERP data. If `seo-dataforseo` shows two keywords share 7+ URLs in the top 10, they should be consolidated to a single page — that consolidation gets flagged into this doc and into `site-structure.md` before build.

---

## Cluster architecture summary

Four primary clusters, one for each priority service. Each cluster is a pillar page + spoke content (case studies, blog posts, supporting suburb pages, supporting legacy service pages where they share intent).

```
                       Home + Services index
                         (sitewide nav root)
                                |
        ┌───────────────┬───────┴───────┬───────────────┐
        │               │               │               │
   Cluster 1       Cluster 2       Cluster 3       Cluster 4
   RENTAL          PRE-SALE        NEW HOME        BOUTIQUE
   REPAINT         PAINTING        PURCHASE        PAINTING

           ╲           ╲           ╱           ╱
            ╲           ╲         ╱           ╱
             ╲       For-Agents bridge       ╱
              ╲      (B2B funnel pulls       ╱
               ╲     from Rental + Pre-Sale)╱
                ╲    │                 │   ╱
                 ╲   │                 │  ╱
                  ╲  │   12 Suburb     │ ╱
                   ╲ │   Hubs feed     │╱
                     │ all 4 clusters
                     │
                     │
              Blog + Projects gallery
                     (sitewide
                      content rail)
```

The 12 suburb hubs each pull internal links from all 4 clusters — they're the geographic axis crossing the service-vertical axis. Blog posts and case studies sit inside specific clusters but link laterally between clusters where audiences overlap.

---

## Cluster 1 — Rental Property Repaint

**Pillar page:** `/services/rental-property-repaint`
**Primary keyword:** rental property painter Sunshine Coast
**Audience:** investors, landlords, property managers
**Word count target:** 1,200–1,500 (pillar), 500–800 (suburb variant spokes), 1,000–1,500 (blog spokes)

### Spoke content

| Type | Slug | Role |
|---|---|---|
| Blog | `/blog/cost-to-repaint-rental-sunshine-coast` | Cost cluster anchor (launch post 1) |
| Blog (Q2) | `/blog/working-with-property-managers-coordinating-tenant-turnover-paint` | PM coordination angle |
| Blog (Q1+) | `/blog/investor-checklist-before-buying-rental-needs-paint` | Investor pre-purchase intent (top-of-funnel) |
| Case study | `/projects/rental-repaint-noosa` | Noosa investment property turnaround |
| Case study | `/projects/rental-repaint-buderim` | Multi-property landlord portfolio |
| Suburb variant (launch) | `/locations/noosa/house-painter` | Suburb depth, anchor variant |
| Suburb variant (launch) | `/locations/buderim/house-painter` | Suburb depth, anchor variant |
| Suburb variant (launch) | `/locations/sippy-downs/house-painter` | University-precinct rental stock — strong rental relevance |
| Supporting service | `/services/interior` | Interior repaints are core to between-tenancy work |
| Supporting service | `/services/residential` | General residential umbrella |

### Cross-cluster bridges

- **To For-Agents bridge:** rental pillar → `/for-agents` (property managers are agency contacts; this is the strongest B2B link from this cluster)
- **To Pre-Sale cluster:** rental pillar → `/services/house-pre-sale-painting` (when landlords decide to sell, they convert from rental to pre-sale; cross-link with anchor "selling instead of re-letting?")
- **To Boutique cluster:** weak link only (rental and boutique audiences barely overlap) — single link from Boutique back to Rental on the "investment-grade premium" niche only

---

## Cluster 2 — House Pre-Sale Painting

**Pillar page:** `/services/house-pre-sale-painting`
**Primary keyword:** pre-sale house painter Sunshine Coast
**Audience:** vendors preparing to sell, real estate agents, stylists
**Word count target:** 1,200–1,500 (pillar)

### Spoke content

| Type | Slug | Role |
|---|---|---|
| Blog | `/blog/best-neutral-paint-colours-selling-sunshine-coast-home` | Colour cluster anchor (launch post 2) |
| Blog | `/blog/pre-sale-paint-refresh-checklist-real-estate-agents` | Agent-targeted (launch post 6) — bridges to For-Agents |
| Blog (Q2) | `/blog/after-the-agent-says-paint-first-week-checklist` | Vendor mid-funnel |
| Case study | `/projects/pre-sale-caloundra` | Vendor 14-day-to-listing refresh |
| Case study | `/projects/pre-sale-sunshine-beach` | Higher-end vendor + stylist coordination |
| Suburb variant (launch) | `/locations/sunshine-beach/exterior` | Coastal pre-sale demand |
| Suburb variant (launch) | `/locations/noosa/exterior` | Premium pre-sale demand |
| Suburb variant (launch) | `/locations/buderim/exterior` | Established suburban pre-sale demand |
| Lead magnet | Pre-Sale Colour Guide PDF | Lead capture, auto-tags as Pre-Sale |
| Supporting service | `/services/exterior` | Exterior is the highest-ROI pre-sale scope |
| Supporting service | `/services/interior` | Often combined with exterior in pre-sale scope |

### Cross-cluster bridges

- **To For-Agents bridge (primary):** pre-sale pillar → `/for-agents` — this is the strongest agent referral relationship; agent-targeted blog post lives inside this cluster
- **To Rental cluster:** pre-sale pillar → rental pillar (landlord vendors — converting tenancy to sale)
- **To Boutique cluster:** pre-sale pillar → boutique pillar (high-end pre-sale work shades into boutique scope; anchor "homes that need more than a vendor refresh")

---

## Cluster 3 — New Home Purchase Painting

**Pillar page:** `/services/new-home-purchase-painting`
**Primary keyword:** new home painter Sunshine Coast
**Audience:** buyers between settlement and move-in
**Word count target:** 1,200–1,500 (pillar)

### Spoke content

| Type | Slug | Role |
|---|---|---|
| Blog | `/blog/paint-before-or-after-you-move-in` | Intent decision anchor (launch post 3) |
| Blog (Q2) | `/blog/colour-consultation-first-home-buyers` | First-home buyer onboarding |
| Case study | `/projects/new-home-aura` | Empty-house full-interior repaint pre-move |
| Case study | `/projects/new-home-buderim-hinterland` | First-home buyer with colour consultation |
| Suburb variant (launch) | `/locations/aura/house-painter` | Brand-new estate context — high new-home buyer overlap |
| Suburb variant (launch) | `/locations/caloundra/house-painter` | Mid-market buyer market |
| Supporting service | `/services/interior` | Interior is the dominant new-home scope |
| Supporting service | `/services/residential` | General residential umbrella |

### Cross-cluster bridges

- **To Boutique cluster:** new-home pillar → boutique pillar (buyers of premium homes consider boutique-grade work; anchor "for buyers of architectural or character homes")
- **To Rental cluster:** weak — investors buying properties to rent intersect here, but the audience framing differs. Single link from rental investor blog post → new-home pillar on the "DIY refresh vs professional" comparison angle.
- **To Pre-Sale cluster:** weak in this direction — the next-step from new-home is years away. Skip in launch wave; revisit if traffic data shows demand.

---

## Cluster 4 — Boutique House Painting

**Pillar page:** `/services/boutique-house-painting`
**Primary keyword:** boutique house painter Sunshine Coast
**Audience:** owners of architectural / coastal-premium / heritage / character homes
**Word count target:** 1,500–2,000 (pillar — longer because this is editorial-feel + visual-heavy)

### Spoke content

| Type | Slug | Role |
|---|---|---|
| Blog | `/blog/heritage-queenslander-repaints-whats-different` | Heritage cluster anchor (launch post 4) |
| Blog | `/blog/exterior-paint-coastal-conditions-sunshine-coast` | Coastal product cluster anchor (launch post 5) |
| Blog (Q1) | `/blog/limewash-lime-render-finishes-coastal-homes` | Boutique specialty technique |
| Case study | `/projects/boutique-sunshine-beach` | Architectural coastal home |
| Case study | `/projects/boutique-maleny-queenslander` | Heritage Queenslander full restoration |
| Suburb variant (launch) | `/locations/sunshine-beach/exterior` | (Shared with Pre-Sale — overlapping audience) |
| Suburb hub | `/locations/maleny` | Heritage hinterland focus |
| Suburb hub | `/locations/noosa` | Premium audience focus |
| Suburb hub | `/locations/peregian` | Coastal-premium focus |
| Lead magnet | Boutique Consultation booklet PDF | Lower-priority lead capture, v1.1 possible |
| Supporting service | `/services/exterior` | Coastal exterior expertise overlap |
| Supporting service | `/services/specialty-coatings` | Rendering, limewash, feature walls — boutique-relevant |
| Supporting service | `/services/lead-asbestos-removal` | Heritage homes overlap |

### Cross-cluster bridges

- **To Pre-Sale cluster:** strongest bridge — high-end vendors are boutique-curious. Anchor "for vendors of architectural or character homes"
- **To New Home cluster:** as above, anchor "for buyers of premium homes"
- **To Rental cluster:** weakest. Single conditional link on the "investment-grade premium" niche only.

---

## Cross-cluster bridge — For-Agents (B2B funnel)

`/for-agents` is not a 5th cluster — it's a bridge page that funnels referral intent from two clusters into a B2B conversion.

### Inbound links (clusters → for-agents)

- Pre-Sale pillar → For-Agents (primary)
- Pre-Sale blog post 6 (agent checklist) → For-Agents (primary)
- Rental pillar → For-Agents (secondary, property-manager angle)
- Homepage trust section → For-Agents

### Outbound links (for-agents → clusters)

- For-Agents → Pre-Sale pillar
- For-Agents → Rental pillar
- For-Agents → Projects gallery (filtered by service type)
- For-Agents → Contact (with partner-form CTA)

### What for-agents does NOT link to

- New Home and Boutique clusters do not link to/from For-Agents at launch. The agent referral funnel is rental + pre-sale focused. Boutique and new-home buyers come direct or through projects gallery, not through agent referrals.

---

## Suburb hubs in cluster context

Each suburb hub (`/locations/[suburb]`) is geographically scoped — not service scoped — so it sits across all 4 clusters as a cross-cutting axis.

### Per-suburb internal link template

Every suburb hub page contains a "Services we offer in [suburb]" section linking to all 4 priority service pillars. The relative emphasis varies by suburb context per the suburb's local-condition profile:

| Suburb | Strongest cluster fit | Suburb-page emphasis |
|---|---|---|
| Buderim | Rental + Pre-Sale | Established suburban stock — strong vendor + landlord market |
| Maleny | Boutique | Heritage Queenslander, hinterland weatherboards — boutique-heavy |
| Forest Glen | Rental + New Home | Newer-build family homes — moderate cluster spread |
| Sippy Downs | Rental | University precinct, rental-heavy — Rental cluster anchor |
| Caloundra | Pre-Sale + Rental | Mixed coastal stock — vendor + landlord market |
| Sunshine Beach | Boutique + Pre-Sale | Premium beachfront — Boutique cluster anchor |
| Noosa | Boutique + Pre-Sale | Premium architectural — Boutique cluster anchor |
| Peregian | Boutique | Coastal premium with holiday-home crossover |
| Coolum | Pre-Sale + Rental | Coastal mid-market — vendor + landlord market |
| Glasshouse Mountains | Boutique | Semi-rural acreage, weatherboard farmhouses |
| Aura | New Home | Large new-build estate (Stockland) — New Home cluster anchor |
| Kawana | Pre-Sale + Rental | Mixed waterfront stock — vendor + landlord market |

The strongest-cluster mapping shapes the suburb hub's outbound link weight (e.g., Maleny hub links most prominently to Boutique cluster; Sippy Downs hub links most prominently to Rental cluster). All 4 cluster links still appear on every hub — only the visual prominence/order shifts.

---

## Legacy service pages in cluster context

The 8 legacy service pages (residential, commercial, industrial, interior, exterior, body-corporate, specialty-coatings, lead-asbestos-removal) are not pillars but they map into clusters as supporting content:

| Legacy service | Primary cluster(s) | Notes |
|---|---|---|
| Residential | Rental + Pre-Sale + New Home | Generic umbrella; links into all three residential clusters |
| Commercial | (none — outside priority clusters) | Independent — leads back to home, not a cluster |
| Industrial | (none — outside priority clusters) | Independent |
| Interior | Rental + New Home | Strongest in these two; lighter weight in Pre-Sale + Boutique |
| Exterior | Pre-Sale + Boutique | Coastal exterior expertise overlap |
| Body-corporate | (none — separate B2B niche) | Independent — could be a future Cluster 5 if growth justifies |
| Specialty-coatings | Boutique | Rendering, limewash, feature walls — clear boutique fit |
| Lead-asbestos-removal | Boutique + Pre-Sale | Heritage + pre-1970s home overlap |

Each legacy service page carries upward links to its primary cluster pillar(s). Commercial, industrial, and body-corporate stay independent at launch — strong candidates for future cluster expansion if they justify the investment.

---

## Internal link matrix (concise)

Per-page outbound internal links beyond what's already specified above. Read this as the "must include" link list for each page type during build. For exhaustive page-by-page link rules see [`site-structure.md`](site-structure.md#internal-linking-matrix).

### Homepage
- 4 priority service pillars (visual grid)
- Projects gallery
- Suburbs (chip list / map → all 12 hubs)
- About
- Contact
- For-Agents

### Priority service pillar (each of 4)
- The other 3 priority pillars (cross-link)
- Top 5 suburb hubs by cluster relevance (e.g., Boutique pillar → Maleny, Sunshine Beach, Noosa, Peregian, Buderim)
- 2 case studies in this cluster
- 1–2 supporting blog posts in this cluster
- 1 supporting legacy service page
- For-Agents (where the cluster bridges to agents — Rental + Pre-Sale only)
- Contact / quote form

### Suburb hub (each of 12)
- All 4 priority service pillars (with relative emphasis per cluster fit)
- All 4 variant pages within that suburb (parent → child)
- 2 geographically adjacent suburb hubs
- 1–2 case studies from that suburb
- Contact / quote form

### Suburb variant (each of 48)
- Parent suburb hub
- Matching priority service pillar (e.g., `/locations/maleny/exterior` → `/services/boutique-house-painting` because Maleny is Boutique-anchored)
- 1 case study from same suburb where available
- Contact / quote form

### Blog post
- Exactly 1 primary cluster pillar (mandatory)
- 1 supporting suburb hub (geographically relevant)
- 1–2 related blog posts in same cluster
- 0–1 cross-cluster blog post where audiences overlap

### Case study
- Matching priority service pillar
- Suburb hub for the project location
- 1–2 related case studies (same service type OR same suburb)
- 1 related blog post

### For-Agents bridge
- Pre-Sale pillar
- Rental pillar
- Projects gallery
- Contact + partner-form CTA

### Projects gallery
- All 4 priority service pillars
- All 12 suburb hubs (via filter)

---

## Link weight rules

- Anchor text: use the destination's primary keyword OR a close variant; never "click here" or generic anchors for SEO-critical paths
- Vary anchor text across multiple links to the same page (avoid 100% exact-match anchors)
- Spoke → pillar links: place within body content, not just in navigation or sidebar
- Pillar → spoke links: place in a "related content" block plus contextual in-body links where natural
- Mandatory link counts:
  - Pillar pages: minimum 8 outbound internal links (clusters + suburbs + case studies + supporting)
  - Suburb hubs: minimum 10 outbound (4 services + 4 variants + 2 adjacent hubs + case studies)
  - Suburb variants: minimum 5 outbound (hub + service + case study + contact + breadcrumb)
  - Blog posts: minimum 4 outbound (1 pillar + 1 suburb + 2 related)
  - Case studies: minimum 4 outbound (service + suburb + 2 related)
- Every page must have minimum 3 incoming internal links (no orphans)
- Every page must be reachable from homepage in 3 clicks or fewer

---

## Cluster scorecard targets

Pre-launch quality gate. Each cluster scored independently before that cluster is approved for production.

| Metric | Target | Measurement |
|---|---|---|
| Pillar page completeness | 100% | Pillar exists, word count met, FAQ block present, schema valid |
| Cluster coverage (spokes published) | ≥ 70% at launch | Posts written / posts planned (full 100% by week 12 post-launch via content waves) |
| Pillar → spoke links | 100% | Every planned spoke has an inbound link from the pillar |
| Spoke → pillar links | 100% | Every spoke links to its pillar |
| Cross-cluster bridges | ≥ 80% implemented at launch | Bridge links between Rental/Pre-Sale/Boutique/New Home defined above |
| Suburb integration | 100% | All 12 hubs link to all 4 priority pillars |
| Orphan pages | 0 | Every page has ≥ 3 incoming internal links |
| Cannibalization conflicts | 0 | No two pages target the same primary keyword |

---

## Content gaps to fill

Gaps relative to the brief's positioning and to typical Sunshine Coast painter competitor coverage. Each gap is a planned content addition; some land at launch, some in waves.

### High priority (Phase 4 launch)

| # | Gap | Where it lands |
|---|---|---|
| 1 | Cost transparency for rental repaints | Launch blog post 1 (anchors Rental cluster cost intent) |
| 2 | Colour guidance for pre-sale homes | Launch blog post 2 + Pre-Sale Colour Guide PDF (Pre-Sale cluster) |
| 3 | Settlement-to-move-in timeline content | Launch blog post 3 (New Home cluster) |
| 4 | Heritage / Queenslander painting depth | Launch blog post 4 + Maleny case study (Boutique cluster) |
| 5 | Coastal product / climate content | Launch blog post 5 (Boutique + Exterior overlap) |
| 6 | Agent referral funnel content | Launch blog post 6 + For-Agents bridge |

### Medium priority (Q1–Q2 post-launch waves)

| # | Gap | Where it lands |
|---|---|---|
| 7 | Working with property managers (B2B PM angle) | Q1 blog (Rental cluster) |
| 8 | Investor pre-purchase checklist | Q1 blog (Rental cluster, top-of-funnel intent) |
| 9 | Colour consultation for first-home buyers | Q2 blog (New Home cluster) |
| 10 | Limewash / lime-render specialty content | Q1 blog (Boutique cluster) |
| 11 | "After the agent says paint" vendor content | Q2 blog (Pre-Sale mid-funnel) |
| 12 | Seasonal painting on the Sunshine Coast | Q1–Q2 blogs (cross-cluster, supports all 4) |
| 13 | Body corporate scheduling content | Q2 blog (legacy commercial cluster, optional cluster expansion signal) |

### Lower priority (Q3–Q4)

- Lead-paint home content (compliance + safety angle)
- Multi-property portfolio packages explainer
- Render maintenance content
- Commercial fit-out scheduling content
- Long-form: "the complete Sunshine Coast painting buyer's guide" (link bait / digital PR target)

If GSC ranking data 90 days post-launch shows underperformance on a specific cluster, that cluster's content gap list gets reprioritised.

---

## Cluster validation actions

Before treating this cluster plan as final:

- [ ] Phase 1: run `claude-seo:seo-dataforseo` SERP-overlap check on the 20 Tier 1 keywords from `strategy.md` to validate cluster boundaries
- [ ] Phase 1: confirm any keyword pairs sharing 7+ URLs in top-10 — these should be consolidated to a single target page (update `site-structure.md` if so)
- [ ] Phase 1: confirm any keyword pairs sharing 4–6 URLs — these belong in the same cluster (validate against cluster assignments above)
- [ ] Phase 1: confirm any keyword pairs sharing 0–1 URLs assumed in the same cluster — these may belong in separate clusters (validate)
- [ ] Phase 2: lock cluster structure before Stitch generates the templates that carry the cross-link blocks
- [ ] Phase 4: cluster scorecard run after each launch wave to verify spoke coverage and link counts
- [ ] Phase 6: 90-day post-launch GSC + GA review of per-cluster traffic, conversion rate, and ranking distribution — informs Q3+ cluster expansion decisions

---

## Sources

- `/home/jerald/projects/JJames Painting/docs/seo/strategy.md`
- `/home/jerald/projects/JJames Painting/docs/seo/site-structure.md`
- `/home/jerald/projects/JJames Painting/docs/seo/content-calendar.md`
- `/home/jerald/projects/JJames Painting/docs/seo/competitor-analysis.md`
- `claude-seo:seo-cluster` skill methodology (hub-and-spoke + SERP-overlap clustering principles)
