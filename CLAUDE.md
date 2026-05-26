# CLAUDE.md — J. James Painting Contractors rebuild

Sunshine Coast painting business, family-run since 1985 (formerly Hume and Staff Painters). Domain: `jjamespaintingcontractorsqld.com.au`. Repositioning around four signature service lines (rental, pre-sale, new-home, boutique) plus the legacy residential/commercial/industrial work.

---

## Current project status

**Last updated:** 2026-05-26. Update this block when you finish a meaningful unit of work.

### Phase status

| Phase | Status |
|---|---|
| 1. Discovery & Setup | ✅ Done |
| 2. Layout via Stitch | ✅ Done |
| 3. Build | ✅ Done |
| 4. Content & Copy | ✅ Done (client-side content gaps remain — see "Client-confirm holds") |
| 5. SEO & Polish | 🟡 Infra done, audits pending (see "Phase 5 remaining") |
| 6. Deploy & Verify | ⬜ Not started |

### Pages built (12 top-level routes, 37 sitemap URLs)

| Route | Notes |
|---|---|
| `/` | Home, 10 sections, 1,385 words. LocalBusiness + Organization + WebSite schema. |
| `/about` | Hero + timeline + Jamie James team card + qualifications + brand partners + CTA. AboutPage + Person schema. |
| `/contact` | Quote form with conditional fields per service + sidebar. Placeholder Server Action (`JJ-` reference prefix). ContactPage schema. |
| `/for-agents` | B2B referral landing per brief §9.5. Partner form with **separate Server Action** (`JJA-` prefix). |
| `/services` | Index with 4 priority cards + 8 legacy anchor cards. |
| `/services/[slug]` × 4 | Pre-sale, rental, new-home, boutique. 1,150–1,500 words each. Service + FAQPage + BreadcrumbList. |
| `/projects` | Index of 12 placeholders. |
| `/projects/[slug]` × 12 | "Case study coming soon" + sidebar with suburb/scope/service. |
| `/locations` | Index grouped Coast / Hinterland. |
| `/locations/[slug]` × 12 | Hand-written per-suburb localContext + substrateNotes (no template slop). |
| `/testimonials` | Sample-banner placeholder + Google reviews link. |
| `/privacy-policy` | 10-section APP-aligned policy. |

**Zero footer 404s.** Every nav and footer link resolves with HTTP 200.

### Data sources of truth

- `src/lib/brand.ts` — NAP, BUSINESS const, SUBURBS list, PRIORITY_SERVICES, LEGACY_SERVICES, TRUST_RAIL
- `src/content/services.ts` — per-priority-service content (hero, intro, ROI, process, FAQ, etc.)
- `src/content/projects.ts` — master 12-project list (consumed by carousel + service pages + project routes)
- `src/content/suburbs.ts` — per-suburb hub content (localContext, substrateNotes, servicePriority, projectSlugs, ctaLine)
- `src/lib/redirects.ts` — 165 migration redirects from the old WP site
- `src/app/sitemap.ts` — auto-regenerates the XML sitemap from all of the above

### SEO infrastructure shipped

- `public/robots.txt` — explicit allow for 6 search-time AI crawlers (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended); disallow for training-only (CCBot, anthropic-ai, Bytespider)
- `public/llms.txt` — markdown index for AI crawlers (services, suburbs, about, contact, for-agents, reviews, legal)
- `src/app/sitemap.ts` → `/sitemap.xml` (37 URLs)
- 301-class migration redirect map — 165 redirects covering all 106 legacy URLs (verified 100% coverage). See `docs/seo/redirect-map.md`.
- Schema graph: LocalBusiness, Organization, WebSite, Service, FAQPage, BreadcrumbList, Person, AboutPage, ContactPage all emit correctly

### Audit reports

- `docs/seo/phase4-content-audit.md` — content quality 78/100 avg, E-E-A-T 44/100 floor
- `docs/seo/phase4-geo-audit.md` — GEO readiness 47/100 (lifts to ~75 with verified GBP + LinkedIn presence)
- `docs/seo/redirect-map.md` — human-readable redirect map + deploy checklist

### Client-confirm holds (do not fill in without explicit client direction)

