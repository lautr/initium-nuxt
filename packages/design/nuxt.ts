import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  disabled: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    configKey: 'initiumDesign',
    name: 'nuxt-initium-design',
  },
  hooks: {
    'components:dirs': (dirs) => {
      // Add ./components dir to the list
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
        // prefix: 'awesome', // this could be used to assign a prefix to the components
      })
    },
  },
})
