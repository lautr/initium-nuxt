import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: {
    dirs: [
      '~/components',
      'node_modules/design/components',
    ],
  },
  typescript: {
    shim: false,
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
  ],
})
