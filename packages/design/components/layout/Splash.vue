<script lang="ts">
export default {
  name: 'SplashLayout',
}
</script>

<script setup lang="ts">
// Splash component for full screen layouts with centered content
</script>

<template>
  <div class="bg-stone-200 dark:bg-stone-800 min-h-screen flex flex-col">
    <main class="flex justify-center items-center flex-grow">
      <slot />
    </main>
  </div>
</template>
