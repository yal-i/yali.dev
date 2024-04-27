<script setup lang="ts">
const links = [
  {
    label: "Hakkında",
    to: "#about",
  },
  {
    label: "Projeler",
    to: "#projects",
  },
  {
    label: "Yetenekler",
    to: "#skills",
  },
  {
    label: "Özgeçmiş",
    to: "#resume",
  },
  {
    label: "İletişim",
    to: "#contact",
  },
];
</script>

<template>
  <header>
    <UContainer class="py-7 flex items-center">
      <span
        class="text-black text-2xl font-extrabold uppercase mr-auto"
        style="-webkit-text-stroke: 1px white"
      >
        yali.dev
      </span>
      <UHorizontalNavigation
        :links="links"
        class="w-max mr-5 hidden md:flex"
        :ui="{
          base: 'text-md',
        }"
      />
      <UButton
        to="mailto:tangozyusufali@gmail.com"
        icon="material-symbols:chat"
        class="rounded-full"
        label="Bana Ulaşın"
        color="black"
        size="lg"
      />
    </UContainer>
  </header>
</template>
