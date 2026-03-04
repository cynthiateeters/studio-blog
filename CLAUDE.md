# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project overview

**HyBit Studio** - Cynthia Teeters' blog on AI-augmented curriculum for web developers. Built with Astro using content collections.

## Commands

```bash
bun install          # Install dependencies (run first!)
bun run dev          # Start dev server at localhost:4321
bun run build        # Production build to dist/
bun run preview      # Preview production build
```

## Architecture

### Content collections

Blog posts are stored in `src/content/blog/` as markdown files with frontmatter:

```yaml
---
title: "Post Title"
subtitle: "Optional subtitle"
description: "SEO description"
pubDate: 2026-03-01
updatedDate: 2026-03-02 # optional
category: tutorials | tips | stories | announcements
heroImage: "url" # optional
draft: false # optional
---
```

### Layout hierarchy

```text
PostLayout.astro (single posts)
    └── MainLayout.astro
        ├── Header.astro
        ├── <slot />
        └── Footer.astro
```

### Key files

| File                                    | Purpose                   |
| --------------------------------------- | ------------------------- |
| `src/content.config.ts`                 | Content collection schema |
| `src/pages/blog/[slug].astro`           | Dynamic post pages        |
| `src/pages/categories/[category].astro` | Category filtering        |
| `src/components/PostCard.astro`         | Post listing cards        |
| `src/components/CategoryNav.astro`      | Category navigation pills |

## Content voice

Write in Cynthia's voice as an educator and practitioner:

- First-person, professional but approachable
- Focus on practical insights and teaching experience
- Reference real classroom scenarios and student interactions
- Emphasize process, context, and transparency with AI tools

## Categories

| Category      | Use for                                         |
| ------------- | ----------------------------------------------- |
| tutorials     | Step-by-step guides, lessons, how-to content    |
| tips          | Quick insights, shortcuts, best practices       |
| stories       | Narratives, case studies, classroom experiences |
| announcements | News, updates, course information               |

## CSS requirements

**All colors must use HSL format** - never hex or rgb.

Use "CSS custom property" terminology, never "CSS variable".

## No tables in blog posts

**Never use markdown tables in blog content** - they are not responsive. Use these components instead:

- `InfoCards` - Multi-attribute data (tool lists, file references, categorized info)
- `DataList` - Key-value pairs (stats, definitions, settings)
- `ComparisonGrid` - Side-by-side comparisons (two approaches, before/after)
- `Callout` - Tips, warnings, notes (use instead of blockquotes for important info)

Posts using components must be `.mdx` files with imports at the top.

## Adding a new post

1. Create `src/content/blog/your-post-slug.md`
2. Add required frontmatter (title, description, pubDate, category)
3. Write content in Cynthia's educator voice
4. Run `bun run build` to verify

## Deployment

Site deploys to Netlify. Use branches to test before production:

```bash
# Create a test branch
git checkout -b test/my-feature

# Push to get a preview deploy
git push -u origin test/my-feature
# Preview URL: test-my-feature--hybit-studio.netlify.app

# When ready, merge to main for production
git checkout main
git merge test/my-feature
git push
```

**Deploy contexts:**

- `main` branch → Production (hybit-studio.netlify.app)
- Other branches → Branch deploy (branch-name--hybit-studio.netlify.app)
- Pull requests → Deploy preview (deploy-preview-N--hybit-studio.netlify.app)

## Copyright

All content is owned by Cynthia Teeters.
