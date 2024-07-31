import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useViewportStore = defineStore('viewPort', () => {
  const mobileMaxWidth = 540
  //是否为移动设备
  const isMobile = ref(false)
  //当前视口宽度
  const viewportWidth = ref(window.innerWidth)
  //实时更新视口宽度
  function updateWidth() {
    viewportWidth.value = window.innerWidth
    if (viewportWidth.value < mobileMaxWidth) isMobile.value = true
    else isMobile.value = false
  }

  return { isMobile, viewportWidth, updateWidth }
})
