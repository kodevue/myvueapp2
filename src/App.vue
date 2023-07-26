<script setup>
import { computed, ref } from 'vue'
import MyNavbar from './components/MyNavbar.vue'
import MyStateCompOne from './components/MyStateCompOne.vue'
import MyStateCompTwo from './components/MyStateCompTwo.vue'

const active = ref(true)
const currentView = computed(() => (active.value ? MyStateCompOne : MyStateCompTwo))
</script>

<template>
  <MyNavbar />

  <input type="button" value="Toggle" @click="active = !active" />
  <component :is="currentView"></component>
</template>

