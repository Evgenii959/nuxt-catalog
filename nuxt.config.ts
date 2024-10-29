export default defineNuxtConfig({
  router: {
    base: '/nuxt-catalog',
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
});
