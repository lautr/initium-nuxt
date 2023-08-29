import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Unfonts from 'unplugin-fonts/vite'
import { useUnfontConfiguration } from './utils/fonts'

const { unfonts } = useUnfontConfiguration({ fonts: ['Poppins'] })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./composables'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['./components'],
      dts: true,
      directoryAsNamespace: true,
    }),
    vue(),
    VueMacros(),
    Unfonts({
      custom: unfonts,
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
