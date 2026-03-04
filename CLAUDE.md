# HyBit Studio

Cynthia Teeters' blog on AI-augmented curriculum. Astro + MDX + Netlify.

## Commands

```bash
bun install        # Dependencies
bun run dev        # localhost:4321
bun run build      # Build to dist/
bun run preview    # Preview build
bun run check:docs # Validate alignment
```

## Critical rules

- **Voice**: First-person educator, professional but approachable
- **Blog posts**: Always use `.mdx` extension (never `.md`) so global rules apply

## Blog frontmatter

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

- Posts: `src/content/blog/` | Schema: `src/content.config.ts`
- Components: `src/components/` | Layouts: `src/layouts/`

## Deployment

Netlify auto-deploys:

- `main` → hybit-studio.netlify.app
- Branches → `branch--hybit-studio.netlify.app`
- PRs → `deploy-preview-N--hybit-studio.netlify.app`

All content © Cynthia Teeters.
