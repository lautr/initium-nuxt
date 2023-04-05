// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
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
    '@nuxt/devtools',
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
      },
    ],
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@lautr/initium-nuxt-design/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  routeRules: {
    '/**': {
      headers: {
        'cache-control': 's-maxage=300, maxage=300, type=public, stale-while-revalidate=90000, stale-if-error=90000',
      },
    },
  },
  tailwindcss: {
    config: {
      content: [
        './node_modules/@lautr/initium-nuxt-design/**/*.vue',
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
      ],
      darkMode: 'class',
      theme: {
        extend: {},
      },
      plugins: [],
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
