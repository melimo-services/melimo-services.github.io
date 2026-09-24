import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://melimo-services.github.io",
  base: "/melimo/",
  vite: {
    plugins: [tailwindcss()],
  },
});
