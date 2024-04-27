<script setup lang="ts">
const colorMode = useColorMode();
colorMode.value = "dark";

useHead({
  bodyAttrs: {
    class: "bg-black",
  },
  htmlAttrs: {
    class: "scroll-smooth scroll-pt-40",
  },
});

useSeoMeta({
  title: "yali.dev",
});
</script>

<template>
  <Header />
  <About />
</template>
