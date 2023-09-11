<script setup lang="ts">
const auth = useAuthStore()
const colorMode = useColorMode()
</script>

<template>
  <NuxtLayout :name="auth.identity ? 'default' : 'splash'">
    <template v-if="auth.identity" #header>
      hello <span class="font-bold">{{ auth.identity }}</span>
    </template>
    <NuxtPage v-if="auth.identity" />
    <UiSheet v-else>
      <InteractionSignIn @sign-in="(identity: string) => auth.signIn(identity)" />
    </UiSheet>
    <ClientOnly>
      <UiSheet class="fixed bottom-5 right-5 font-serif">
        <div>
          color mode:
          <span class="font-bold">{{ colorMode.preference }}</span>
        </div>
        <div class="space-x-2">
          <UiButton
            v-for="color in ['dark', 'light', 'system']"
            :key="color"
            @click="colorMode.preference = color"
          >
            {{ color }}
          </UiButton>
        </div>
      </UiSheet>
    </ClientOnly>
  </NuxtLayout>
</template>
