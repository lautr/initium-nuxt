<script lang="ts" setup>
</script>

<template>
  <button
    class="bg-stone-900 text-stone-50 border-stone-900 hover:text-stone-900 hover:bg-stone-50 dark:hover:bg-stone-900 dark:hover:text-stone-50 dark:border-stone-50 dark:text-stone-900 dark:bg-stone-50 transition-colors border rounded px-3 h-10"
  >
    <!-- @slot button content -->
    <slot />
  </button>
</template>
