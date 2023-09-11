import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    '@lautr/initium-nuxt-webapp': resolve('./'),
  },
  // css: [fontAssetCssName],
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
    [
      '@lautr/initium-nuxt-modules/custom-fonts/nuxt.ts',
      {
        fonts: [{
          name: 'Poppins',
          src: './node_modules/@lautr/initium-nuxt-design/assets/fonts/poppins/*.ttf',
          dst: '@lautr/initium-nuxt-design/assets/fonts/poppins/',
          type: 'sans',
        }, {
          name: 'Roboto',
          src: './node_modules/@lautr/initium-nuxt-design/assets/fonts/roboto/*.ttf',
          dst: '@lautr/initium-nuxt-design/assets/fonts/roboto/',
          type: 'serif',
        }],
        settings: {
          display: 'swap',
          rel: 'prefetch',
          assetDir: '/_nuxt',
        },
      }],
    [
      '@nuxtjs/tailwindcss',
      {
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
            // fontFamily: fontTailwindConfig,
          },
          plugins: [],
        },
        viewer: false,
      },
    ],
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@lautr/initium-nuxt-design/nuxt.ts',
  ],
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
    // plugins: [
    //   fontVitePlugin,
    // ],
  },
})
