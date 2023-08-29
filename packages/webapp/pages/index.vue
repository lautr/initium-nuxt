<script setup lang="ts">
function foo() {
  // eslint-disable-next-line no-console
  console.log('hello world')
}

const { signIn } = useAuthStore()
</script>

<template>
  <div>
    <UiButton @click="signIn">
      hello world
    </UiButton>
  </div>
</template>
