<script lang="ts" setup>
const { placeholder } = defineProps<{
  placeholder?: string
}>()
const { modelValue } = defineModels<{
  modelValue?: string
}>()
</script>

<template>
  <input
    v-model="modelValue"
    class="block w-full rounded h-10 px-3 border border-stone-300 bg-white outline-none focus:border-stone-900 dark:bg-stone-900 dark:border-stone-700 dark:focus:border-stone-500"
    :placeholder="placeholder"
  >
</template>
