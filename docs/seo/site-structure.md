# Site Structure — J. James Painting

URL hierarchy, target keywords per page, and internal linking matrix. This document feeds Phase 2 Stitch layouts and Phase 4 copywriting.

Domain: `jjamespaintingcontractorsqld.com.au`
Primary location: Sunshine Coast, QLD, Australia
NAP phone: `0403 571 616`

All keyword volume and difficulty figures must be validated via `claude-seo:seo-dataforseo` (live SERP data) before final content prioritization. Volume estimates are not provided in this doc — they belong in a separate research pass.

---

## URL hierarchy

```
/                                                    Home
/about                                               About
/services                                            Services index
/services/rental-property-repaint                    ★ priority service
/services/house-pre-sale-painting                    ★ priority service
/services/new-home-purchase-painting                 ★ priority service
/services/boutique-house-painting                    ★ priority service
/services/residential                                legacy service
/services/commercial                                 legacy service
/services/industrial                                 legacy service
/services/interior                                   legacy service
/services/exterior                                   legacy service
/services/body-corporate                             legacy service
/services/specialty-coatings                         rendering, airless spray, texture, feature walls
/services/lead-asbestos-removal                      regulated/qualified work

/projects                                            Filterable gallery
/projects/[slug]                                     Case study (8-12 at launch, growing)

/locations                                           Suburb hub index
/locations/[suburb]                                  12 suburb hub pages
/locations/[suburb]/house-painter                    \
/locations/[suburb]/painters                          > 48 variant pages
/locations/[suburb]/exterior                         /
/locations/[suburb]/interior

/for-agents                                          Agent & PM referral landing (new)
/testimonials                                        Reviews + named quotes
/blog                                                Blog index
/blog/[slug]                                         Blog posts
/contact                                             Quote form + phone + map

/privacy-policy
/sitemap
/404
```

URLs use lowercase, hyphenated kebab case. Trailing slash off (Next.js default). Canonical URLs set on every page.

---

## Page-by-page keyword targets

Format: **primary** + secondary keywords. Each page has exactly one primary target. Secondary keywords appear naturally in body copy and H2/H3 — never stuffed.

### Home
- **Primary:** painters Sunshine Coast
- **Secondary:** painting contractors Sunshine Coast, Sunshine Coast house painters, residential painters Sunshine Coast
- **Title tag:** `Painters Sunshine Coast | J. James Painting — Family-Run Since 1985`
- **H1:** Painted to sell. Painted to last. (visual identity — keyword in H2 below)
- **H2 carrying primary keyword:** Sunshine Coast painting since 1985

### About
- **Primary:** Sunshine Coast painting company
- **Secondary:** family-owned painters Sunshine Coast, painting contractor QLD, qualified painters Sunshine Coast
- **Title tag:** `About J. James Painting | Sunshine Coast Painters Since 1985`

### Services index
- **Primary:** painting services Sunshine Coast
- **Secondary:** house painters Sunshine Coast, commercial painters Sunshine Coast, painting contractors QLD
- **Title tag:** `Painting Services Sunshine Coast | Residential, Commercial, Industrial`

### Priority service 1 — Rental Property Repaint
- **Primary:** rental property painter Sunshine Coast
- **Secondary:** investment property repaint, between-tenancy painting, landlord painter QLD, property manager painter Sunshine Coast
- **Title tag:** `Rental Property Repaint Sunshine Coast | Between-Tenancy Painters`
- **H1:** Repaint between tenants. Re-let faster.
- **FAQ schema priorities:** turnaround time, working around tenants, multi-property packages, depreciation/tax treatment, paint durability

### Priority service 2 — House Pre-Sale Painting
- **Primary:** pre-sale house painter Sunshine Coast
- **Secondary:** painting to sell my house, vendor paint refresh, real estate painter Sunshine Coast, agent-recommended painter
- **Title tag:** `Pre-Sale House Painting Sunshine Coast | Painted Ready for Market`
- **H1:** Painted to sell. Ready for inspection in days, not weeks.
- **FAQ schema priorities:** turnaround for listing dates, ROI on pre-sale paint, neutral palette recommendations, coordination with stylists/photographers, scope tiers

