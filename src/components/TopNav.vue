<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo nav"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    :active-text-color="myColor.themeColor"
  >
    <router-link to="/" index="0">
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

const isDark = ref(false)
const handleToggle = (): void => {
  isDark.value = !isDark.value
}

const router = useRouter()
const NavToCollections = (): void => {
  router.push('/collections')
}
const NavToRecommend = (): void => {
  router.push('/recommend')
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 0 24px;
  gap: 10px;
}
</style>
