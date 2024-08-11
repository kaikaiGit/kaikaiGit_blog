<template>
  <div class="body">
    <div class="top"></div>
    <div class="content">
      <h1 class="title">About me</h1>
      <div class="infoBanner">
        <!-- 左侧导航栏 -->
        <nav>
          <div class="navItem" v-for="(item, index) in navList" :key="index">{{ item.title }}</div>
        </nav>
        <!-- 右侧内容信息 -->
        <div class="info">
          <div
            v-for="(item, index) in navList"
            :key="index"
            style="height: 200px; marginbottom: 10px"
          >
            {{ item.title }}
            {{ item.title }}
            {{ item.title }}
            {{ item.title }}
            {{ item.title }}
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'dd Regular';
  src:
    url('@/assets/fonts/dd_Regular/bjJcJl24BO6h.woff2') format('woff2'),
    url('@/assets/fonts/dd_Regular/bjJcJl24BO6h.woff') format('woff');
  font-display: swap;
}

.body {
  .top {
    height: 160px;
    background-color: var(--themeColor);
  }

  .content {
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    margin: -66px 32px;
    padding: 30px 6px 30px 30px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .title {
      position: absolute;
      left: 0;
      top: -55px;
      font-size: 34px;
      font-weight: 700;
      font-family: 'dd Regular';
      letter-spacing: 0.05em;
      color: white;
    }

    .infoBanner {
      display: flex;
      height: 160px;

      nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
        padding: 20px 30px 20px 0;
        border-right: 1px solid var(--borderColor);

        .navItem {
          padding: 8px 14px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.2em;
          border-radius: 6px;
          cursor: pointer;

          &:hover {
            background-color: var(--listItem-hover);
          }
        }
      }

      .info {
        flex: 1;
        padding: 0 30px;
        overflow-y: auto;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

const navList = ref([
  {
    title: '基本信息'
  },
  {
    title: '项目简历'
  },
  {
    title: '实习经历'
  }
])
</script>
