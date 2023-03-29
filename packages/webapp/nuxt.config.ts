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
  routeRules: {
    '/**': {
      headers: {
        'cache-control': 's-maxage=300, maxage=300, type=public, stale-while-revalidate=90000, stale-if-error=90000',
      },
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
