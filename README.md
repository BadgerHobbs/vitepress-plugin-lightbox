# vitepress-plugin-lightbox

[![Publish to NPM](https://github.com/BadgerHobbs/vitepress-plugin-lightbox/actions/workflows/publish.yml/badge.svg)](https://github.com/BadgerHobbs/vitepress-plugin-lightbox/actions/workflows/publish.yml) [![Deploy Example](https://github.com/BadgerHobbs/vitepress-plugin-lightbox/actions/workflows/deploy-example.yml/badge.svg)](https://github.com/BadgerHobbs/vitepress-plugin-lightbox/actions/workflows/deploy-example.yml)

Plugin for VitePress to add support for viewing images in lightboxes, you can check out the example site [here](https://badgerhobbs.github.io/vitepress-plugin-lightbox/). It is also available on [NPM](https://www.npmjs.com/package/vitepress-plugin-lightbox).

![vitepress-plugin-lightbox](https://github.com/BadgerHobbs/vitepress-plugin-lightbox/assets/23462440/d52b5ca7-2062-407e-9e0b-ae0d85d31e2c)

This plugin is built using the [medium-zoom](https://github.com/francoischalifour/medium-zoom) package.

## Installation

First, install the plugin from NPM.

```bash
npm install -D vitepress-plugin-lightbox
```

Then import it and update your VitePress `config.mts` file to use the plugin as shown below.

```ts
import { defineConfig } from "vitepress";

// Import lightbox plugin
import lightbox from "vitepress-plugin-lightbox"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs",
  description: "my docs",
  cleanUrls: true,
  themeConfig: {
    ...
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
});
```

Now create the `.vitepress/theme` directory, and add the following two files.

`.vitepress/theme/index.ts`

```ts
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
};
```

`.vitepress/theme/Layout.vue`

```ts
<script setup>
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";
import { useRouter } from "vitepress";
import mediumZoom from "medium-zoom";

const { Layout } = DefaultTheme;
const router = useRouter();

// Setup medium zoom with the desired options
const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

// Apply medium zoom on load
onMounted(setupMediumZoom);

// Subscribe to route changes to re-apply medium zoom effect
router.onAfterRouteChanged = setupMediumZoom;
</script>

<template>
  <Layout />
</template>

<style>
.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}
</style>
```

## Usage

When you add images to your markdown files, like the example below, they are now can automatically be clicked to view in a lightbox. See the `/example` directory within the repository for a full working example of how to use the plugin with VitePress.

```md
![image-1.0b9fa00a.jpg](./images/image-1.0b9fa00a.jpg)
```

To view working examples deployed within a VitePress static site instance, you can checkout the repository example deployed via GitHub pages [here](https://badgerhobbs.github.io/vitepress-plugin-d2/).

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).
