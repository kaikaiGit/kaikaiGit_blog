<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useViewportStore } from './stores/viewPort'
import { debounce } from '@/utils/index'

const viewportStore = useViewportStore()


// 防抖后的更新函数
const debouncedUpdateWidth = debounce(viewportStore.updateWidth, 100);

debouncedUpdateWidth()
/* 监听视口宽度变化 */
// 添加 resize 事件监听
onMounted(() => {
  window.addEventListener('resize', debouncedUpdateWidth)
})
// 移除 resize 事件监听
onUnmounted(() => {
  window.removeEventListener('resize', debouncedUpdateWidth)
})

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
</script>

<template>
  <!-- 导航栏 -->
  <top-nav></top-nav>
  <!-- 预留空间 -->
  <div class="space"></div>
  <!-- 内容 -->
  <router-view></router-view>
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

  <!-- 装饰图 -->
  <img src="@/assets/images/dogIcon.svg" class="dogPic"/>
  <!-- 光标拖尾效果 -->
  <cursor-set></cursor-set>
</template>

<style lang="scss" scoped>
.space {
  height: 60px;
}

.bottom {
  background-color: rgba(255,255,255,0.2);
  margin: 0 auto;
  padding: 30px;
  max-width: 1000px;
  border-radius: 10px;

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
        background-color: var(--starLeftColor);
        padding-inline: 0.5rem; 
        gap: 0.5rem;
        border-right: 1px solid var(--borderColor);
      }

      .starNum {
        background-color: var(--starRightColor);
        padding-inline: 0.8rem; 
      }
    }
  }
}

.dogPic {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 150px;
  z-index: 999;
}
</style>
