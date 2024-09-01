<template>
  <div class="myInfo">
    <h1>荣誉奖项</h1>

    <div class="content flex-vertical">
      <div class="prizeInfo flex-column">
        <div class="item flex-vertical">
          <div class="prize">深圳大学学习之星二等奖</div>
          <div class="space"></div>
        </div>

        <div class="item flex-vertical">
          <div class="space"></div>
          <div class="prize">深圳大学优秀学生干部</div>
        </div>

        <div class="item flex-vertical">
          <div class="prize">蓝桥杯软件赛C++组省赛二等奖</div>
          <div class="space"></div>
        </div>

        <div class="item flex-vertical">
          <div class="space"></div>
          <div class="prize">HarmonyOS应用开发者高级认证</div>
        </div>

        <div class="item flex-vertical">
          <div class="prize">工业互联网平台开发工程师初级证书</div>
          <div class="space"></div>
        </div>

        <div class="item flex-vertical">
          <div class="space"></div>
          <div class="prize">腾讯开源结课证书</div>
        </div>
      </div>
      <div class="flex-horizontal"><img src="@/assets/images/prizeFigure.svg" width="250px" /></div>
    </div>

    <el-carousel :height="picHeight" id="picCarousel" type="card">
      <el-carousel-item v-for="(pic, index) in picList" :key="index">
        <img :src="pic" height="100%" width="100%" style="object-fit: cover" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const picList = [
  '/src/assets/images/prize1.jpg',
  '/src/assets/images/prize2.jpg',
  '/src/assets/images/prize3.jpg',
  '/src/assets/images/prize4.jpg'
]

const picHeight = ref('400px')

const calPicHeight = () => {
  const picBox = document.querySelector('#picCarousel')
  if (!picBox) return
  picHeight.value = `${picBox.clientWidth * 0.7}px`
}

onMounted(() => {
  //初始化图片高度
  calPicHeight()
  //动态更新图片高度
  window.addEventListener('resize', calPicHeight)
})

// 移除 resize 事件监听
onUnmounted(() => {
  window.removeEventListener('resize', calPicHeight)
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 980px) {
  .content .flex-horizontal {
    display: none;
  }
}

.content {
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
  & > div:nth-child(2) {
    flex: 1;
  }
}

.prizeInfo {
  border-radius: 16px;
  gap: 30px;
  box-sizing: border-box;
  padding: 140px 60px 70px;
  background: url(@/assets/images/prizeBg.webp) center/100% no-repeat;
  width: 400px;
  height: 550px;
  min-width: 360px;

  .item {
    color: white;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;

    .prize {
      padding: 8px 12px;
      background-color: var(--redBgc);
      border-radius: 8px;
    }
    .space {
      flex: 1;
      height: 0px;
      border-bottom: 1px dashed white;
    }
  }
}
</style>
