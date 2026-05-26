# Phase 5 — Technical SEO Audit

**Date:** 2026-05-26
**Environment:** localhost:3000 (Next.js 16 dev mode, Turbopack)
**Production target:** https://jjamespaintingcontractorsqld.com.au
**Pages covered:** 13 routes (home, services index + 4 priority services, about, contact, for-agents, locations index, projects index, testimonials, privacy-policy) plus spot checks of `/locations/buderim` and `/projects/boutique-noosa`.

---

## Technical Score: 92/100 (after high-priority fixes landed)

### Category Breakdown

| Category | Status | Score | Notes |
|---|---|---|---|
| Crawlability | pass | 95/100 | robots.txt, sitemap, llms.txt all served; AI crawler policy explicit. |
| Indexability | pass | 95/100 | Canonical now set on `/`. All 13 routes correct. |
| Security | pass | 90/100 | HSTS + nosniff + X-Frame + Referrer-Policy + Permissions-Policy shipped. CSP deferred. |
| URL Structure | pass | 95/100 | Clean URLs, no params, 164 redirects single-hop to 200 destinations. |
| Mobile | pass | 95/100 | Viewport correct site-wide; responsive layout shipped. |
| Core Web Vitals | warn | 80/100 | Prod-build SEO 100, BP 100, A11y 96; LCP/TBT still above target. Lift list in §6. |
| Structured Data | pass | 95/100 | Single JSON-LD graph per page, correct types per page-type. |
| JS Rendering | pass | 95/100 | Server Components — hero text, FAQ copy, suburb context all in initial HTML. |
| IndexNow | n/a | — | Not implemented. Optional; recommend for Bing/Yandex post-launch. |

### Landed fixes (this audit cycle)

- `src/app/page.tsx` — added `export const metadata: Metadata = { alternates: { canonical: "/" } };` (home canonical)
- `next.config.ts` — added `headers()` block: HSTS (2-year preload), X-Content-Type-Options, X-Frame-Options SAMEORIGIN, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy lockdown
- `docs/seo/redirect-map.md` — synced redirect count (165 → 164) and stale destination rows (testimonials, services anchors)
- Prod-build Lighthouse run verified all three fixes ship in HTTP response

Confirmed live on prod build:
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
<link rel="canonical" href="https://jjamespaintingcontractorsqld.com.au"/>
```

---

## 1. Crawlability — 95/100

### robots.txt
Served at `/robots.txt`, 200. Policy:
- `User-agent: *` — Allow all
- Search-time AI crawlers explicitly allowed: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended
- Training-only crawlers blocked: CCBot, anthropic-ai, Bytespider
- Sitemap: `https://jjamespaintingcontractorsqld.com.au/sitemap.xml`

This is correct for an AI-visibility strategy that wants citation traffic without contributing to bulk training datasets. Note: Google-Extended is allowed — keep it that way if Gemini citation matters; flip to Disallow if the client wants to opt out of Gemini training (does NOT affect Search/AI Overviews).

### Sitemap
`/sitemap.xml` returns valid XML with 37 URLs covering home, services, projects, locations, and legal. Generated dynamically from `src/content/projects.ts` and `src/content/suburbs.ts` via `src/app/sitemap.ts` — adding a project/suburb in those files surfaces it automatically.

### llms.txt
Served at `/llms.txt`, 200. Full markdown index with sections: All services, Priority services, Projects, About, Contact, For agents, Reviews, Legal, Service area, Suburb hubs, Key facts.

`/llms-full.txt` returns 404 (optional; not required, but a single-file content concatenation could be added later for AI ingestion convenience).

### No crawl-depth issues
All 13 audited routes reachable within 2 clicks from home (header nav + footer + suburb grid on home + service bento on home).

---

## 2. Indexability — 80/100

### Canonicals
| Route | Canonical Set | Value |
|---|---|---|
| `/` | **MISSING** | — |
| `/services` | yes | `…/services` |
| `/services/{priority-slug}` (×4) | yes | self |
| `/about` | yes | `…/about` |
| `/contact` | yes | `…/contact` |
| `/for-agents` | yes | `…/for-agents` |
| `/locations` + `/locations/{slug}` | yes | self |
| `/projects` + `/projects/{slug}` | yes | self |
| `/testimonials` | yes | `…/testimonials` |
| `/privacy-policy` | yes | `…/privacy-policy` |

