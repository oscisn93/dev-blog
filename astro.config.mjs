import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "http://localhost:4321",
  integrations: [tailwind(), mdx()],
});