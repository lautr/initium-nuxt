<script lang="ts" setup>
const { input } = defineModels<{
  input?: string
}>()
</script>

<template>
  <input
    v-model="input"
    class="block w-full rounded h-10 px-3 border border-stone-300 bg-white outline-none focus:border-stone-900 dark:bg-stone-900 dark:border-stone-700 dark:focus:border-stone-500"
  >
</template>
