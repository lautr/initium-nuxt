import type { Config } from 'tailwindcss'
import { useUnfontConfiguration } from './utils/fonts'

const { tailwind } = useUnfontConfiguration({ fonts: ['Poppins'] })

export default {
  content: [
    './components/**/*.vue',
    './stories/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: tailwind,
    extend: {},
  },
  plugins: [],
} satisfies Config
