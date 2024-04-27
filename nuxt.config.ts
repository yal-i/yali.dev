export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@vueuse/motion/nuxt"],
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
});
