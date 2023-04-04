import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/johannes.lauter/Documents/GitHub/initium-nuxt/node_modules/.pnpm/nuxt@3.3.2_eslint@8.37.0_typescript@5.0.2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}