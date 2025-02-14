<template>
  <div class="body">
    <nav class="homeNav">
      <a :href="'#' + item.id" @click.prevent="scrollTo(item.id)" class="navItem"
      v-for="(item, index) in navList"
      :key="index"
      :class="{ active: activeSection === item.id }">
        <i class="iconfont" :class="item.icon"></i>
      </a>
    </nav>
    <div class="banner">
      <component
        v-for="item in navList"
        :key="item.id"
        :is="item.component"
        :id="item.id"
        style="margin-bottom: 40px"
      />
    </div>
    <!-- 底部栏 -->
    <div class="bottom">
      <div class="banner">
        <div class="bottom-info flex-vertical">
          <el-icon><User /></el-icon>
          Find me on <a href="https://github.com/kaikaiGit">Github</a>,
          <a href="https://gitee.com/szu_kaikai">Gitee</a>.
        </div>

        <div class="bottom-info flex-vertical">
          <el-icon><Promotion /></el-icon>
          Mail me at <a href="mailto:2431208434@qq.com">Hi@JK</a>.
        </div>

        <div class="flex-horizontal-between">
          <span class="Copyright">© 2025 JK Wu</span>
          <a href="https://github.com/kaikaiGit/kaikaiGit_blog" target="_blank" class="flex-horizontal">
            <div class="starIcon flex-vertical">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star size-4">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                </path>
              </svg>
              <span>Star</span>
            </div>
            <div class="starNum flex-vertical">
              {{starNum}}
            </div>
          </a>
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
  .banner {
    margin: 0 auto;
    padding: 30px;
    max-width: 1000px;
    // background-color: grey;
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

  .bottom {
    background-color: rgba(255,255,255,0.2);

    .bottom-info {
      gap: 10px;
      margin-bottom: 20px;

      a {
        border-bottom: 1px solid rgba(125, 125, 125, 0.3);

        &:hover {
          border-bottom: 1px solid rgb(125, 125, 125);
        }
      }
    }

    .flex-horizontal-between {
      margin-top: 30px;
      align-items: center;

      .Copyright {
        color: #aaa;
        font-size: 14px;
      }

      a {
        border: 1px solid  var(--borderColor);
        border-radius: 5px;
        overflow: hidden;
        height: 40px;

        .starIcon {
          background-color: #eee;
          padding-inline: 0.5rem; 
          gap: 0.5rem;
          border-right: 1px solid #ccc;
        }

        .starNum {
          background-color: #fff;
          padding-inline: 0.8rem; 
        }
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

// 获取仓库的star数量
const starNum = ref(1)

const getStar = async () => {
  const url = "https://api.github.com/repos/kaikaiGit/kaikaiGit_blog"
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`请求失败: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();    
    starNum.value = data.stargazers_count; 
  } catch (error) {
    console.error("获取数据失败:", error);
  }
}
getStar()

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
