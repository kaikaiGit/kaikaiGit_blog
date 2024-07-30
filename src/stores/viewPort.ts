import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useViewportStore = defineStore('viewPort', () => {
  //当前视口宽度
  const viewportWidth = ref(window.innerWidth)
  //实时更新视口宽度
  function updateWidth() {
    viewportWidth.value = window.innerWidth
    console.log(viewportWidth.value)
  }

  return { viewportWidth, updateWidth }
})
