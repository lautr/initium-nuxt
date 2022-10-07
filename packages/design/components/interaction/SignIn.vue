<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'signIn', identity: string): void
}>()

const identity = ref(null)
</script>

<template>
  <form
    class="flex flex-col space-y-2"
    @submit.prevent="emit('signIn', identity)"
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