| Item | Where | Action |
|---|---|---|
| Trust rail copy | `src/lib/brand.ts` `TRUST_RAIL` | Held per user direction |
| Jamie's full name | `src/app/about/page.tsx` `JAMIE` const | Currently "Jamie James" — confirm or correct |
| Founder's first name | `/about` 1985 timeline cell | Omitted; brief only confirms "Hume and Staff Painters" trading name |
| Email, ABN, QBCC license, social URLs | `src/lib/brand.ts` `BUSINESS` | Empty strings, conditionally hidden site-wide |
| Dulux + Taubmans accreditation badges | About page + footer + trust rail | Entitlement check pending per brief §20 open Qs |
| Real testimonials with consent | `/testimonials`, home testimonials section | Sample banners in place — swap when consent paperwork lands |
| Original case-study photos | All 12 `/projects/[slug]` | Photography day pending |

### Phase 5 remaining

- OG / Twitter image assets (1200×630) — generate via `claude-seo:seo-image-gen`
- `claude-seo:seo-technical` audit — crawlability, security headers, INP
- Schema rich-results validator pass
- Lighthouse 90+ on all four scores
- `/blog` + `/blog/[slug]` (brief §9.7 — 6 launch posts, then 2/month)
- Real photography (client-side blocker)

### Phase 6 readiness

- Vercel deploy
- Wire real form delivery (Resend or equivalent) at the two swap-points: `src/app/contact/actions.ts` and `src/app/for-agents/actions.ts`
- Submit `/sitemap.xml` to GSC
- Capture SEO drift baseline via `claude-seo:seo-drift`
- Verify GBP NAP matches site

---

## Always Do First (per session)

### Every session
1. Read this CLAUDE.md status block (above) to see what's done.
2. Check `git log --oneline -10` to see what shipped recently.
3. Read `PLAN.md` if you're working a specific phase task.

### Read on demand (when the task touches the area)
4. `client-brief/jjames-painting-website-brief.md` — business context, audiences, positioning, sitemap intent, brand priorities. Read when changing scope, copy direction, or service positioning.
5. `assets/branding/` — logo and colour reference. Read when touching colours, the wordmark, or generating new visual assets.
6. `copywriting/README.md` — voice characteristics, contractions, word swaps, three-line sanity check, kitchen-table test. Read before writing or editing any user-facing text.
7. `copywriting/anti-slop-kill-list.md` — banned words and patterns. Same read trigger as the README; the kill list is the enforcement counterpart.

### Tool-specific
8. **Stitch MCP** is only required before writing *new* front-end (new page templates, new section types). For copy edits, audits, or polish on existing sections, skip it.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (lean) / React 19 / TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Fonts | Self-hosted via `next/font/local` (defined per client) |
| Icons | Generated via web-asset-generator skill. No emojis. |
| Layout Generation | Google Stitch MCP server |
| Screenshots & Testing | Playwright MCP server |
| SEO | claude-seo skill suite (see SEO Workflow below) |
| Hosting | Vercel |

No heavy animation libraries by default. Only add Framer Motion if a specific client needs it.

## Stitch MCP Workflow

1. Invoke Stitch to generate full page layouts based on client brief and branding.
2. Present layout options to the user.
3. Review the chosen layout against client branding and copywriting rules.
4. Code the final version, applying brand colors, typography, voice, and anti-slop checks.

Stitch is the architect's sketch. You are the builder. Stitch output is never shipped as-is.

## Client Brief

All client intel lives in `client-brief/`. See `client-brief/README.md` for processing instructions.

If anything is ambiguous or missing, ask. Do not guess.

## Brand Assets

Everything lives in `assets/branding/` as a flat dump. Claude reads everything in there and figures out what's what.

- If a logo is present, use it. Extract primary/secondary colors from the logo if no palette is provided.
- If a color palette is defined, use those exact values. However, check during brainstorming if I want to consider new color palletes.

### Icons

- `assets/icons/base/` — base icon library (checkmarks, arrows, phone, location, clock, etc.). Generated in Phase 1 using the web-asset-generator skill.
- `assets/icons/industry/` — industry-specific icons generated in Phase 2 using web-asset-generator.
- No emojis. Ever. Use generated icons instead.

