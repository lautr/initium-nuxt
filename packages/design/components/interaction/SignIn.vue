<script lang="ts" setup>
const props = defineProps({
  attributes: Object,
})
</script>

<template>
  <div class="flex flex-col space-y-2">
    <UiInput placeholder="Username" />
    <UiButton>
      Authenticate
    </UiButton>
  </div>
</template>
