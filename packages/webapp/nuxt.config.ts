// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  components: {
    dirs: [
      '~/components',
    ],
  },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
      },
    ],
    '@vueuse/nuxt',
    '@lautr/initium-nuxt-design/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
  },
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
})
