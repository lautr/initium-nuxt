const { mergeConfig } = require('vite')
const AutoImport = require('unplugin-auto-import/vite')
const Components = require('unplugin-vue-components/vite')
const path = require('path')

module.exports = {
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve:{
        alias:{
          '~' : path.resolve(__dirname, '../')
        },
      },
      plugins: [
        AutoImport({
          imports: ['vue'],
          dirs: [
            '../composables',
          ],
          vueTemplate: true,
        }),
        Components({
          ts: true,
          resolvers: [
            // example of importing Vant
            (componentName) => {
              const parts = componentName.split(/(?=[A-Z])/)
              if (2 <= parts.length) 
                return {
                  name: 'default',
                  from: `~/components/${parts[0].toLowerCase()}/${componentName.replace(parts[0], '')}.vue`
                }
              // where `componentName` is always CapitalCase
              // if (componentName.startsWith('Ui'))
                // return { name: componentName.slice(3), from: 'vant' }
            },
          ],
          // dirs: ['components']
        })
      ],
    });
  },
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  }
}