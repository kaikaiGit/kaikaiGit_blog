<template>
  <el-menu
    class="el-menu-demo nav"
    mode="horizontal"
    :ellipsis="false"
    :active-text-color="myColor.themeColor"
  >
    <router-link to="/">
      <el-menu-item index="0" class="flex-vertical" style="height: 100%; padding: 0">
        <img src="@/assets/images/logo/logo.svg" alt="blog" />
      </el-menu-item>
    </router-link>

    <div class="flex-grow" />

    <el-menu-item index="1" @click="NavToCollections"> 作品 </el-menu-item>

    <el-menu-item index="2" @click="NavToRecommend"> 推荐 </el-menu-item>

    <ThemeSwitch style="margin: 0 20px 0 10px" @click="handleToggle" />

    <a
      class="flex-vertical"
      href="https://github.com/kaikaiGit/kaikaiGit.github.io"
      target="_blank"
    >
      <img v-if="!isDark" src="@/assets/images/topNav/githubIcon.svg" alt="github" width="30" />
      <img v-else src="@/assets/images/topNav/githubBlack.svg" alt="github" width="30" />
    </a>
  </el-menu>
</template>

<script setup lang="ts">
import { myColor } from '@/assets/themes'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { useViewportStore } from '../stores/viewPort'

/* 主题切换相关 */
const isDark = ref(false)
const handleToggle = (): void => {
  isDark.value = !isDark.value
}

/* 路由跳转相关 */
const router = useRouter()
const NavToCollections = (): void => {
  router.push('/collections')
}
const NavToRecommend = (): void => {
  router.push('/recommend')
}

/* 移动设备相关 */
// const viewportStore = useViewportStore()
</script>

<style lang="scss" scoped>
.nav {
  padding: 0 24px;
  gap: 10px;
}
</style>
