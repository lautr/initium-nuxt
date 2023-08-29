import type { CustomFontFamily, CustomFonts } from 'unplugin-fonts/types'

export function useUnfontConfiguration({ fonts = [] }: { fonts: Array<string> }) {
  const unfontsFamilies: Array<CustomFontFamily> = []
  const unfonts: CustomFonts = {
    families: [],
    display: 'swap',
    preload: true,
    prefetch: true,
    injectTo: 'head-prepend',
  }

  const tailwind: any = {}

  fonts.forEach((font: string) => {
    tailwind.sans = [`'${font}'`]

    unfontsFamilies.push({
      name: font,
      local: font,
      src: `./node_modules/@lautr/initium-nuxt-design/assets/fonts/${font.toLowerCase()}/*.ttf`,
      transform(font) {
        console.log({ font })
        console.log(font.files)
        // we can also return null to skip the font
        return font
      },
    } as CustomFontFamily)
  })

  unfonts.families = unfontsFamilies

  return { unfonts, tailwind }
}
