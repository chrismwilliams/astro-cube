import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-cube.pages.dev",
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false, nesting: true }),
  ]
});
