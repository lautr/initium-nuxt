<script lang="ts" setup>
const foo = ref('i am a thing thats B')
</script>
<template>
  <div class="bg-red-400 p-2 rounded">
    {{ foo }}
  </div>
</template>