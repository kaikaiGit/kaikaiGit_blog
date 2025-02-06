<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useViewportStore } from './stores/viewPort'

const viewportStore = useViewportStore()

/* 防抖函数 */
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer); // 清除之前的定时器
    timer = setTimeout(() => {
      fn.apply(this, args); // 延迟执行
    }, delay);
  };
}
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
