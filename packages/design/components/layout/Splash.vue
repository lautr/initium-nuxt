<template>
  <div class="bg-slate-50 min-h-screen flex flex-col">
    <header class="sticky max-h-10 w-full">
      <slot name="header" />
    </header>
    <main class="flex justify-center items-center flex-grow">
      <slot />
    </main>
  </div>
</template>
