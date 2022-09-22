# Lautr Nuxt Template 🔥

<pre align="center">
🚀 Opnionated Nuxt, Tailwind & Storybook monorepo template
</pre>
<hr />

> inspired by [antfu vitesse nuxt](https://github.com/antfu/vitesse-nuxt3)

## Features
- [💚 Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- 🤓 Optimized for VSCode usage
- ⚡️ Vite - Instant HMR
- VITEST
- 🚝 Monorepo setup using [pnpm](https://pnpm.io/)
- 🌬️ [Tailwind 3](https://tailwindcss.com/) - the utility-first CSS framework
- 🖌️ [Storybook](https://storybook.js.org/) - open source tool for building UI components and pages in isolatio
- 🔥 The `<script setup>` syntax
- 🍍 [State Management via Pinia](https://pinia.esm.dev), see [./composables/user.ts](./composables/user.ts)
- 📑 [Layout system](./layouts)
- 📥 APIs auto importing - for Composition API, VueUse, Components (localy & from design) and custom composables
- 🦾 TypeScript

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-community/color-mode-module) - dark and Light mode with auto detection made easy with Nuxt.
- [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine.
- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.

## IDE

This Template is designed to provide great DX with [VS Code](https://code.visualstudio.com/) and [Volar](https://github.com/johnsoncodehk/volar).

### Troubleshooting
- [Volar Version v0.38.8 & v0.38.7 seem to have a bug for path resolution](https://github.com/johnsoncodehk/volar/issues/1585) if it still occurs use Version v0.38.6
- disable Vetur
- enable extensions recommended in `.vscode\extensions.json`
- enable [Takeover Mode](https://vuejs.org/guide/typescript/overview.html#takeover-mode)

## Try it now!
<!-- 
### Online

<a href="https://stackblitz.com/github/antfu/vitesse-nuxt3"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a> -->

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/antfu/vitesse-nuxt3/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu/vitesse-nuxt3 my-nuxt3-app
cd my-nuxt3-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```