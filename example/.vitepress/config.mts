import { defineConfig } from "vitepress";
import dotenv from "dotenv";

dotenv.config();

// Import lightbox diagram plugin
import lightbox from "vitepress-plugin-lightbox";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Plugin Lightbox",
  description: "VitePress lightbox plugin example site.",
  base: process.env.BASE_PATH || "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: "Made with ❤️ by Andrew Riggs • Released under the MIT License",
    },
    search: {
      provider: "local",
    },
    nav: [{ text: "Examples", link: "/" }],
    sidebar: [
      {
        text: "Examples",
        items: [{ text: "Lightbox Image Examples", link: "/" }],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/BadgerHobbs/vitepress-plugin-lightbox",
      },
    ],
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
});