## Copywriting

All copy rules live in `copywriting/anti-slop-kill-list.md`. Read it before writing any user-facing text.

## Image & Visual Showcase Strategy

- Every content-heavy page MUST break up text with images displayed in unique, attention-grabbing layouts. This is mandatory, not optional. If a page has more than two consecutive text-only sections, it fails review.
- All acceptable image layouts live in [`docs/accepted-image.md`](docs/accepted-image.md).

## Design System

- Refer to the docs in `client-brief/` if there is any design preferred by the client.
- Always use visual companion to show the direction of the design before doing any code.

### Anti-Generic Guardrails

Read through [`docs/anti-generic-guardrails.md`](docs/anti-generic-guardrails.md).

## Build Phases

See `PLAN.md` for the full phased build process. Summary:

1. **Discovery & Setup** — process client brief, extract branding, initialize project. Run `claude-seo:seo-plan` to generate keyword strategy and content architecture.
2. **Layout via Stitch** — generate and approve layouts before coding. Incorporate SEO plan outputs (page hierarchy, internal linking structure).
3. **Build** — code pages from approved layouts, mobile-first. Add schema markup as you build each page (`claude-seo:seo-schema`).
4. **Content & Copy** — write copy, anti-slop check, replace placeholders. Run `claude-seo:seo-content` on each page for E-E-A-T and readability.
5. **SEO & Polish** — run the full SEO audit suite (see SEO Workflow below), speed optimization, Lighthouse 90+.
6. **Deploy & Verify** — deploy to Vercel, run `claude-seo:seo-drift` baseline, verify with `claude-seo:seo-google`.

Do not skip phases. Confirm with the user before moving to the next phase.

## Screenshot & Testing Workflow

- Use Playwright MCP server for all screenshots and browser testing.
- Always screenshot from localhost. Never `file:///` URLs.
- Start the dev server before taking screenshots. If it's already running, don't start a second instance.
- After screenshotting, read the PNG with the Read tool. Claude can see and analyze the image directly.
- When comparing against reference or approved layouts, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px."
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing.

## Speed Optimization

Applied in Phase 5, but keep these principles throughout the build:

- Lazy-load all images below the fold.
- Use Next.js Image component with proper `sizes` and formats (WebP/AVIF).
- Remove unused CSS/JS. Tree-shake dependencies.
- Minimize client-side JavaScript. Prefer server components.
- Code splitting per route.
- Preload critical fonts. Set `font-display: swap`.
- Check bundle size. Flag anything over 100kb.
- Keep the bundle lean. No unused imports, no dead code, no bloated dependencies.

## SEO Workflow

- **Process:** [`docs/seo/seo-workflow.md`](docs/seo/seo-workflow.md) — skill invocation by phase, local SEO priorities, on-page checklist.
- **Google guidelines:** [`docs/seo/google-search-guidelines-summary.md`](docs/seo/google-search-guidelines-summary.md) — official Google Search docs summary. Consult throughout every build phase.


## Hard Rules

- No em-dashes in user-facing copy
- No emojis anywhere
- No fabricated facts
- No default Tailwind colors as primary
- No `transition-all`
- No unused imports, no dead code, no bloated dependencies
- Every clickable element gets hover, focus-visible, and active states
- No competing CTAs near embedded iframes or widgets
- Invoke Stitch MCP before writing any front-end code
- Read client-brief/ and assets/branding/ before designing anything
- Do not add sections, features, or content not discussed with the user
- Mobile-first responsive on every page
- Every page must have LocalBusiness schema (invoke `claude-seo:seo-schema`)
- No page without a unique title tag and meta description
- Run `claude-seo:seo-plan` in Phase 1 before writing any content
- Run `claude-seo:seo-page` on every page before marking it complete
- NAP must be consistent site-wide and match Google Business Profile
- No orphan pages — every page must have at least one internal link pointing to it
- No CTA banners without a background image or video — colored boxes with text are not CTAs
- No pill-style badges or tags anywhere. No `rounded-full` labels above section headings. These are generic AI tells.
- Every content-heavy page must use at least 2 different image layout patterns. No walls of text without visual breaks.
