<script lang="ts" setup>
defineProps({
  modelValue: String,
})

defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    class="block w-full rounded h-10 px-3 border border-stone-300 bg-white outline-none focus:border-stone-900 dark:bg-stone-900 dark:border-stone-700 dark:focus:border-stone-500"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>
