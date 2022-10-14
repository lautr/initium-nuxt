<script setup lang="ts">
const foo = () => {
  // eslint-disable-next-line no-console
  console.log('gelo')
}
</script>

<template>
  <div>
    <span @click="foo">hello world</span>
  </div>
</template>
