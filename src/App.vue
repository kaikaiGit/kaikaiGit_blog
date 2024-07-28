<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- 导航栏 -->
  <top-nav></top-nav>
  <!-- 内容 -->
  <router-view></router-view>
</template>

<style scoped></style>
