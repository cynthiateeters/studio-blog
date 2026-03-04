// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://hap-studio-blog.netlify.app/',
  integrations: [sitemap(), mdx()],
  build: {
    assets: 'assets'
  },
  markdown: {
    shikiConfig: {
      theme: 'min-light',
      langs: ['html', 'css', 'javascript', 'json', 'markdown', 'bash', 'text'],
      wrap: true
    },
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ]
  }
});
