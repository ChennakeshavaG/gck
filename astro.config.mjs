// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Final domain. Used for canonical URLs, the sitemap and the RSS feed.
  site: 'https://gck.sh',
  // Every page is plain HTML generated at build time. No server.
  output: 'static',
  integrations: [mdx(), sitemap()],
});
