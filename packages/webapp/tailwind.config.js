/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@lautr/initium-nuxt-design/**/*.vue',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
