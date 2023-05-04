import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.vue',
    './stories/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
