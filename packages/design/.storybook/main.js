module.exports = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.js',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  core: {
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}