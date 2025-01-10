import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  server: {
    port: 3000
  },
  site: "http://localhost:3000",
  integrations: [tailwind(), mdx()],
});
