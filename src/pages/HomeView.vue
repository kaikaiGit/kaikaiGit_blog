<template>
  <div class="body">
    <div class="top"></div>
    <div class="content">
      <h1 class="title">About me</h1>
      <div class="infoBanner">
        <!-- 左侧导航栏 -->
        <nav>
          <div class="navItem" v-for="(item, index) in navList" :key="index">
            <a
              :href="'#' + item.id"
              :class="{ active: activeSection === item.id }"
              @click.prevent="scrollTo(item.id)"
              >{{ item.title }}</a
            >
          </div>
        </nav>
        <!-- 右侧内容信息 -->
        <div class="info" ref="scrollContainer">
          <div
            :id="item.id"
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
      height: 300px;

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

      .active {
        font-weight: bold;
        color: #007bff;
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
    title: '基本信息'
  },
  {
    id: 'wjk-skills',
    title: '专业技能'
  },
  {
    id: 'wjk-internship',
    title: '实习经历'
  },
  {
    id: 'wjk-projects',
    title: '项目经历'
  },
  {
    id: 'wjk-activities',
    title: '活动经历'
  },
  {
    id: 'wjk-prizes',
    title: '荣誉奖项'
  }
])

const activeSection = ref('') //当前选中的navItem的id
const scrollContainer = ref(null) //滚动的容器

// 平滑滚动到指定锚点
const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 监听滚动事件并更新当前视口中的锚点
const handleScroll = () => {
  const container = scrollContainer.value //获取滚动容器
  const scrollPosition = container.scrollTop
  navList.value.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      console.log(rect.top, rect.bottom, item.title)
      if (rect.top <= container.clientHeight / 2 && rect.bottom >= container.clientHeight / 2) {
        activeSection.value = item.id
      }
    }
  })
}

// 添加和移除滚动事件监听
onMounted(() => {
  nextTick(() => {
    const container = scrollContainer.value
    container.addEventListener('scroll', handleScroll)
  })
})

onUnmounted(() => {
  const container = scrollContainer.value
  if (container) {
    container.removeEventListener('scroll', handleScroll)
  }
})
</script>
