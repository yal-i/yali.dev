<script setup lang="ts">
const { data } = await useFetch("/api/project");
</script>

<template>
  <div class="mt-52 bg-gray-100 py-16" id="projects">
    <UContainer>
      <h1 class="text-4xl font-bold text-center mb-10">Web Siteler</h1>
      <div class="grid lg:grid-cols-2 mt-10 gap-10">
        <NuxtLink
          class="transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,.1)] group overflow-hidden relative rounded-2xl border border-gray-300"
          v-for="({ description, href, image, name }, i) in data"
          :initial="{ opacity: 0, bottom: -30 }"
          :visible="{ opacity: 1, bottom: 0 }"
          :delay="i * 200"
          target="_blank"
          :to="href"
          v-motion
          :key="i"
        >
          <img
            class="group-hover:blur-[2px] group-hover:scale-110 duration-300 transition-all rounded-xl h-full"
            :src="image"
          />
          <UCard
            class="absolute hidden group-hover:block backdrop-blur-sm right-10 left-10 ring-gray-300"
            :initial="{ bottom: -100 }"
            :visible="{ bottom: 0 }"
            v-motion
            :ui="{
              background: 'bg-[rgba(255,255,255,.8)]',
              rounded: 'rounded-none rounded-t-xl',
            }"
          >
            <div class="flex items-center justify-between mb-3">
              <h1 class="text-xl font-bold text-black">
                {{ name }}
              </h1>
              <UIcon name="gridicons:external" size="25" />
            </div>
            <p class="">
              {{ description }}
            </p>
          </UCard>
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>
