<script setup lang="ts">
const foo = () => {
  // eslint-disable-next-line no-console
  console.log('gelo')
}
</script>

<template>
  <div>
    <UiButton @click="foo">
      hello world
    </UiButton>
  </div>
</template>
