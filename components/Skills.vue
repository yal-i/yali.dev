<script setup lang="ts">
const skills = [
  {
    name: "C#",
    icon: "devicon:csharp",
  },
  {
    name: "HTML",
    icon: "skill-icons:html",
  },
  {
    name: "CSS",
    icon: "skill-icons:css",
  },
  {
    name: "JavaScript",
    icon: "skill-icons:javascript",
  },
  {
    name: "TypeScript",
    icon: "skill-icons:typescript",
  },
  {
    name: "React",
    icon: "skill-icons:react-dark",
  },
  {
    name: "Next.js",
    icon: "skill-icons:nextjs-dark",
  },
  {
    name: "Vue.js",
    icon: "skill-icons:vuejs-dark",
  },
  {
    name: "Nuxt.js",
    icon: "skill-icons:nuxtjs-dark",
  },
];
</script>

<template>
  <h1 class="text-4xl font-bold text-center mb-10 mt-16">Yeteneklerim</h1>
  <UContainer class="flex flex-wrap justify-center gap-10 relative" id="skills">
    <UCard
      class="w-40 backdrop-blur-3xl rounded-2xl group hover:shadow-[0_0_20px_rgba(255,255,255,.1)] transition-all duration-500"
      v-for="({ name, icon }, i) in skills"
      v-motion-pop-visible
      :key="i"
      :ui="{
        body: { base: 'flex items-center flex-col gap-5' },
        background: '',
      }"
    >
      <UIcon
        class="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
        :name="icon"
        size="60"
      />
      <p
        class="text-lg font-semibold text-primary group-hover:text-white transition-colors duration-500"
      >
        {{ name }}
      </p>
    </UCard>
    <div
      class="top-32 bg-white w-2/3 h-20 absolute blur-3xl opacity-20 rotate-12 -z-10"
    />
  </UContainer>
</template>