**Issue (high priority):** `src/app/page.tsx` has no `metadata` export. The root layout sets `metadataBase` and `openGraph.url: "/"` but no `alternates.canonical`. Add to `src/app/page.tsx`:

```ts
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
```

### Robots meta
Only `/privacy-policy` ships an explicit `<meta name="robots" content="index, follow">`. All other pages omit the tag, which defaults to index/follow — correct.

### Duplicate content / index bloat
None detected. URL pattern is one canonical path per page; no `?` query parameters; no `/index.html` artefacts; no www-variant set.

### Thin content
Rough word counts (post-script, body text only):

| Page | Words | Floor |
|---|---|---|
| `/` | ~1,150 | 500+ ok |
| `/services/house-pre-sale-painting` | ~1,250 | 800+ ok |
| `/about` | ~540 | 500+ ok |
| `/for-agents` | ~660 | 500+ ok |
| `/testimonials` | ~340 | placeholder, expected |
| `/contact` | ~60 | form page, expected |
| `/locations/buderim` | ~450 | 500+ borderline |

**Borderline:** suburb hubs sit ~450 words. Acceptable for v1 launch, but each hub will benefit from expansion to 500–600 in the next content pass (add 1–2 local-substrate paragraphs or one short client-served vignette per suburb).

---

## 3. Security — 40/100 (fail)

`next.config.ts` does not ship an `async headers()` block. Confirmed via `curl -I` on `/`, `/services/house-pre-sale-painting`, `/contact` — **no security headers present** on any route.

Missing:
- `Strict-Transport-Security` (HSTS)
- `Content-Security-Policy`
- `X-Frame-Options` (or CSP `frame-ancestors`)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`

**Recommended addition to `next.config.ts`:**

```ts
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async redirects() { return MIGRATION_REDIRECTS; },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};
```

CSP is intentionally omitted from the snippet — Next 16 with Turbopack uses inline scripts and dynamic chunks; a working CSP needs `nonce` plumbing through `instrumentation.ts` or a middleware. Add CSP in a follow-up after security headers ship and the prod build is verified.

HSTS preload submission optional; only worth it after the site has been on HTTPS for 30+ days with no mixed content.

---

## 4. URL Structure + Migration Redirects — 95/100

### URLs
- All paths kebab-case, descriptive, no query parameters.
- Hierarchy clean: `/services/{slug}`, `/locations/{slug}`, `/projects/{slug}`.
- No trailing slashes (Next default).
- No URL length issues — longest tested is `/services/new-home-purchase-painting` (~34 chars).

### Migration redirects
`src/lib/redirects.ts` exports 164 entries via 12 generators + the explicit array.

| Sample legacy URL | Resolves to | HTTP |
|---|---|---|
| `/about-us` | `/about` | 308 → 200 |
| `/quote` | `/contact#quote` | 308 → 200 |
| `/painters` | `/services` | 308 → 200 |
| `/residential` | `/services#residential` | 308 → 200 |
| `/commercial` | `/services#commercial` | 308 → 200 |
| `/buderim` | `/locations/buderim` | 308 → 200 |
| `/painters-in-noosa` | `/locations/noosa` | 308 → 200 |
| `/high-end-project-painters-in-maleny` | `/services/boutique-house-painting` | 308 → 200 |
| `/exterior-house-painter-in-sunshine-beach` | `/locations/sunshine-beach` | 308 → 200 |
| `/interior-painting-in-caloundra` | `/locations/caloundra` | 308 → 200 |
| `/house-painting-in-nambour` | `/locations/forest-glen` (neighbour) | 308 → 200 |
| `/house-painting-in-bli-bli` | `/locations/forest-glen` (neighbour) | 308 → 200 |
| `/exterior-house-painter-in-mountain-creek` | `/locations/sippy-downs` (neighbour) | 308 → 200 |
| `/house-painting-in-brews` | `/locations` (unknown fallback) | 308 → 200 |
| `/exterior-house-painter-in-maleney` (typo) | `/locations/maleny` | 308 → 200 |
| `/interior-painting-in-glasshouse` | `/locations/glasshouse-mountains` | 308 → 200 |
| `/wpt-testimonial/alan-cameron` | `/testimonials` | 308 → 200 |

- **Total redirects:** 164 (note: a single duplicate was eliminated in dedupe — the prior "165" was the pre-dedupe count from the redirect-map doc; the live export count is 164 with no duplicate sources)
- **Duplicates:** 0
- **Unique destination paths:** 19
- **Single-hop:** every redirect goes directly to its final 200 destination (no chained redirects)
- **All status:** 308 Permanent Redirect (modern equivalent of 301 for SEO link-equity transfer)

