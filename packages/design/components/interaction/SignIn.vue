<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'signIn', identity: string): void
}>()

const identity = ref('')

function onSignIn() {
  emit('signIn', identity.value)
}
</script>

<template>
  <form
    class="flex flex-col space-y-2"
    @submit.prevent="onSignIn"
  >
    <UiInput
      v-model="identity"
      placeholder="Identity"
      data-testid="identity"
    />
    <UiButton>
      Authenticate
    </UiButton>
  </form>
</template>
