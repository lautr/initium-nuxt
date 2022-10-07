<template>
  <div class="bg-slate-50 dark:bg-slate-600 min-h-screen flex flex-col">
    <UiSheet class="sticky max-h-10 w-full">
      <slot name="header" />
    </UiSheet>
    <UiSheet class="container mx-auto max-w-6xl mt-2">
      <slot />
    </UiSheet>
  </div>
</template>