### Priority service 3 — New Home Purchase Painting
- **Primary:** new home painter Sunshine Coast
- **Secondary:** repaint before moving in, settlement painting, house painter for new owners, empty house painting
- **Title tag:** `New Home Painting Sunshine Coast | Paint Before You Move In`
- **H1:** Just bought a place? Paint it before you move in.
- **FAQ schema priorities:** settlement-to-keys timeline, colour consultation process, whole-home pricing tiers, builder defect lists, working with conveyancers

### Priority service 4 — Boutique House Painting
- **Primary:** boutique house painter Sunshine Coast
- **Secondary:** premium house painter Noosa, architectural painter Sunshine Coast, heritage painter QLD, Queenslander painter
- **Title tag:** `Boutique House Painters Sunshine Coast | Heritage, Coastal, Architectural`
- **H1:** Painting for homes that deserve more than a quick coat.
- **FAQ schema priorities:** specialty coatings (limewash, lime-render), heritage approach, colour consultation depth, high-access methods, product systems used

### Legacy service pages
- `/services/residential` — **Primary:** residential painter Sunshine Coast
- `/services/commercial` — **Primary:** commercial painter Sunshine Coast / commercial painting contractor QLD
- `/services/industrial` — **Primary:** industrial painter Sunshine Coast / industrial painting contractor QLD
- `/services/interior` — **Primary:** interior painter Sunshine Coast
- `/services/exterior` — **Primary:** exterior painter Sunshine Coast
- `/services/body-corporate` — **Primary:** body corporate painter Sunshine Coast / strata painting QLD
- `/services/specialty-coatings` — **Primary:** house rendering Sunshine Coast (secondary: airless spray painting, texture coating Sunshine Coast)
- `/services/lead-asbestos-removal` — **Primary:** lead paint removal Sunshine Coast (secondary: asbestos removal QLD, qualified hazardous coatings)

### Suburb hub pages (12)

Pattern: **primary keyword** = `painters [suburb]`. Each hub carries internal links to its 4 variant pages and to all 4 priority service pages.

| Suburb | Primary keyword | Title tag |
|---|---|---|
| Buderim | painters Buderim | `Painters Buderim \| J. James Painting Buderim` |
| Maleny | painters Maleny | `Painters Maleny \| Hinterland & Heritage Painters` |
| Forest Glen | painters Forest Glen | `Painters Forest Glen \| Sunshine Coast Painters` |
| Sippy Downs | painters Sippy Downs | `Painters Sippy Downs \| Residential Painters` |
| Caloundra | painters Caloundra | `Painters Caloundra \| House & Commercial Painters` |
| Sunshine Beach | painters Sunshine Beach | `Painters Sunshine Beach \| Coastal Premium Painters` |
| Noosa | painters Noosa | `Painters Noosa \| Premium Residential Painters` |
| Peregian | painters Peregian | `Painters Peregian \| Coastal Painters Sunshine Coast` |
| Coolum | painters Coolum | `Painters Coolum \| Residential & Coastal Painters` |
| Glasshouse Mountains | painters Glasshouse Mountains | `Painters Glasshouse Mountains \| Hinterland Painters` |
| Aura | painters Aura | `Painters Aura \| New-Estate House Painters` |
| Kawana | painters Kawana | `Painters Kawana \| Sunshine Coast Painters` |

Each hub must include genuine local context:
- Buderim — hinterland slope housing, mature suburban stock
- Maleny — hinterland weatherboards, heritage cottages
- Forest Glen — newer-build family homes
- Sippy Downs — university precinct, rental-heavy housing stock
- Caloundra — mixed coastal stock, older retiree homes
- Sunshine Beach — coastal salt exposure, premium beachfront
- Noosa — premium architectural and coastal-character
- Peregian — coastal mid-market, holiday homes
- Coolum — coastal residential, mid-market
- Glasshouse Mountains — semi-rural acreage, weatherboard farmhouses
- Aura — large new-build estate (Stockland), brand-new homes
- Kawana — mixed waterfront/canal homes and apartments