This is launch-ready. Update `docs/seo/redirect-map.md` to reference 164 instead of 165 for accuracy.

---

## 5. Mobile — 95/100

- Viewport meta tag present and identical site-wide: `width=device-width, initial-scale=1`
- Mobile-first responsive verified earlier in Phase 3 (post bento + carousel + header cluster fixes)
- Touch targets in header: 40×40 (`h-10 w-10`) for phone + hamburger — meets the 48px guideline at the lower end. Bump to `h-11 w-11` (44px) or add 4px padding for stricter conformance.

Google's mobile-first index has been complete since July 2024 — the mobile rendering IS the index.

---

## 6. Core Web Vitals — 80/100 (lab data, prod build)

**Lab results (Lighthouse 12, headless Chromium, `next build && next start`, mobile slow-4G CPU-throttled emulation):**

| Metric | Home (dev → prod) | `/services/house-pre-sale-painting` (dev → prod) | Target |
|---|---|---|---|
| Performance | 72 → **82** | 77 → 71 | 90+ |
| SEO | 100 → 100 | 100 → 100 | 90+ |
| Accessibility | 96 → 96 | 96 → 96 | 90+ |
| Best Practices | n/a → **100** | n/a → **100** | 90+ |
| LCP | 4.4 → **3.5 s** | 3.6 → 4.6 s | <2.5 s |
| FCP | 1.0 → **0.9 s** | 0.9 → **0.9 s** | <1.8 s |
| CLS | 0 → **0** | 0 → **0** | <0.1 |
| TBT | 510 → **360 ms** | 550 → 490 ms | <200 ms |
| Speed Index | 1.0 → **0.9 s** | 0.9 → 2.2 s | <3.4 s |
| TTI | 7.4 → **6.8 s** | 7.0 → 6.9 s | <5 s |

**Where we stand:**
- **SEO 100, A11y 96, Best Practices 100** — production scores all green.
- **CLS = 0** site-wide — layout never shifts. This is the hardest CWV metric to get right and we own it.
- **Performance gap:** LCP 3.5–4.6s vs 2.5s target, TBT 360–490ms vs 200ms target. The render-blocking JS bundle and the carousel/bento client components are the main culprits.

**Performance lifts to land before deploy:**
1. **Lazy-load below-fold client components** — `HomeProjectsCarousel`, `HomeTestimonials`, `HomeSuburbs`, `HomeFinalCTA` can be `next/dynamic`-imported with `{ ssr: false }` deferred to interaction or with IntersectionObserver.
2. **Audit client-component reach** — confirm `HomeServiceBento` and `HomeWhyUs` don't need client interactivity (they may be Server Components and bring TBT down ~40%).
3. **LCP candidate** — verify hero element. If it's a heading, ensure the font is in the critical CSS and not blocking. If a placeholder image is being painted as LCP, swap to text-first hero.

**Lab-only caveat:** mobile slow-4G CPU-throttled headless emulation is harsher than typical real-user conditions. Real CrUX field data after 28+ days of traffic is the real signal. If field CrUX matches lab projections, the optimization list above is the playbook.

Best Practices flagged 1 item both pages: `valid-source-maps` (missing first-party source maps). Next.js default; enable in `next.config.ts` if needed for debugging, but it adds bundle weight.

---

## 7. Structured Data — 95/100

Each page ships **one** JSON-LD `<script>` with an `@graph` array. All parse cleanly.

| Route | Schema types |
|---|---|
| `/` | HomeAndConstructionBusiness, Organization, WebSite |
| `/services` | HomeAndConstructionBusiness, BreadcrumbList |
| `/services/{slug}` (×4) | Service, FAQPage, BreadcrumbList |
| `/about` | HomeAndConstructionBusiness, Organization, AboutPage, Person, BreadcrumbList |
| `/contact` | HomeAndConstructionBusiness, Organization, ContactPage, BreadcrumbList |
| `/for-agents` | HomeAndConstructionBusiness, Organization, ContactPage, BreadcrumbList |
| `/locations` + `/locations/{slug}` | HomeAndConstructionBusiness, BreadcrumbList |
| `/projects` + `/projects/{slug}` | HomeAndConstructionBusiness, BreadcrumbList |
| `/testimonials` | HomeAndConstructionBusiness, BreadcrumbList |
| `/privacy-policy` | HomeAndConstructionBusiness, BreadcrumbList |

