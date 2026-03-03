// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hap-studio-blog.netlify.app/',
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
