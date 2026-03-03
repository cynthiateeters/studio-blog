// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hap-studio-blog.netlify.app/',
  integrations: [sitemap()],
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
