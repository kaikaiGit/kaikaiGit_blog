<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useViewportStore } from './stores/viewPort'
import { debounce } from '@/utils/index.js'

const viewportStore = useViewportStore()


// 防抖后的更新函数
const debouncedUpdateWidth = debounce(viewportStore.updateWidth, 100);

/* 监听视口宽度变化 */
// 添加 resize 事件监听
onMounted(() => {
  window.addEventListener('resize', debouncedUpdateWidth)
})
// 移除 resize 事件监听
onUnmounted(() => {
  window.removeEventListener('resize', debouncedUpdateWidth)
})
</script>

<template>
  <!-- 导航栏 -->
  <top-nav></top-nav>
  <!-- 内容 -->
  <router-view></router-view>
</template>

<style scoped></style>