### Suburb variant pages (48)

Pattern: `/locations/[suburb]/[service]` where service ∈ {`house-painter`, `painters`, `exterior`, `interior`}.

Primary keyword pattern:
- `house-painter` variant → **house painter [suburb]**
- `painters` variant → **painters [suburb]** (overlaps with hub — variant goes deeper on house painters specifically; hub stays general)
- `exterior` variant → **exterior painter [suburb]** / **exterior house painting [suburb]**
- `interior` variant → **interior painter [suburb]** / **interior house painting [suburb]**

Unique-content requirement per variant (per local-service.md quality gates): minimum 500 words, 40% unique. Each variant must include:
1. Unique opening paragraph referencing the suburb (not the hub paragraph)
2. At least one suburb-specific project reference or local condition
3. Unique FAQ entry not repeated on other variants
4. Single CTA appropriate to the service focus

### For Agents & PMs
- **Primary:** painter for real estate agents Sunshine Coast
- **Secondary:** property manager painter Sunshine Coast, vendor painter referral, agent partner painter QLD
- **Title tag:** `Painter for Real Estate Agents & Property Managers — Sunshine Coast`

### Projects (gallery)
- **Primary:** painting projects Sunshine Coast
- **Title tag:** `Painting Projects Sunshine Coast | J. James Painting Portfolio`

### Project case studies (`/projects/[slug]`)
- **Primary pattern:** `[service-type] [suburb] [project-feature]` — e.g., "Queenslander repaint Maleny", "rental repaint Noosa", "boutique exterior Sunshine Beach"
- Each case study is a long-tail keyword unit. Schema: ImageObject + LocalBusiness reference.

### Testimonials
- **Primary:** Sunshine Coast painter reviews
- Schema: Review + AggregateRating (LocalBusiness reference)

### Blog index
- **Primary:** painting tips Sunshine Coast / painting advice Sunshine Coast
- Posts: see `content-calendar.md` for individual post keywords

### Contact
- **Primary:** painter quote Sunshine Coast
- Schema: ContactPage + LocalBusiness

---

## Title tag & meta description rules

