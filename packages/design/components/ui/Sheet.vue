<script lang="ts">
export default {
  name: 'SheetComponent',
}
</script>

<script setup lang="ts">
// Sheet component for content containers
</script>

<template>
  <div class="bg-white text-stone-950 border-stone-100  dark:bg-stone-950 dark:text-white dark:border-stone-800 dark:drop-shadow-stone-900 px-3 py-4 drop-shadow rounded space-y-2 border">
    <slot />
  </div>
</template>
