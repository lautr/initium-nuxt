import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueMacros(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dirs: ['./composables'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['./components'],
      extensions: ['vue', 'ts'],
      include: [/\.vue$/, /\.vue\?vue/, /\.stories\.ts$/],
      dts: true,
      directoryAsNamespace: true,
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
