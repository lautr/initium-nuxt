import '../index.css'
import 'unfonts.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: 'html',
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
}