import { fileURLToPath } from 'node:url'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
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
