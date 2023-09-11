import { defineNuxtModule } from '@nuxt/kit'
import { useFontLoader } from './useFontLoader'

export default defineNuxtModule({
  async setup(options, nuxt) {
    const { fontVitePlugin, fontAssetCssName, fontTailwindConfig, fontHeaderLinks } = useFontLoader(
      options.fonts,
      options.settings,
    )

    // 1. Add Tailwind Config
    const tailwindModule = nuxt.options.modules.find(
      ([module]: any) => module === '@nuxtjs/tailwindcss',
    )
    if (tailwindModule && tailwindModule[1]) {
      // Modify or extend the tailwind config here
      tailwindModule[1].config.theme.fontFamily = fontTailwindConfig
    }

    // 2. Add a vite plugin
    nuxt.hook('vite:extendConfig', (viteInlineConfig) => {
      viteInlineConfig.plugins = (viteInlineConfig.plugins || []).concat(fontVitePlugin)
    })

    // 3. Add a CSS file & header links
    nuxt.hook('ready', (app) => {
      app.options.css.push(fontAssetCssName)
      app.options.app.head.link = app.options.app.head.link.concat(fontHeaderLinks)
    })
  },
})
