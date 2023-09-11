import type { Config } from 'tailwindcss'
import fontLoader from './utils/font-loader'

export default {
  content: [
    './components/**/*.vue',
    './stories/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: fontLoader.fontTailwindConfig,
    extend: {},
  },
  plugins: [],
} satisfies Config
