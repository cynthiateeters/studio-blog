// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

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
    }
  }
});
