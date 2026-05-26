# Migration redirect map

Source of truth: `src/lib/redirects.ts` (imported by `next.config.ts`).
This doc is the human-readable view + deploy-time checklist.

## Why

Brief §20 risk: "consolidating 48 suburb pages without a proper redirect plan would tank current rankings". The old WordPress site shipped 106 indexable URLs across four overlapping URL conventions (`/painters-in-X`, `/exterior-house-painter-in-X`, `/interior-painting-in-X`, `/high-end-project-painters-in-X`) plus bare `/X` suburbs. This map sends every one of them to its best new equivalent so existing link equity transfers cleanly.

## What

**164 explicit 301-class redirects** (Next.js returns HTTP 308, which preserves the request method and passes link equity identically to a 301 for search engines).

| Destination | Redirect count | Notes |
|---|---|---|
| `/locations/caloundra` | 25 | Catches the cluster of south-coast off-list suburbs (bells-creek, currimundi, pelican-waters, parklands, corbould-park) plus Caloundra's own variants |
| `/locations/kawana` | 19 | Coast band (Warana, Twin Waters, Maroochydore) |
| `/locations/forest-glen` | 18 | Inland north (Nambour, Woombye, Bli Bli) |
| `/services/boutique-house-painting` | 14 | All `/high-end-project-painters-in-X` URLs + `/high-end-project-painters` + `/category/high-end-project-painters` |
| `/locations` | 10 | Region-wide URLs + unknown-suburb fallbacks |
| `/locations/glasshouse-mountains` | 10 | Landsborough + own variants |
| `/locations/sippy-downs` | 9 | Mountain Creek + own variants |
| `/locations/aura` | 9 | Nirimba + own variants |
| `/testimonials` | 6 | All `/wpt-testimonial/{slug}` legacy URLs |
| `/locations/maleny` | 6 | Own variants + typo `maleney` |
| `/locations/{buderim,coolum,noosa,peregian,sunshine-beach}` | 5 each | Own URL conventions only |
| `/services` | 3 | `/painters`, `/category/house-painter`, `/category/painters` |
| `/` | 3 | Region-wide search URLs (`/house-painter-near-me`, `/house-painter-in-sunshine-coast-region-qld`, `/painters-on-the-sunshine-coast-region-qld`) |
| `/services#{residential,commercial,industrial,interior,exterior}` | 1 each | Legacy service lines, anchored on `/services` index |
| `/contact#quote` | 1 | `/quote` |
| `/about` | 1 | `/about-us` |

## Coverage check

All 106 URLs from the live WordPress sitemap resolve through the redirect map to a real new page (HTTP 200 after redirect). Verified by `for url in $(cat /tmp/old-urls.txt); do curl -sIL "$BASE$url" | head -1; done` against `localhost:3000`.

## Mapping logic by URL pattern

### Top-level pages
| Old | New |
|---|---|
| `/about-us` | `/about` |
| `/contact` | `/contact` (no change) |
| `/quote` | `/contact#quote` |
| `/painters` | `/services` |
| `/house-painter-near-me`, `/house-painter-in-sunshine-coast-region-qld`, `/painters-on-the-sunshine-coast-region-qld` | `/` |

### Service-line pages
| Old | New |
|---|---|
| `/high-end-project-painters` | `/services/boutique-house-painting` |
| `/residential` | `/services#residential` |
| `/commercial` | `/services#commercial` |
| `/industrial` | `/services#industrial` |
| `/high-end-project-painters-in-{suburb}` (× 12) | `/services/boutique-house-painting` |

### Suburb conventions → `/locations/{suburb}`
For each of the 12 in-list suburbs (Buderim, Caloundra, Coolum, Forest Glen, Glasshouse Mountains, Kawana, Maleny, Noosa, Peregian, Sippy Downs, Sunshine Beach, Aura):

- `/{suburb}` → `/locations/{suburb}`
- `/painters-in-{suburb}` → `/locations/{suburb}`
- `/exterior-house-painter-in-{suburb}` → `/locations/{suburb}`
- `/exterior-house-painters-in-{suburb}` → `/locations/{suburb}`
- `/interior-painting-in-{suburb}` → `/locations/{suburb}`

### Off-list suburbs → nearest neighbour hub
The original site ran 14 URLs naming suburbs we don't carry as hubs. Each maps to its nearest hub:

| Off-list suburb | Mapped to | Reasoning |
|---|---|---|
| Bells Creek | Caloundra | South coast |
| Bli Bli | Forest Glen | Inland mid-coast |
| Corbould Park | Caloundra | South coast |
| Currimundi | Caloundra | Caloundra-Kawana corridor |
| Landsborough | Glasshouse Mountains | South hinterland |
| Maroochydore | Kawana | Mid-coast |
| Mountain Creek | Sippy Downs | West-of-Mooloolaba |
| Nambour | Forest Glen | Inland north |
| Nirimba | Aura | Adjacent (within Aura precinct) |
| Parklands | Caloundra | South coast |
| Pelican Waters | Caloundra | South of CBD |
| Twin Waters | Kawana | Mid-coast |
| Warana | Kawana | Kawana suburb |
| Woombye | Forest Glen | Inland north |

### Unknown-suburb legacy URLs
Two URLs (`/house-painting-in-brews`, `/house-painting-in-cartwright-point`) name suburbs we can't confidently place — probably typos or extremely-local nicknames. Mapped to `/locations` index instead of guessing wrong.

### Testimonial detail pages
Six `/wpt-testimonial/{slug}` URLs (Alan Cameron, Garry and Jeannette, Grant McDonald, Happy Customer, Lindsay Woods, Phil Osborne). All redirect to `/testimonials`.

### Category archives
Five `/category/{X}` URLs from WordPress's taxonomy:
- `/category/exterior-house-painters` → `/services#exterior`
- `/category/high-end-project-painters` → `/services/boutique-house-painting`
- `/category/house-painter` → `/services`
- `/category/interior-painting` → `/services#interior`
- `/category/painters` → `/services`

## Deploy checklist

- [ ] Confirm `next.config.ts` ships the redirects on the Vercel deploy. Vercel applies Next's `redirects()` at the edge — no extra config needed.
- [ ] Within 24h of go-live, request indexing of the new sitemap in Google Search Console.
- [ ] Spot-check 10–20 redirects against the live domain (not localhost) within an hour of deploy.
- [ ] Monitor Search Console for 90 days post-launch: watch for "Page with redirect" counts climbing (expected, signals Google crawling the old URLs) and "Not found (404)" climbing (unexpected, signals a missed pattern).
- [ ] If any backlinks point at the original site outside this URL inventory (check via `claude-seo:seo-backlinks`), add explicit redirects.

## Maintenance

When new suburbs join `SUBURBS` in `src/lib/brand.ts`, the generators in `src/lib/redirects.ts` automatically extend the in-list patterns. No further work needed.

When `/services` index, `/testimonials`, `/blog`, or `/for-agents` pages ship, update the explicit redirect block in `src/lib/redirects.ts` to land legacy URLs on the new pages instead of `/`.

When the client reports a legacy backlink not in this list, add an entry to the `explicit` array.
