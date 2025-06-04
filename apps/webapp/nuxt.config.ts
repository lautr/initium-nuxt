import { createResolver } from '@nuxt/kit'
import tailwind from '@tailwindcss/vite'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityVersion: 4,
  css: ['~/app/assets/main.css'],
  alias: {
    '@lautr/initium-nuxt-webapp': resolve('./'),
  },
  devtools: { enabled: true },
  sourcemap: false,
  telemetry: false,
  experimental: {
    componentIslands: 'local',
    asyncContext: true,
  },
  features: {
    inlineStyles: true,
  },
  components: {
    dirs: [
      '~/app/components',
    ],
  },
  imports: {
    dirs: ['app/stores'],
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
    plugins: [tailwind()],
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: '_nuxt/in-[hash].js',
          assetFileNames: '_nuxt/in-[hash][extname]',
          entryFileNames: '_nuxt/in-[hash].js',
          // target ~250KB per chunk in an ideal world
          experimentalMinChunkSize: 250 * 1024,
          manualChunks: (id: string) => {
            // need to avoid touching non-entrypoint files, otherwise it breaks bundling
            // because imports aren't idempotent
            if (
              !id.includes('node_modules')
              && !id.startsWith('virtual:')
              && !id.includes('src')
              && !id.includes('assets')
            ) {
              // merge pages/foo/* as chunk-pg-foo, pages/bar/* as chunk-pg-bar, etc.
              // then merge pages/* (ie no subfolder) into chunk-pg-misc
              if (id.includes('pages')) {
                const parts = id.split('/')
                const folderIndex = parts.indexOf('pages')
                if (folderIndex + 2 < parts.length) {
                  const pageGroup = parts[folderIndex + 1]
                  return `chunk-pg-${pageGroup}`
                }
                return 'chunk-pg-misc'
              }
            }
          },
        },
      },
    },
  },
  hooks: {
    'build:manifest': (manifest) => {
      // removes css files from output to avoid blocking requests
      // this is a workaround for https://github.com/nuxt/nuxt/issues/21821
      Object.keys(manifest).forEach((key: string) => {
        if (manifest[key].css)
          manifest[key].css = []
      })

      for (const key in manifest) {
        manifest[key].dynamicImports = []

        const file = manifest[key]
        if (file.assets) {
          file.assets = file.assets.filter(
            assetName => !/.+\.gif|jpe?g|png|svg$/.test(assetName),
          )
        }
      }
    },
  },
})
