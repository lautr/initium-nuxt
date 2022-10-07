#  lautr/initium-nuxt 🔥

<pre align="center">
🚀 Opinionated Nuxt, Tailwind & Storybook monorepo template
</pre>
<hr />

> inspired by [antfu vitesse nuxt](https://github.com/antfu/vitesse-nuxt3)

## Features
- [💚 Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- 🤓 Optimized for VSCode usage
- [⚡️ Vite](https://vitejs.dev/) - Instant HMR
- [✨ Vitest](https://vitest.dev/guide/) - A blazing fast unit test framework 
- [🚝 Monorepo](https://pnpm.io/workspaces) - workspace setup using [pnpm](https://pnpm.io/)
- [🌬️ Tailwind 3](https://tailwindcss.com/) - the utility-first CSS framework
- [🖌️ Storybook](https://storybook.js.org/) - build UI components and pages in isolation
- [🌓 Color Mode](https://github.com/nuxt-community/color-mode-module) - dark, light & custom mode integrated in Tailwind and Nuxt
- 🔥 The `<script setup>` syntax
- [🍍 State Management via Pinia](https://pinia.esm.dev), see [./stores/AuthStore.ts](./stores/AuthStore.ts)
- [📑 Layout system](./layouts) - switch between layouts
- 📥 APIs auto importing - for Composition API, VueUse, Components (localy & from design) and custom composables
- [🦾 TypeScript](https://www.typescriptlang.org/) - JavaScript, but trongly typed and better

## Commands
```
# install all dependencies of the monorepo
pnpm install
# start webapp & storybook
pnpm dev
# start dev webapp
pnpm webapp dev
# build webapp for prod
pnpm webapp build
# start webapp for prod
pnpm webapp start
# start dev storybook
pnpm design dev
# run tests in webapp
pnpm webapp test
```

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-community/color-mode-module) - dark and Light mode with auto detection made easy with Nuxt.
- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.

## IDE

This Template is designed to provide great DX with [VS Code](https://code.visualstudio.com/) and [Volar](https://github.com/johnsoncodehk/volar).

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/lautr/initium-nuxt/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit lautr/initium-nuxt my-nuxt3-app
cd my-nuxt3-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
