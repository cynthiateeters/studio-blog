# HyBit Studio

Cynthia Teeters' blog on AI-augmented curriculum for web developers. Astro + MDX + Netlify.

## Commands

```bash
bun install       # Install dependencies
bun run dev       # Dev server → localhost:4321
bun run build     # Build to dist/
bun run preview   # Preview build
```

## Critical rules

- **CSS colors**: HSL only, never hex/rgb. Say "CSS custom property" not "variable"
- **No markdown tables in posts** — not responsive. Use MDX components instead:
  - `InfoCards` — multi-attribute data
  - `DataList` — key-value pairs
  - `ComparisonGrid` — side-by-side comparisons
  - `Callout` — tips, warnings, notes (replaces blockquotes)
- **Voice**: First-person educator, professional but approachable, practical insights

## Blog post frontmatter

```yaml
---
title: "Post Title"
description: "SEO description"
pubDate: 2026-03-01
category: tutorials | tips | stories | announcements
# Optional: subtitle, updatedDate, heroImage, draft
---
```

Posts with components → `.mdx` with imports at top.

## Key paths

- `src/content/blog/` — posts
- `src/content.config.ts` — schema
- `src/components/` — Astro components
- `src/layouts/PostLayout.astro` → `MainLayout.astro`

## Deployment

Netlify auto-deploys. Test with branches before production:

- `main` → Production (hybit-studio.netlify.app)
- Other branches → `branch--hybit-studio.netlify.app`
- PRs → `deploy-preview-N--hybit-studio.netlify.app`

## Copyright

All content owned by Cynthia Teeters.
