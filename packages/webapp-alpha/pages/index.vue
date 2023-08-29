<script setup lang="ts">
const name = ref('')
const { signIn } = useAuthStore()
</script>

<template>
  <div>
    <UiInput v-model="name" />
    <UiButton @click="signIn(name)">
      hello world #2
    </UiButton>
  </div>
</template>
