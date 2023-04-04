/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.vue',
    './stories/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sw-blue': {
          DEFAULT: '#005EB8',
          50: '#71B9FF',
          100: '#5CAFFF',
          200: '#339BFF',
          300: '#0B87FF',
          400: '#0073E1',
          500: '#005EB8',
          600: '#004180',
          700: '#002548',
          800: '#000810',
          900: '#000000'
        },
        'sw-green': {
          DEFAULT: '#00C36B',
          50: '#7CFFC4',
          100: '#67FFBA',
          200: '#3EFFA8',
          300: '#16FF96',
          400: '#00EC81',
          500: '#00C36B',
          600: '#008B4C',
          700: '#00532D',
          800: '#001B0F',
          900: '#000000'
        },
        'sw-gold': {
          DEFAULT: '#FEC757',
          50: '#FFFFFF',
          100: '#FFFDF9',
          200: '#FFF0D1',
          300: '#FEE2A8',
          400: '#FED580',
          500: '#FEC757',
          600: '#FEB41F',
          700: '#E39901',
          800: '#AC7301',
          900: '#744E01'
        }
      },
    },
  },
  plugins: [],
}
