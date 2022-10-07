<script lang="ts" setup>
const newThing = ref(10)

const sayHello = () => {
  newThing.value++
  window.console.log(newThing.value)
}
onMounted(() => {
  window.console.log(newThing.value)
})
</script>

<template>
  <button class="bg-white rounded-sm py-2 px-1 font-bold border-2 border-purple-500 text-purple-700 hover:text-purple-900 hover:border-purple-700 dark:bg-slate-800 dark:text-purple-500 transition-all">
    <!-- @slot button content -->
    <slot />
  </button>
</template>
