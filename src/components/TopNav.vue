<template>
  <el-menu
    class="el-menu-demo nav"
    mode="horizontal"
    :ellipsis="false"
    :active-text-color="myColor.themeColor"
    menu-trigger="click"
    close-on-click-outside
  >
    <router-link to="/">
      <el-menu-item index="0" class="flex-vertical" style="height: 100%; padding: 0">
        <!-- <img src="@/assets/images/logo/logo.svg" alt="blog" /> -->
        <SvgIcon
          iconClass="logo"
          :style="{ width: '100px', height: '100%', color: myColor.themeColor }"
        />
      </el-menu-item>
    </router-link>

    <div class="flex-grow" />

    <el-menu-item v-if="!viewportStore.isMobile" index="1" @click="NavToCollections">
      作品
    </el-menu-item>

    <el-menu-item v-if="!viewportStore.isMobile" index="2" @click="NavToRecommend">
      推荐
    </el-menu-item>

    <ThemeSwitch style="margin: 0 10px" @click="handleToggle" />

    <a
      v-if="!viewportStore.isMobile"
      class="flex-vertical"
      href="https://github.com/kaikaiGit/kaikaiGit_blog"
      target="_blank"
      style="padding: 10px"
    >
      <SvgIcon
        v-if="!isDark"
        iconClass="githubIcon"
        :style="{ width: '30px', height: '100%', color: 'black' }"
      />
      <SvgIcon v-else iconClass="githubBlack" :style="{ width: '30px', height: '100%' }" />
    </a>
    <div v-else class="flex-vertical" style="padding: 10px">
      <SvgIcon v-if="!isDark" iconClass="menu" style="height: 20px; width: 20px" />
      <SvgIcon v-else iconClass="menuBlack" style="height: 20px; width: 20px" />
    </div>

    <el-sub-menu index="4">
      <template #title
        ><SvgIcon v-if="!isDark" iconClass="menu" style="height: 20px; width: 20px"
      /></template>
      <el-menu-item index="4-1">作品</el-menu-item>
      <el-menu-item index="4-2">推荐</el-menu-item>
      <el-menu-item index="4-3"
        ><a
          v-if="!viewportStore.isMobile"
          class="flex-vertical"
          href="https://github.com/kaikaiGit/kaikaiGit_blog"
          target="_blank"
          style="padding: 10px"
        >
          <SvgIcon
            v-if="!isDark"
            iconClass="githubIcon"
            :style="{ width: '30px', height: '100%', color: 'black' }"
          />
          <SvgIcon v-else iconClass="githubBlack" :style="{ width: '30px', height: '100%' }" /> </a
      ></el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { myColor } from '@/assets/themes'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useViewportStore } from '../stores/viewPort'

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
const viewportStore = useViewportStore()
</script>

<style lang="scss" scoped>
.nav {
  padding: 0 20px;
  gap: 10px;
}
</style>
