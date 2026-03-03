# HyBit Studio

Cynthia Teeters' blog on AI-augmented curriculum for web developers. Built with [Astro](https://astro.build) using content collections.

## Beginner's guide

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/cynthiateeters/studio-blog.git
   cd studio-blog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser to [http://localhost:4321](http://localhost:4321)

### Available commands

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start dev server at localhost:4321 |
| `npm run build`   | Build production site to `dist/`   |
| `npm run preview` | Preview production build locally   |

## Project structure

```
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

4. Verify with `npm run build`

### Categories

- **tutorials** - Step-by-step guides and how-to content
- **tips** - Quick insights and best practices
- **stories** - Narratives and classroom experiences
- **announcements** - News and updates

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a pull request

## License

MIT License

Copyright (c) 2026 Cynthia Teeters

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