**Quality observation:** suburb pages (`/locations/{slug}`) and project pages (`/projects/{slug}`) inherit only the generic LocalBusiness + Breadcrumb graph. Consider in a follow-up:
- **Place schema** on suburb hubs (with `containedInPlace` referencing the Sunshine Coast region)
- **CreativeWork or ImageObject** on project pages once real client photos land

**Action:** validate the live graph against Google Rich Results Test (https://search.google.com/test/rich-results) once the prod URL is live. Local-only validation isn't reliable for Google's parser; cloud-side lint reveals missing required properties for things like FAQ snippets.

---

## 8. JS Rendering — 95/100

Server Components render critical text in initial HTML. Confirmed:
- Home hero "Sunshine Coast painters since 1985" present in raw HTML
- Service page FAQ heading "How fast can you turn…" present in raw HTML
- Suburb page substrate copy "brick-veneer" present in raw HTML

No client-side rendering blockers for SEO crawl. JSON-LD ships in the SSR response (not injected by client JS) — meets the December 2025 Google JS-SEO guidance for serving structured data in initial HTML.

The contact + for-agents Server Action forms degrade gracefully — the form HTML renders server-side; the action handler runs on submit.

---

## 9. Accessibility (Lighthouse) — 96/100

Two Lighthouse failures both routes:

1. **color-contrast** — `src/components/layout/footer.tsx:140` — `<span className="text-[10px] uppercase ... text-cream/40">` (40% opacity cream text on cream background). Below WCAG AA. Bump to `text-cream/60` or add a slight bg tint.
2. **label-content-name-mismatch** — header phone icon CTA at `src/components/layout/header.tsx:67`. The icon button has `aria-label="Call J. James Painting…"` and only an aria-hidden `<Phone />` icon visible. Lighthouse's heuristic may be misfiring (no visible text to mismatch with). Verify in a real browser with axe-devtools; if false-positive, leave alone. If real, add an `sr-only` span containing "Call" so visible accessible name aligns with aria-label.

Neither is launch-blocking but both are easy fixes.

---

## Critical Issues (fix immediately)

None. No issue blocks indexing or breaks core SEO mechanics.

## High Priority (fix before deploy)

1. **Add canonical to home page** — `src/app/page.tsx` add `export const metadata: Metadata = { alternates: { canonical: "/" } };` (10s edit, prevents Google guessing the canonical).
2. **Ship security headers** — add `headers()` block to `next.config.ts` (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy). Snippet above.
3. **Update `docs/seo/redirect-map.md`** to reflect 164 redirects (not 165).
4. **Re-run Lighthouse on prod build** (`next build && next start`) and confirm LCP < 2.5s, TBT < 200ms.

## Medium Priority (within 1 week of launch)

5. **Fix footer color-contrast** (`text-cream/40` → `text-cream/60`).
6. **Verify or fix header phone-icon label mismatch** (manual axe-devtools check).
7. **Bump header touch targets** from 40px to 44–48px for stricter mobile usability.
8. **Validate schema** via Google Rich Results Test on every page type once live.
9. **Generate OG images** — `og:image` is currently unset site-wide; spawn `claude-seo:seo-image-gen` to produce 1 OG per top-level route.
10. **Expand suburb hub copy** from ~450 to ~550 words per page (one extra paragraph of local-substrate context or a short served-vignette).

## Low Priority (backlog)

11. **CSP** — design a working Content-Security-Policy with nonce-based inline-script handling for Turbopack.
12. **IndexNow** — implement IndexNow for Bing/Yandex fast indexing post-launch (after first 30 days of real traffic).
13. **`/llms-full.txt`** — optional single-file concatenated content for AI ingestion convenience.
14. **Place schema** on suburb hubs with `containedInPlace` reference to Sunshine Coast.
15. **HSTS preload submission** — submit to https://hstspreload.org after 30+ days of clean HTTPS.
16. **CrUX field-data check at day 28** post-launch to confirm real-user metrics match lab projections.

---

## Out-of-scope for this audit (Phase 5 follow-ups)

- Lighthouse re-run on prod build (above)
- OG image generation via `claude-seo:seo-image-gen`
- Schema rich-results validator pass once live
- DNS cutover + post-launch redirect spot-check
- Real form delivery wired into the two Server Actions
