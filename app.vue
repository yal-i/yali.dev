<script setup lang="ts">
const colorMode = useColorMode();
colorMode.value = "dark";

useHead({
  bodyAttrs: {
    class: "bg-black",
  },
  htmlAttrs: {
    class: "scroll-smooth scroll-pt-52",
  },
});

useSeoMeta({
  title: "yali.dev",
});
</script>

<template>
  <Header />
  <About />
  <Projects />
  <Skills />
  <Resume />
  <Contact />
  <Footer />
  <UNotifications />
</template>
