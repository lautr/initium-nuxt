<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'sign-in', identity: string): void
}>()

const identity = ref('')

function onSignIn() {
  emit('sign-in', identity.value)
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
