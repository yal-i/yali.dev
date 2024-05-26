<template>
  <UContainer
    class="mt-28 flex flex-wrap justify-between items-center gap-20"
    id="about"
  >
    <div class="m-auto xl:m-0">
      <h1 class="font-bold text-2xl mb-2 text-primary">
        Merhaba, ben Yusuf Ali.
      </h1>
      <h1 class="font-extrabold text-5xl">Software Developer</h1>
      <div class="mt-10 flex items-center gap-5">
        <UButton
          icon="material-symbols:download"
          label="CV'yi İndir"
          variant="soft"
          size="xl"
          to="/Yusuf-Ali-Tangöz-Resume.pdf"
        />
        <UButton
          to="https://github.com/yusufalitangoz"
          icon="mdi:github"
          target="_blank"
          color="black"
          size="xl"
        />
        <UButton
          to="https://www.linkedin.com/in/yusufalitangoz/"
          icon="mdi:linkedin"
          target="_blank"
          color="black"
          size="xl"
        />
      </div>
    </div>
    <div class="relative m-auto xl:m-0 group">
      <UCard
        :ui="{ background: '', body: { padding: '' } }"
        class="rounded-xl overflow-hidden -rotate-6 group-hover:rotate-0 m-5 transition-all"
      >
        <img
          class="max-w-md w-full rotate-6 scale-110 group-hover:rotate-0 transition-all"
          src="/picture.png"
          alt="picture"
        />
      </UCard>
      <UCard
        class="rounded-2xl absolute top-0 w-full h-full rotate-6 -z-10 backdrop-blur-3xl hidden sm:flex group-hover:rotate-0 transition-all"
        :ui="{ background: '' }"
      />
      <UCard
        :ui="{ background: '', body: { padding: 'px-5 py-5 sm:p-5' } }"
        class="absolute top-0 left-0 backdrop-blur-3xl rotate-12 group-hover:rotate-0 transition-all group-hover:bottom-10 duration-1000 group-hover:top-auto group-hover:left-10"
      >
        <UIcon
          name="mdi:hand-wave-outline"
          size="50"
          v-motion
          :initial="{
            rotate: -15,
          }"
          :enter="{
            rotate: 15,
            transition: {
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 1000,
            },
          }"
        />
      </UCard>
      <UCard
        :ui="{ background: '', body: { padding: 'px-5 py-5 sm:p-5' } }"
        class="absolute bottom-0 right-0 backdrop-blur-3xl -rotate-12 group-hover:rotate-0 group-hover:bottom-10 group-hover:right-10 transition-all duration-1000"
      >
        <UIcon name="ph:code-bold" size="50" />
      </UCard>
      <div
        class="bg-white w-52 h-52 top-0 right-0 absolute blur-3xl opacity-30 -z-20"
      />
    </div>
  </UContainer>
</template>
