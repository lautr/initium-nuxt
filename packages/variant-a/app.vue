<script setup lang="ts">
const auth = useAuthStore()
const colorMode = useColorMode()
const config = useAppConfig()
</script>

<template>
  <NuxtLayout :name="auth.identity ? 'default' : 'splash'">
    <template v-if="auth.identity" #header>
      hello <span class="font-bold">{{ auth.identity }}</span>
    </template>
    <NuxtPage v-if="auth.identity" />
    <UiSheet v-else>
      {{ config }}
      <InteractionSignIn @sign-in="(identity: string) => auth.signIn(identity)" />
    </UiSheet>
    <ClientOnly>
      <UiSheet class="fixed bottom-5 right-5">
        <div>
          color modes:
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
