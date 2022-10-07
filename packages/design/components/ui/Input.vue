<script lang="ts" setup>
defineProps({
  modelValue: String,
})

defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    class="py-2 px-2 border-t border-r border-l border-b-2 bg-white border-b-purple-500 border-purple-200 placeholder-purple-300 dark:bg-black"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>
