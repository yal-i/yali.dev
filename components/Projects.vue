<script setup lang="ts">
import ProjectClient from "~/clients/project";

const items = [
  {
    label: "Hepsi",
    value: "all",
  },
  {
    label: "Website",
    value: "web",
  },
  {
    label: "Mobile Uygulama",
    value: "mobile",
  },
];

const client = new ProjectClient();
const projects = await client.getAll();
</script>

<template>
  <div class="mt-52 bg-zinc-950 py-16" id="projects">
    <UContainer>
      <UTabs
        :items="items"
        :ui="{
          list: {
            background: 'dark:bg-black',
            rounded: 'rounded-full',
            base: 'text-3xl',
            marker: {
              rounded: 'rounded-full',
            },
          },
        }"
      >
        <template #item="{ item }">
          <div class="grid lg:grid-cols-2 mt-10 gap-10">
            <NuxtLink
              class="transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,.1)] group overflow-hidden relative rounded-2xl border-2 border-zinc-900"
              v-for="(
                { description, href, image, name }, i
              ) in projects?.filter(
                (project) => item.value === 'all' || project.type === item.value
              )"
              :initial="{ opacity: 0, bottom: -30 }"
              :visible="{ opacity: 1, bottom: 0 }"
              :delay="i * 200"
              target="_blank"
              :to="href"
              v-motion
              :key="i"
            >
              <img
                class="group-hover:blur-[2px] group-hover:scale-110 duration-300 transition-all rounded-xl"
                :src="image"
              />
              <UCard
                class="absolute hidden group-hover:block backdrop-blur-3xl right-10 left-10"
                :initial="{ bottom: -100 }"
                :visible="{ bottom: 0 }"
                v-motion
                :ui="{
                  background: '',
                  rounded: 'rounded-none rounded-t-xl',
                }"
              >
                <div class="flex items-center justify-between mb-3">
                  <h1 class="text-xl font-semibold">
                    {{ name }}
                  </h1>
                  <UIcon name="gridicons:external" size="25" />
                </div>
                <p class="text-zinc-100">
                  {{ description }}
                </p>
              </UCard>
            </NuxtLink>
          </div>
        </template>
      </UTabs>
    </UContainer>
  </div>
</template>
