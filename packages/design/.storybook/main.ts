import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  /* viteFinal: (config) => {
    console.log(config)
    // Add your custom Vite config here
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': fileURLToPath(new URL('../', import.meta.url)),
      };
    } else {
      config.resolve = {
        alias: {
          '~': fileURLToPath(new URL('../', import.meta.url)),
        },
      };
    }
    return config;
  }, */
}

export default config
