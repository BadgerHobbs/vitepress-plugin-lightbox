<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;

import { onMounted } from "vue";
import mediumZoom from "medium-zoom";
onMounted(() => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
});
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
