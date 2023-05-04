<script lang="ts" setup>
</script>

<template>
  <div class="bg-stone-200 dark:bg-stone-800 min-h-screen flex flex-col">
    <UiSheet class="sticky w-full top-0 z-10">
      <slot name="header" />
    </UiSheet>
    <UiSheet class="container mx-auto min-h-screen md:max-w-6xl md:mt-2">
      <slot />
    </UiSheet>
  </div>
</template>
