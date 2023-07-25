<script setup>
import { useCounterStore } from '@/stores/counter'
import { useDataStore } from '@/stores/data'

let counterStore = useCounterStore()
let dataStore = useDataStore()
</script>

<template>
  <h1>Componente 1</h1>
  <h2>{{ counterStore.count }} / {{ counterStore.doubleCount }} / {{ dataStore.message }}</h2>

  <button @click="counterStore.count++">Click Me</button>
  <button @click="counterStore.increment">Click Me1</button>
  <button @click="counterStore.increment()">Click Me2</button>
</template>