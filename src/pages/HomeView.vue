<template>
  <div class="body">
    <div class="top"></div>
    <div class="bottom">
      <div
        class="content"
        :style="
          isDark && { backgroundColor: '#000', boxShadow: '0 2px 12px 0 rgba(255, 255, 255, 0.1)' }
        "
      >
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
              <i class="iconfont" :class="item.icon"></i>
              <a :href="'#' + item.id">{{ item.title }}</a>
            </div>
          </nav>
          <!-- 右侧内容信息 -->
          <div class="info" ref="scrollContainer">
            <component
              v-for="item in navList"
              :key="item.id"
              :is="item.component"
              :id="item.id"
              style="margin-bottom: 40px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//使用阿里云字体
@font-face {
  font-family: 'dd Regular';
  src:
    url('@/assets/fonts/dd_Regular/bjJcJl24BO6h.woff2') format('woff2'),
    url('@/assets/fonts/dd_Regular/bjJcJl24BO6h.woff') format('woff');
  font-display: swap;
}

.body {
  .top {
    height: 120px;
    background-color: var(--themeColor);
  }

  .bottom {
    padding-inline: 30px;
  }

  .content {
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    max-width: 1100px;
    margin: -50px auto;
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
      color: transparent;
      background-image: url('@/assets/images/bg1.webp');
      background-position: 50% 60%;
      background-clip: text;
    }

    .infoBanner {
      display: flex;
      height: calc(100vh - 220px);

      nav {
        display: flex;
        flex-direction: column;
        gap: 10px;
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
          transition: 0.2s all;

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
import BaseInfo from './components/HomeView/BaseInfo.vue'
import MySkills from './components/HomeView/MySkills.vue'
import MyInternship from './components/HomeView/MyInternship.vue'
import MyProjects from './components/HomeView/MyProjects.vue'
import MyActivities from './components/HomeView/MyActivities.vue'
import MyPrizes from './components/HomeView/MyPrizes.vue'
import { useDark } from '@vueuse/core' //主题切换相关

/* 主题切换相关 */
const isDark = useDark()

const navList = [
  {
    id: 'wjk-info',
    title: '个人简介',
    icon: 'icon-jibenxinxi',
    component: BaseInfo
  },
  {
    id: 'wjk-skills',
    title: '专业技能',
    icon: 'icon-zhuanyejineng',
    component: MySkills
  },
  {
    id: 'wjk-activities',
    title: '校园经历',
    icon: 'icon-kejiluntan',
    component: MyActivities
  },
  {
    id: 'wjk-internship',
    title: '实习经历',
    icon: 'icon-shixi',
    component: MyInternship
  },
  {
    id: 'wjk-projects',
    title: '项目经历',
    icon: 'icon-project',
    component: MyProjects
  },
  {
    id: 'wjk-prizes',
    title: '荣誉奖项',
    icon: 'icon-rongyu',
    component: MyPrizes
  }
]

const activeSection = ref('wjk-info') //当前选中的navItem的id
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
  if (!container) return //如果没有滚动容器则返回
  const containerRect = (container as HTMLElement).getBoundingClientRect()
  navList.forEach((item) => {
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
    if (scrollContainer.value)
      (scrollContainer.value as HTMLElement).addEventListener('scroll', handleScroll)
  })
})
onUnmounted(() => {
  const container = scrollContainer.value
  if (container) {
    ;(container as HTMLElement).removeEventListener('scroll', handleScroll)
  }
})
</script>
