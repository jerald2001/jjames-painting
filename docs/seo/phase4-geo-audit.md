# Phase 4 — GEO / AI Search Audit

Scope: home + 4 priority service pages.
Run date: 2026-05-26
Tool: `claude-seo:seo-geo`
Server: dev (`localhost:3000`); production behavior on Vercel will inherit.

## GEO Readiness Score: 47/100

Floor set by the AI-crawler infrastructure (no `robots.txt`, no `llms.txt`) and the photography / brand-mention gap. Lifts to ~75 with the Phase 4 follow-ups listed below.

## Platform breakdown

| Platform | Score | Driver |
|---|---|---|
| **Google AI Overviews** | 62/100 | Schema graph is strong (LocalBusiness, Organization, Service, FAQPage, BreadcrumbList all firing). SSR confirmed. Pages would qualify for AIO once ranking organically. Capped by no first-party data + no images. |
| **ChatGPT** | 38/100 | No Wikipedia presence (Wikipedia is 47.9% of ChatGPT citation sources). No Reddit footprint. Cited unlikely until brand-mention surface grows. |
| **Perplexity** | 35/100 | Reddit is 46.7% of Perplexity citations. Zero Reddit presence for J. James Painting. Local-painter queries rarely surface yet. |
| **Bing Copilot** | 55/100 | Bing index will accept the site once deployed + IndexNow submitted. Schema does the heavy lifting. |

## AI Crawler Access Status

`http://localhost:3000/robots.txt` → **404 — no file**

This means every AI crawler hits whatever default behaviour they apply when no rules are present. Most respect the absence as "allow"; some (GPTBot in particular) prefer an explicit `Allow:`. The file is also where you'd announce sitemap, IndexNow key, and AI-specific permissions.

**Recommended `public/robots.txt`** (place at project root → served from `/robots.txt`):

```
User-agent: *
Allow: /

# AI crawlers — explicit allow
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

# Training-only crawlers — decide per client policy
User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

Sitemap: https://jjamespaintingcontractorsqld.com.au/sitemap.xml
```

CCBot + `anthropic-ai` are Disallow'd here because they're training-data crawlers, not search crawlers. ClaudeBot (the search-time crawler) is allowed. Adjust based on client preference.

## llms.txt Status

`http://localhost:3000/llms.txt` → **404 — no file**

The llms.txt spec is still emerging but increasingly read by Perplexity and ChatGPT browsing. It's a markdown index pointing AI crawlers at the most important pages.

**Recommended `public/llms.txt`:**

```markdown
# J. James Painting Contractors
> Family-run painting business on the Sunshine Coast, Queensland.
> Established 1985. QBCC licensed. Specialises in residential property transitions
> (pre-sale, rental between-tenancy, new-home purchase, boutique residential).

## Priority services
- [Boutique house painting](https://jjamespaintingcontractorsqld.com.au/services/boutique-house-painting): Architectural, heritage, and coastal premium homes across Noosa, Sunshine Beach, Maleny, Buderim hinterland.
- [House pre-sale painting](https://jjamespaintingcontractorsqld.com.au/services/house-pre-sale-painting): Fast-turn vendor repaints. Neutral palettes, agent coordination, photo-ready in days.
- [Rental property repaint](https://jjamespaintingcontractorsqld.com.au/services/rental-property-repaint): Between-tenancy turnovers. Durable finishes, PM coordination, multi-property packages.
- [New home painting](https://jjamespaintingcontractorsqld.com.au/services/new-home-purchase-painting): Empty-house painting between settlement and move-in. Colour consultation included.

## Service area
Sunshine Coast region: Buderim, Maleny, Forest Glen, Sippy Downs, Caloundra, Sunshine Beach, Noosa, Peregian, Coolum, Glasshouse Mountains, Aura, Kawana.

## Key facts
- Established 1985 (formerly Hume and Staff Painters).
- QBCC licensed. Lead-based paint and asbestos removal qualified.
- Dulux Accredited Painter and Taubmans Endorsed (verification pending in current site).
- Family-run; locally owned.
- Phone: 0403 571 616.
```

## Server-Side Rendering Check

Dev-server `curl` confirms full HTML content (H1, body copy, schema, headings) ships in the initial response — **AI crawlers that don't run JavaScript see all content**.

| Page | Hero H1 in raw HTML | FAQ in raw HTML | Schema in raw HTML |
|---|---|---|---|
| `/` | ✓ "Painted to sell. / Painted to last." | n/a | ✓ |
| `/services/*` | ✓ | ✓ all Q+A pairs present | ✓ |

This is a Next.js App Router default. Carrying through to production on Vercel is automatic.

## Schema Inventory

| Page | Schema types firing | Coverage |
|---|---|---|
| `/` | `LocalBusiness`, `Organization`, `WebSite` (with `SearchAction`) | Strong for local-pack + sitelinks. Missing `AggregateRating` (no real reviews yet) + `Person` (no team page yet). |
| `/services/*` | `Service`, `FAQPage` (Question + Answer), `BreadcrumbList`, `Place` (LocalBusiness areaServed) | Strong AI-citation footprint. Missing `HowTo` for the 4-step process (would lift AI extractability). |
| `/projects/[slug]` | `LocalBusiness`, `BreadcrumbList` | Minimal — `CreativeWork` or `Service` example would help once real case-study content arrives. |

