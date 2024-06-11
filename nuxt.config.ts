export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@vueuse/motion/nuxt"],
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
  colorMode: {
    preference: "light",
  },
});
