<script setup lang="ts">
function foo() {
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