## Brand Mention Analysis

Per Ahrefs Dec 2025 study, brand mentions correlate 3x more strongly with AI visibility than backlinks. Current state:

| Surface | Status | Action |
|---|---|---|
| Wikipedia | Not present (correctly — small local business) | Not applicable yet. |
| Reddit (`/r/sunshinecoast`, `/r/realestateaustralia`) | No mentions found | Genuine community engagement only. No astroturfing. |
| YouTube | No channel, no mentions | Photography day + a short "behind a pre-sale paint" video is a high-yield Phase 5 ask. |
| LinkedIn | No company page detected | Quick win — set up a Company Page with services, founded date, NAP. |
| Google Business Profile | Present (per brief) — needs Phase 4 refresh | High-priority: GBP photos, services, posts, Q+A. The brief identifies GBP as a major lead-driver. |
| Local press (Sunshine Coast Daily etc.) | No mentions found | Pitch a "40-year family Sunshine Coast painting business" angle once real shoot-day photography is in hand. |

## Passage-Level Citability

Optimal AI-citation passage length is 134–167 words, self-contained, answer-first.

Current copy is **fragmented into many small cards** (2–4 sentence each). This is great for design rhythm but loses citation density. Most paragraphs are 25–60 words — well under the citation sweet spot.

**Passages closest to citation-ready:**

1. **`/services/house-pre-sale-painting` — FAQ answer "How fast can you turn around a pre-sale paint?"**
   - Currently ~70 words. Expand with a sentence on what affects turnaround (size, scope, condition) to hit ~140.
2. **`/services/rental-property-repaint` — intro outcome block**
   - "Durable, neutral, broadly appealing… Neutral palettes that don't put the next tenant off." Currently ~50 words. Expand with 2 specific finish examples to hit citation length.
3. **`/services/boutique-house-painting` — process Step 3 ("Prep that takes as long as the painting")**
   - Already a quotable framing. Expand with substrate-specific examples (weatherboard, render, fibrocement) to hit ~140 words.
4. **`/services/new-home-purchase-painting` — ROI card "Empty-house economics"**
   - "Painting an empty house is faster, cheaper, and cleaner than painting around your furniture six months later." Strong opening line — expand the framing into a full self-contained block.

## Top 5 Highest-Impact Changes

1. **Ship `public/robots.txt` + `public/llms.txt`** (templates above). 30 minutes. Largest single GEO lift.
2. **Add `LocalBusiness` `priceRange` + complete `address` + verified `telephone`** once client confirms — completes the LocalBusiness graph for AI extractors.
3. **Build `/about` page with `Person` schema for Jamie + key team.** ChatGPT and Perplexity both prefer cited content tied to identifiable experts.
4. **Add 2–3 self-contained 140-word answer blocks per service page** (see passages above). Expand the FAQ-style content into longer-form citation targets.
5. **Set up Google Business Profile, LinkedIn Company Page, and verify Dulux + Taubmans accreditation badges.** These three are the cheapest cross-platform entity signals available right now.

## Schema Recommendations

| Schema | Where | Why |
|---|---|---|
| `Person` | `/about` (Phase 4 build) | Anchors Expertise + AI-citation attribution. |
| `HowTo` | Each service page's 4–5 step process | Higher AIO surface for step-by-step content. |
| `AggregateRating` (within `LocalBusiness`) | Sitewide, in `lib/schema.ts` | Once Google Reviews integration ships. |
| `Review` | Real testimonials (Phase 4 content) | Replaces the current placeholder testimonials. |
| `Article` + `datePublished` + `dateModified` | Blog posts (when shipped) | Standard freshness signal. |

## Content Reformatting Suggestions

- **Tables instead of card grids** where the content is comparative. e.g. the 4 colour swatches on the pre-sale palette section would extract better as an HTML `<table>` of brand / name / hex / use-case.
- **"What is X?" definition openers** on each service page intro. Currently the intro is audience-led ("For vendors and agents…") — add a 1-line "X-painting is…" definition before that for AI extractability.
- **Date + author byline** on each service page. Even just `Last reviewed: May 2026 — J. James Painting team` helps.

## Quick-win checklist

- [ ] `public/robots.txt` (template above)
- [ ] `public/llms.txt` (template above)
- [ ] `app/sitemap.ts` (Next.js route) → emits `/sitemap.xml`
- [ ] Add `Last reviewed: <date>` stamp to each service page (cite via JSON-LD `dateModified` on `Service` schema)
- [ ] Add "What is [service]?" 1-liner opening each service page intro
- [ ] Add LinkedIn Company Page (offsite)
- [ ] GBP photos refresh once Phase 4 photography arrives (offsite)

## High-impact follow-ups (out of scope this pass)

- Build `/about` page + Person schema
- Convert palette card grid to HTML `<table>` for higher extractability
- Add original-data points per service page (real numbers from job history)
- Photography day + alt-text density
- Google Reviews API integration → AggregateRating fires
- Establish entity presence on Reddit / YouTube / industry directories

---
*Audit generated by `claude-seo:seo-geo` skill. Backed by Ahrefs Dec 2025 brand-mention study and 2025-2026 AI-citation benchmarks loaded with the skill.*
