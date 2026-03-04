# HyBit Studio

Cynthia Teeters' blog on AI-augmented curriculum for web developers. Built with [Astro](https://astro.build) using content collections.

## Beginner's guide

### Prerequisites

- [Bun](https://bun.sh/) v1.0 or higher (or Node.js v18+ with npm)

### Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/cynthiateeters/studio-blog.git
   cd studio-blog
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun run dev
   ```

4. Open your browser to [http://localhost:4321](http://localhost:4321)

### Available commands

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `bun run dev`     | Start dev server at localhost:4321 |
| `bun run build`   | Build production site to `dist/`   |
| `bun run preview` | Preview production build locally   |

## Features

- **Code highlighting with copy buttons** — powered by astro-expressive-code with line highlighting and file names
- **Heading anchor links** — click any heading to get a shareable URL (rehype-slug + rehype-autolink-headings)
- **RSS feed** — subscribe at `/rss.xml`
- **Sitemap** — auto-generated for SEO
- **MDX support** — use components in blog posts

## Project structure

```text
src/
├── components/        # Reusable Astro components
├── content/
│   └── blog/          # Markdown blog posts
├── layouts/           # Page layout templates
├── pages/             # Route pages
└── styles/            # Global CSS
public/                # Static assets (fonts, images)
```

## Adding a blog post

1. Create a new markdown file in `src/content/blog/`:

   ```bash
   touch src/content/blog/your-post-slug.md
   ```

2. Add the required frontmatter:

   ```yaml
   ---
   title: "Your post title"
   description: "Brief description for SEO"
   pubDate: 2026-03-03
   category: tutorials
   ---
   ```

3. Write your content below the frontmatter

4. Verify with `bun run build`

### Categories

- **tutorials** - Step-by-step guides and how-to content
- **tips** - Quick insights and best practices
- **stories** - Narratives and classroom experiences
- **announcements** - News and updates

## Contributing

Found an error or have a question? See [CONTRIBUTING.md](CONTRIBUTING.md) for how to report issues.

## License

Copyright (c) 2026 Cynthia Teeters. All rights reserved.

This repository contains proprietary content. See [LICENSE](LICENSE) for terms.

HyBit Studio™ and HyBit™ are trademarks of Cynthia Teeters. See [TRADEMARK](TRADEMARK) for usage guidelines.
