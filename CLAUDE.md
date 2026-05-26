# CLAUDE.md — Local Business Website Template

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

**Priority:** read `client-brief.md` first (primary source of truth), then everything else as supplementary context.

If anything is ambiguous or missing, ask. Do not guess.

## Brand Assets

Everything lives in `assets/branding/` as a flat dump. Claude reads everything in there and figures out what's what.

- If a logo is present, use it. Extract primary/secondary colors from the logo if no palette is provided.
- If a color palette is defined, use those exact values. Do not invent brand colors.
- If reference materials exist (flyers, screenshots, existing collateral), use them.
- Never use placeholders where real assets are available.

### Icons

- `assets/icons/base/` — base icon library (checkmarks, arrows, phone, location, clock, etc.). Generated in Phase 1 using the web-asset-generator skill.
- `assets/icons/industry/` — industry-specific icons generated in Phase 2 using web-asset-generator.
- No emojis. Ever. Use generated icons instead.

## Copywriting

All copy rules live in `copywriting/README.md`. Read it before writing any user-facing text.

**Quick reference:**
- Brand voice: friendly professional, casual, confident, direct. No swearing.
- Every piece of copy is checked against `copywriting/anti-slop-kill-list.md`. If a banned word or pattern appears, the copy fails.
- No em-dashes. No emojis. Use contractions. Vary sentence length.
- Reading level: 5th-6th grade.
- Run the three-line sanity check on every page before shipping.

## Design System

Colors and typography are derived per-client from their branding. Nothing is hardcoded here.

### Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Derive from the client's brand.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Different fonts for headings and body. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth when appropriate.
- **Spacing:** Use intentional, consistent spacing tokens. Not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base, elevated, floating), not all sit at the same z-plane.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Images:** Add a gradient overlay and a color treatment layer with `mix-blend-multiply` where appropriate.

## Build Phases

See `PLAN.md` for the full phased build process. Summary:

1. **Discovery & Setup** — process client brief, extract branding, initialize project
2. **Layout via Stitch** — generate and approve layouts before coding
3. **Build** — code pages from approved layouts, mobile-first
4. **Content & Copy** — write copy, anti-slop check, replace placeholders
5. **Polish & Deploy** — SEO, speed optimization, Lighthouse 90+, deploy to Vercel

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