- Title tag: 50–60 characters, primary keyword in first 30 characters, brand pipe-separated at the end
- Meta description: 150–160 characters, lead with the buyer outcome, end with a CTA verb ("Get a free quote," "Call today")
- Pattern: `[Primary keyword] | [Brand or hook]` for titles
- Avoid the same modifier across multiple pages (don't put "Sunshine Coast" identically at the end of every title — vary placement to avoid SERP cannibalisation flags)

---

## Internal linking matrix

The internal linking strategy follows hub-and-spoke with cross-service relevance:

### Priority service pages link to
- All 4 priority service pages (cross-link in nav and a "related services" block)
- Top 5 suburb hubs (Noosa, Buderim, Sunshine Beach, Caloundra, Maleny — confirm via GSC data in Phase 1)
- 2–3 relevant project case studies
- Relevant blog posts (e.g., pre-sale page → "Best neutral paint colours for selling")
- Contact / quote form
- For Agents (where relevant — pre-sale and rental link here)

### Suburb hub pages link to
- All 4 priority service pages
- All 4 variant pages within that suburb
- 2 nearest neighbouring suburb hubs (e.g., Noosa hub → Sunshine Beach + Peregian)
- 1–2 project case studies from that suburb
- Contact / quote form

### Suburb variant pages link to
- Parent suburb hub
- The matching priority service page (e.g., `/locations/noosa/exterior` → `/services/boutique-house-painting` where relevant)
- 1 project case study from the same suburb
- Contact / quote form

### Projects link to
- The matching service page
- The matching suburb hub
- Other projects in the same suburb
- Other projects of the same service type

### Blog posts link to
- The most relevant service page (always exactly 1 primary service link)
- 1–2 supporting suburb hubs where geographically relevant
- Related blog posts (same cluster)

### Anchor text rules
- Use the destination page's primary keyword as the anchor where natural
- Vary anchor text across multiple links to the same page (avoid 100% exact-match anchors)
- Never link with generic anchors ("click here," "learn more") for SEO-critical paths

---

## URL migration map

Pre-launch deliverable: a full URL inventory of the current site mapped 1:1 to the new structure. No URL goes offline without a 301 to the most relevant replacement.

Three migration scenarios:

| Scenario | Action |
|---|---|
| URL slug unchanged (e.g., legacy service page kept) | No redirect needed; canonical updated to new domain path if needed |
| URL slug changed but page exists | 301 from old → new |
| Page consolidated or removed | 301 to closest topical match (never to home) |

The 40 suburb variants not rewritten at launch keep their current URLs and current content. They are not redirected. They get rewritten in waves (see `content-calendar.md`).

---

## Schema markup plan

Per page type, the following JSON-LD blocks are generated by `claude-seo:seo-schema`:

| Page type | Schema blocks |
|---|---|
| Home | `LocalBusiness`, `Organization`, `WebSite` (with `SearchAction`) |
| About | `LocalBusiness`, `Organization` |
| Services index | `LocalBusiness`, `BreadcrumbList` |
| Service page (priority + legacy) | `Service` (referencing parent `LocalBusiness`), `BreadcrumbList`, `FAQPage` (where FAQ block present) |
| Location hub | `LocalBusiness` with `areaServed` set to the suburb + geo coordinates, `BreadcrumbList` |
| Location variant | `LocalBusiness` + `Service` referencing the suburb, `BreadcrumbList`, `FAQPage` |
| For Agents | `LocalBusiness`, `BreadcrumbList` |
| Projects index | `LocalBusiness`, `BreadcrumbList`, `ItemList` of case studies |
| Project case study | `LocalBusiness`, `BreadcrumbList`, `ImageObject` array, optional `Review` if client quote included |
| Testimonials | `LocalBusiness` with `AggregateRating`, `Review` array |
| Blog index | `Blog`, `BreadcrumbList` |
| Blog post | `BlogPosting` (with `author`, `datePublished`, `dateModified`), `BreadcrumbList`, `FAQPage` where applicable |
| Contact | `ContactPage`, `LocalBusiness` |

`LocalBusiness` schema is built from the master NAP record in `client-brief/`. Required properties: `name`, `address`, `telephone`, `geo.latitude`/`longitude`, `openingHours`, `priceRange`, `areaServed`, `image`, `url`, `sameAs` (social profiles), `aggregateRating` (pulled from Google Reviews via API where possible).

`areaServed` lists all 12 suburbs at the global LocalBusiness level. Per-suburb LocalBusiness blocks on suburb hubs use a single-suburb `areaServed`.

---

## Heading hierarchy rules

- Exactly one `<h1>` per page
- `<h2>` for major sections (3–6 per page typical)
- `<h3>` for subsections under H2
- No skips (`<h2>` → `<h4>` is forbidden)
- H1 carries the primary keyword OR a brand hook line that pairs with a keyword-loaded H2 immediately below (the priority service pages use the hook-H1 + keyword-H2 pattern — Google handles this fine)

---

## Hard rules (from CLAUDE.md and quality gates)

- Every page has a unique title and meta description
- Every page has at least one internal link pointing to it (no orphan pages)
- NAP is identical on every page
- Schema validates in Rich Results Test
- `claude-seo:seo-page` passes before any page is marked complete
- No keyword stuffing (target 1–1.5% density on primary, lower on secondary)
- No duplicate H1s across the site
- All location pages stay under the local-service template's 50-page hard stop at launch (20 pages live at launch, growing in waves)
