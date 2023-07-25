<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

let counterStore = useCounterStore()
let { count, doubleCount } = storeToRefs(counterStore)

let { increment } = counterStore
</script>

<template>
  <h1>Componente 2</h1>
  <h1>{{ count }} / {{ doubleCount }}</h1>
  <input type="button" value="Click Me" @click="count++" />
  <input type="button" value="Click Me1" @click="increment" />
  <input type="button" value="Click Me1" @click="increment()" />
</template>