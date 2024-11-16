import mdx from "@astrojs/mdx"
import svelte from "@astrojs/svelte"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: 'https://naotor.github.io',
  integrations: [mdx(), svelte()],
});