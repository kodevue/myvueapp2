<script setup>
import { useCounterStore } from '@/stores/counter'

let counterStore = useCounterStore()
</script>

<template>
  <h1>Componente 1</h1>
  <h2>{{ counterStore.count }} / {{ counterStore.doubleCount }}</h2>

  <button @click="counterStore.count++">Click Me</button>
  <button @click="counterStore.increment">Click Me1</button>
  <button @click="counterStore.increment()">Click Me2</button>
</template>