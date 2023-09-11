import storybookFontConfigLoader from '@lautr/initium-nuxt-modules/custom-fonts/storybook'

const {
  fontVitePlugin,
  fontAssetCssName,
  fontTailwindConfig,
  fontHeaderLinks,
} = storybookFontConfigLoader({
  fonts: [{
    name: 'Poppins',
    src: './assets/fonts/poppins/*.ttf',
    dst: './assets/fonts/poppins/',
    type: 'sans',
  }, {
    name: 'Roboto',
    src: './assets/fonts/roboto/*.ttf',
    dst: './assets/fonts/roboto/',
    type: 'serif',
  }],
  settings: {
    display: 'swap',
  },
})

export default {
  fontVitePlugin,
  fontAssetCssName,
  fontTailwindConfig,
  fontHeaderLinks,
}
