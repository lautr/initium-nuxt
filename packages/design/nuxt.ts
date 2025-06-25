import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'
import '@nuxt/schema'

export default defineNuxtModule({
  meta: {
    configKey: 'initiumDesign',
    name: 'nuxt-initium-design',
  },
  hooks: {
    'components:dirs': (dirs) => {
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
      })
    },
  },
})
