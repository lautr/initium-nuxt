
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'
import cfg0 from "C:/Users/johannes.lauter/Documents/GitHub/initium-nuxt/packages/variant-a/app.config"
import cfg1 from "C:/Users/johannes.lauter/Documents/GitHub/initium-nuxt/packages/webapp/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0, typeof cfg1]>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, any>, Custom extends Record<string, any>> = {
  [K in keyof Resolved]: K extends keyof Custom
    ? Custom[K] extends Record<string, any>
      ? IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Resolved[K] extends Record<string, any>
          ? MergedAppConfig<Resolved[K], Custom[K]>
          : Exclude<Custom[K], undefined>
        : Exclude<Custom[K], undefined>
      : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
