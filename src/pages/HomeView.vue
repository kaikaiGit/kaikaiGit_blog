<template>
  <div class="body">
    <div class="top"></div>
    <div class="content">
      <h1 class="title">About me</h1>
      <div class="infoBanner">
        <!-- 左侧导航栏 -->
        <nav>
          <div
            class="navItem"
            v-for="(item, index) in navList"
            :key="index"
            :class="{ active: activeSection === item.id }"
          >
            <icon class="iconfont" :class="item.icon"></icon>
            <a :href="'#' + item.id">{{ item.title }}</a>
          </div>
        </nav>
        <!-- 右侧内容信息 -->
        <div class="info" ref="scrollContainer">
          <div
            :id="item.id"
            v-for="(item, index) in navList"
            :key="index"
            style="height: 250px; marginbottom: 10px"
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
      height: 300px;

      nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
        padding: 20px 30px 20px 0;
        border-right: 1px solid var(--borderColor);
        line-height: 20px;

        .navItem {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.2em;
          border-radius: 6px;
          cursor: pointer;
          border-left: 4px solid transparent;

          &:hover {
            background-color: var(--listItem-hover);
          }

          a {
            display: inline-block;
            padding: 8px 14px 8px 8px;
          }

          .iconfont {
            margin-left: 8px;
          }
        }

        .active {
          font-weight: bold;
          color: var(--themeColor);
          background-color: var(--themeColor-lighter);
          border-radius: 0px;
          border-left: 4px solid var(--themeColor);

          &:hover {
            background-color: var(--themeColor-lighter); //防止选中状态悬停变色
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
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const navList = ref([
  {
    id: 'wjk-info',
    title: '个人简介',
    icon: 'icon-gerenjianjie'
  },
  {
    id: 'wjk-skills',
    title: '专业技能',
    icon: 'icon-zhuanyejineng'
  },
  {
    id: 'wjk-internship',
    title: '实习经历',
    icon: 'icon-shixi'
  },
  {
    id: 'wjk-projects',
    title: '项目经历',
    icon: 'icon-project'
  },
  {
    id: 'wjk-activities',
    title: '活动经历',
    icon: 'icon-kejiluntan'
  },
  {
    id: 'wjk-prizes',
    title: '荣誉奖项',
    icon: 'icon-rongyu'
  }
])

const activeSection = ref('') //当前选中的navItem的id
const scrollContainer = ref(null) //滚动的容器

// 平滑滚动到指定锚点(暂不使用)
const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 监听滚动事件并更新当前视口中的锚点
const handleScroll = () => {
  const container = scrollContainer.value //获取滚动容器
  const containerRect = container.getBoundingClientRect()
  navList.value.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= containerRect.top + 60) activeSection.value = item.id
    }
  })
}

// 添加和移除滚动事件监听
onMounted(() => {
  nextTick(() => {
    scrollContainer.value.addEventListener('scroll', handleScroll)
  })
})
onUnmounted(() => {
  const container = scrollContainer.value
  if (container) {
    container.removeEventListener('scroll', handleScroll)
  }
})
</script>
