# Anti-Generic Guardrails

Used throughout all build phases. Referenced from [`CLAUDE.md`](../CLAUDE.md) > Design System.

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Derive from the client's brand.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Different fonts for headings and body. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth when appropriate.
- **Spacing:** Use intentional, consistent spacing tokens. Not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base, elevated, floating), not all sit at the same z-plane.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Images:** Showcase real work everywhere. Add a gradient overlay and a color treatment layer with `mix-blend-multiply` where appropriate. See [`accepted-image.md`](accepted-image.md) for full image layout rules.
- **No pill-style tags/badges:** Never use small rounded-full/pill-shaped labels above headings (e.g., "Our Services", "Why Choose Us", "About Us"). These are the hallmark of generic AI-generated sites. Instead, differentiate sections through layout, typography hierarchy, spacing, or subtle design elements like accent lines, brand-colored borders, or typographic treatments. If a section needs a label, integrate it as part of the heading design itself (e.g., a smaller uppercase line with heavy letter-spacing above the heading, separated by a short accent bar or brand-colored rule), not as a floating pill.