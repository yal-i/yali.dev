<script setup lang="ts">
const colorMode = useColorMode();
colorMode.value = "dark";

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
