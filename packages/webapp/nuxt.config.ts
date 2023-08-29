import { createResolver } from '@nuxt/kit'
import { useUnfontConfiguration } from '@lautr/initium-nuxt-design/utils/fonts'
import Unfonts from 'unplugin-fonts/vite'

const { resolve } = createResolver(import.meta.url)

const { tailwind, unfonts } = useUnfontConfiguration({ fonts: ['Poppins'] })

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    '@lautr/initium-nuxt-webapp': resolve('./'),
  },
  css: ['@lautr/initium-nuxt-webapp/assets/main.css'],
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
    '@nuxt/devtools',
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
      },
    ],
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@lautr/initium-nuxt-design/nuxt.ts',
    '',
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
        './app.vue',
      ],
      darkMode: 'class',
      theme: {
        extend: {},
        fontFamily: tailwind,
      },
      plugins: [],
    },
    viewer: false,
  },
  typescript: {
    shim: false,
  },
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
    plugins: [
      Unfonts({
        custom: unfonts,
      }),
    ],
  },
})
