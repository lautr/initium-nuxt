<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'signIn', identity: string): void
}>()

const identity = ref(null)
const onSignIn = () => {
  emit('signIn', identity)
}
</script>

<template>
  <form
    class="flex flex-col space-y-2"
    @submit.prevent="onSignIn"
  >
    <UiInput
      v-model="identity"
      placeholder="Username"
    />
    <UiButton>
      Authenticate
    </UiButton>
  </form>
</template>
