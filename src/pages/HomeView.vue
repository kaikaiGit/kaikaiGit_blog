<template>
  <div class="body">
    <!-- 导航菜单 -->
    <nav class="homeNav">
      <a :href="'#' + item.id" @click.prevent="scrollTo(item.id)" class="navItem"
      v-for="(item, index) in navList"
      :key="index"
      :class="{ active: activeSection === item.id }">
        <i class="iconfont" :class="item.icon"></i>
      </a>
    </nav>
    <!-- 首页内容 -->
    <div class="banner">
      <component
        v-for="item in navList"
        :key="item.id"
        :is="item.component"
        :id="item.id"
        style="margin-bottom: 40px"
      />
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
  .banner {
    margin: 0 auto;
    padding: 30px;
    max-width: 1000px;
  }
    
  nav {
    position: fixed;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--greyBgc);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 30px;
    padding-block: 20px;
    z-index: 1000;
    color: #444;

    a {
      display: inline-block;
      width: 44px;
      height: 44px;
      line-height: 44px;
      margin: 8px;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
      transition: 0.3s all; 

      .iconfont {
        font-size: 32px;
      }

      &:hover {
        background-color: #fff; //防止选中状态悬停变色
      }
    } 
  }

  .active {
    font-weight: bold;
    color: var(--themeColor);
    background-color: #fff;
    border-radius: 10px;
    position: relative;
  }

  .active::before {
      content: '';  /* 伪元素必须设置 content */
      width: 6px;
      height: 20px;
      background-color: var(--greyBgc);
      border-radius: 3px;  /* 圆形效果 */
      position: absolute;  /* 绝对定位 */
      left: -18px;  /* 定位在元素的最左边 */
      top: 50%;  /* 垂直居中 */
      transform: translateY(-50%);  /* 精确居中 */
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

// 平滑滚动到指定锚点
const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 监听滚动事件并更新当前视口中的锚点
const handleScroll = () => {
  navList.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 60) activeSection.value = item.id
    }
  })
}

// 添加和移除滚动事件监听
onMounted(() => {
  nextTick(() => {
    window.addEventListener('scroll', handleScroll);
  })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
