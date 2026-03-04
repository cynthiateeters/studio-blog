// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://hap-studio-blog.netlify.app/',
  integrations: [
    sitemap(),
    expressiveCode({
      themes: ['min-light'],
      styleOverrides: {
        borderRadius: '0.5rem',
        codeFontFamily: 'var(--font-mono)'
      }
    }),
    mdx()
  ],
  build: {
    assets: 'assets'
  },
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ]
  }
});
