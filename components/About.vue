<template>
  <UContainer
    class="mt-20 flex flex-wrap justify-between items-center gap-20"
    id="about"
  >
    <div class="m-auto xl:m-0">
      <h1 class="font-bold text-2xl mb-2 text-black">
        Merhaba, ben Yusuf Ali.
      </h1>
      <h1 class="font-extrabold text-5xl">Software Developer</h1>
      <div class="mt-10 flex items-center gap-5">
        <UButton
          icon="material-symbols:download"
          label="CV'yi İndir"
          size="xl"
          color="gray"
          to="/Yusuf_Ali_TANGÖZ_Resume.pdf"
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
    <div class="relative m-auto xl:m-0 group w-96">
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
        class="rounded-2xl absolute top-0 w-full h-full rotate-6 -z-10 backdrop-blur-3xl hidden sm:flex group-hover:rotate-0 transition-all shadow-lg"
        :ui="{ background: '' }"
      />
      <UCard
        :ui="{
          background: 'bg-white/95',
          body: { padding: 'px-4 py-4 sm:p-4' },
        }"
        class="absolute top-0 left-0 rotate-12 group-hover:rotate-0 transition-all group-hover:bottom-10 duration-1000 group-hover:top-auto group-hover:left-10"
      >
        <UIcon
          name="mdi:hand-wave-outline"
          color="gray"
          size="40"
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
        :ui="{
          background: 'bg-white/95',
          body: { padding: 'px-4 py-4 sm:p-4' },
        }"
        class="absolute bottom-0 right-0 -rotate-12 group-hover:rotate-0 group-hover:bottom-10 group-hover:right-10 transition-all duration-1000"
      >
        <UIcon name="ph:code-bold" size="40" color="gray" />
      </UCard>
      <div
        class="bg-white w-52 h-52 top-0 right-0 absolute blur-3xl opacity-30 -z-20"
      />
    </div>
  </UContainer>
</template>
