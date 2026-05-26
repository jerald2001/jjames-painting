# CLAUDE.md — Local Business Website Rebuild
This is a project to rebuild an existing website of a local business. The goal of this project is to have clean UI, better website architecture, improved SEO and overall better conversions.

## Always Do First

1. Read `client-brief/` directory. Start with `client-brief.md` if it exists, then process everything else in the folder. Extract business name, industry, location, services, target audience, pages needed.
2. Read `assets/branding/`. Extract colors from logos, identify reference materials, note any style guides or palettes.
3. Read `copywriting/README.md` for voice and tone rules.
4. Check `PLAN.md` to see which phase you're in.
5. **Invoke the Stitch MCP server** before writing any front-end code. Every session, no exceptions.

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
