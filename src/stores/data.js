import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const count = ref(10)
  const message = ref('Hello World')
  const status = ref(true)

  return { count, message, status }
})
