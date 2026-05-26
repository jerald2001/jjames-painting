# Layout specs

Section-by-section wireframe specs for the three Phase 2 anchor templates. Each spec defines the layout, content blocks, image patterns, heading hierarchy, schema slots, and internal link targets at a level of detail that the Phase 3 build phase can implement directly from the doc, no Stitch sketch needed.

## Files

| File | Template |
|---|---|
| [`home.md`](home.md) | Homepage |
| [`service-pre-sale.md`](service-pre-sale.md) | House Pre-Sale Painting (priority service template) |
| [`suburb-noosa.md`](suburb-noosa.md) | Noosa (suburb hub template) |

## Anchor selection rationale

These three templates were chosen because they cover the three template patterns the entire site is built from:

- **Home** drives the brand-identity expression. Once it's right, the design language transfers everywhere.
- **House Pre-Sale Painting** is the highest-conversion priority service (audience priority #1 per `docs/seo/strategy.md`). The template it establishes carries to the other three priority service pages (Rental, New Home, Boutique) with content variation.
- **Noosa suburb hub** is the geographic anchor — the suburb most strongly tied to the Boutique + Pre-Sale clusters and the highest-value suburb in the launch wave per `docs/seo/content-calendar.md`. The template carries to the other 11 suburb hubs.

The four suburb-variant pages within Noosa (house-painter, painters, exterior, interior) inherit a sub-template — speced inline at the end of `suburb-noosa.md`.

## Stitch availability

Stitch MCP was unavailable when these specs were written (timeouts + "service unavailable"). The project record is preserved server-side for later use:

```
Stitch project:        projects/14761313292674183431
Stitch design system:  assets/4892509056974446430
Stitch model used:     GEMINI_3_1_PRO (primary), GEMINI_3_FLASH (fallback)
```

When Stitch recovers, layouts can be generated retroactively for variant exploration via `mcp__stitch__generate_screen_from_text` against these IDs. The design system has the full brand DESIGN.md embedded already.

## Reading order

Each spec uses ASCII wireframes as the spatial reference. Section descriptions follow each wireframe block. Read top-to-bottom.

## Guardrail compliance

Every spec is checked against:

- `docs/anti-generic-guardrails.md` — no pill badges, no default Tailwind colors, layered surfaces, tinted shadows, only `transform`/`opacity` animations
- `docs/accepted-image.md` — every content-heavy page uses ≥ 2 image patterns from the approved list
- `copywriting/anti-slop-kill-list.md` — copy stubs in specs are sample/placeholder; Phase 4 content writes the final lines against the anti-slop list
- `CLAUDE.md` — no em-dashes, no emojis, mobile-first, one H1 per page, every interactive element has hover/focus/active, NAP consistent
- `docs/seo/site-structure.md` — per-page primary + secondary keyword targets, internal-linking matrix, schema slot matrix

Anything in a spec that violates these is a bug, not a feature.
