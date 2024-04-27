<script setup lang="ts">
const links = ref([
  {
    label: "Hakkında",
    to: "#about",
    active: true,
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
]);

const headerClass = ref("");

function isActive(to: string) {
  const element = document.getElementById(to.substring(1));
  if (element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 500 && rect.bottom >= 500;
  }
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    links.value.forEach((link) => {
      link.active = isActive(link.to);
    });

    headerClass.value =
      window.scrollY > 110
        ? "sticky top-0 left-0 right-0 z-50 border-b-[1px] border-zinc-800 backdrop-blur-3xl bg-[rgba(0,0,0,0.8)]"
        : "";
  });
});
</script>

<template>
  <header
    :visible="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
    :initial="{ opacity: 0, y: -50 }"
    :class="headerClass"
    v-motion
  >
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
