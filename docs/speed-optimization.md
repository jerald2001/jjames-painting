# Speed Optimization Process

Applied in Phase 5 (SEO & Polish). Referenced from [`CLAUDE.md`](../CLAUDE.md) > Build Phases and [`PLAN.md`](../PLAN.md) > Phase 5 > Speed Optimization.

Keep these principles throughout the build:

- Lazy-load all images below the fold (WordPress native lazy loading + `loading="lazy"`).
- Use responsive images with `srcset` and `sizes` attributes via `wp_get_attachment_image()`.
- Serve WebP/AVIF via image optimization plugin.
- Remove unused CSS/JS. Only enqueue what each page needs.
- Minimize client-side JavaScript. Keep it lean and vanilla where possible.
- Preload critical fonts. Set `font-display: swap` in `@font-face` declarations.
- Enable page caching via caching plugin.
- Minify CSS and JS in production (via build step or caching plugin).
- Defer non-critical JS. Async where possible.
- Keep the theme lean. No unused template files, no dead code, no bloated dependencies.
