# Original-site image scrape — jjamespaintingcontractorsqld.com.au

Scraped 2026-05-26. Source: WordPress site, Elementor build, RankMath sitemaps.

Method:
1. Pulled all image URLs from `wp-sitemap.xml` children (`page-sitemap.xml`, `service-sitemap.xml`, `category-sitemap.xml`, `wpt-testimonial-sitemap.xml`).
2. Crawled `/`, `/about-us/`, `/high-end-project-painters/`, `/contact-us/` and extracted all `https://.*\.(jpg|jpeg|png|webp|gif|svg)` matches.
3. Filtered out WP-generated size variants (`-WIDTHxHEIGHT` suffix) to keep originals.
4. Downloaded the 31 unique original files into this folder.

## Inventory

### Brand identity (2)

| File | Dimensions | Notes |
|---|---|---|
| `logo.png` | 350×110 | Full header logo: "J.James Painting Contractor" with green paint-can + blue leaf mark. Use only as a reference for the rebrand wordmark; current site type styling is dated. |
| `cropped-logo.png` | 512×512 | Brand mark only — paint can + leaf. Reference for favicon / app-icon evolution. Don't ship; the new brand mark is already in `assets/icons/base/`. |

### Hero banners (4) — Elementor hero rotation

All `1920×600`, WebP, used at top of various service / suburb pages. Currently a left-right split layout (exterior on left, interior on right).

| File | Subject |
|---|---|
| `banner-01.webp` | Two-storey contemporary home exterior at dusk + modern white kitchen |
| `banner-02.webp` | (sampled — appears similar split treatment) |
| `banner-03.webp` | (sampled) |
| `banner-04.webp` | (sampled) |

Quality: usable as full-bleed hero backgrounds at low opacity for the new site IF licensing is in-house. Composition is dated (split-screen), so prefer single-frame photos for the rebuild hero.

### Homepage slider (4) — Elementor carousel

All `1200×400`, WebP. Same split-screen treatment as banners — likely the same pool re-cropped.

| File | Subject |
|---|---|
| `slider-01.webp` | Open-plan living + kitchen interior, split |
| `slider-02.webp` | (sampled — interior variations) |
| `slider-03.webp` | (sampled) |
| `slider-04.webp` | (sampled) |

### Service tile imagery (3)

| File | Dimensions | Subject |
|---|---|---|
| `residential.webp` | 640×316 | Residential 3-frame collage (kitchen + house exterior + living room) |
| `commercial-640w.webp` | 640×316 | Two-storey commercial retail/office building |
| `industry.webp` | 640×316 | Industrial (sampled — likely warehouse / factory exterior) |

### Brand partner logos (4)

| File | Dimensions | Notes |
|---|---|---|
| `dulux.webp` | 340×152 | Dulux "Worth doing, worth Dulux." Use only if entitlement confirmed. |
| `taub.webp` | 340×63 | Taubmans logo. Use only if entitlement confirmed. |
| `builder.webp` | 340×132 | "Builder" partner badge — likely Master Builders QLD or similar. Verify. |
| `visa.webp` | 356×92 | Visa payment-method badge. Drop — not relevant on a quote-form site. |

### Project gallery — real exterior work (12)

Filename pattern: `jjamesdj{1..13}.jpg` (no `jjamesdj6.jpg` exists; site skips that ID). All ~640×427 JPEG, baseline encoding, mid-quality. Subjects are real J. James project exteriors on the Sunshine Coast — single-storey contemporary homes, hipped roofs, gabled entries, neutral palettes.

| File | Subject (verified by visual inspection where noted) |
|---|---|
| `jjamesdj1.jpg` | White single-storey home, dark roof, garage RHS, sloped lawn (verified) |
| `jjamesdj2.jpg` | Project photo (unsampled) |
| `jjamesdj3.jpg` | Project photo (unsampled) |
| `jjamesdj4.jpg` | Project photo (unsampled) |
| `jjamesdj5.jpg` | Project photo (unsampled) |
| `jjamesdj7.jpg` | Project photo (unsampled) |
| `jjamesdj8.jpg` | Project photo (unsampled) |
| `jjamesdj9.jpg` | Project photo (unsampled) |
| `jjamesdj10.jpg` | Project photo (unsampled) |
| `jjamesdj11.jpg` | Project photo (unsampled) |
| `jjamesdj12.jpg` | Project photo (unsampled) |
| `jjamesdj13.jpg` | Project photo (unsampled) |

**Use:** these are the only real, photographed JJames jobs available pre-shoot-day. Best candidates for the projects carousel and bento tiles in the rebuild **if** higher-res originals can be sourced from the client. 640×427 is borderline for hero use on retina displays — request originals.

### Stock photography (2) — uploaded 2026/02

Filename pattern is the Unsplash-style random hash, strongly suggesting these are stock downloads, not real JJames jobs.

| File | Dimensions | Subject |
|---|---|---|
| `dhfuchma6uu.jpg` | 1600×1067 | Team painting a Spanish-tile-roof building (stock — looks European / non-AU) |
| `ioolenqfmqa.jpg` | 1600×1067 | Painter on ladder, Gothic-window white heritage building (stock — clearly UK / not Sunshine Coast) |

**Do not use.** These violate "no fabricated facts" / authenticity for a Sunshine Coast painter. Flag to client that the existing site uses non-AU stock photos for hero content — strong argument for shoot-day investment.

## What's missing

- No team / portrait photos
- No van / signage photos
- No interior project photography (only exterior)
- No before/after pairs
- No suburb-specific photography
- Original-resolution project photos (everything is 640px wide max)

These gaps reinforce Phase 4's case for a real photography day on 3–4 Sunshine Coast projects (per the client brief).

## File-by-page mapping

Most pages on the current site reuse the same image pool. The page→image mapping from the sitemap XML:

- Homepage (`/`): `residential.webp`, `commercial-640w.webp`, `industry.webp`, `dulux.webp`, `taub.webp`, `builder.webp`
- All service hub pages (`/high-end-project-painters/`, `/interior-painting-in-sunshine-coast-region/`, etc.): `banner-02.webp` + full `jjamesdj1-13.jpg` gallery (same set repeated on every page)
- Suburb pages (`/buderim/`, `/maleny/`, etc.): typically reuse the same banner + project gallery

This image-reuse pattern is one of the things the rebuild fixes — unique imagery per service / suburb hub is what differentiates from a generic Elementor build.
