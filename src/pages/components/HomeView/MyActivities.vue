<template>
  <div class="myInfo">
    <h1>校园经历</h1>
    <h2>校园风光</h2>
    <div class="schoolBox">
      <img src="@/assets/images/schoolPic.webp" alt="ShenZhen University" style="width: 100%" />
    </div>

    <h2>基本情况</h2>
    <ul class="infos">
      <li>
        <div class="left">学校：</div>
        <div class="right">深圳大学</div>
      </li>
      <li>
        <div class="left">学院：</div>
        <div class="right">计算机与软件学院</div>
      </li>
      <li>
        <div class="left">专业：</div>
        <div class="right">计算机科学与技术(创新班)</div>
      </li>
      <li>
        <div class="left">绩点：</div>
        <div class="right">4.01(top 5%)</div>
      </li>
      <li>
        <div class="left">职务：</div>
        <div class="right">班级干部、志愿者协会副会长、智能基座软开部成员</div>
      </li>
    </ul>

    <h2>活动碎片</h2>
    <el-carousel motion-blur :height="picHeight" id="picCarousel" type="card">
      <el-carousel-item v-for="(item, index) in 4" :key="item">
        <img
          :src="`src/assets/images/activity${index + 1}.jpg`"
          alt=""
          height="100%"
          width="100%"
          style="object-fit: cover"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
const picHeight = ref('400px')

const calPicHeight = () => {
  const picBox = document.querySelector('#picCarousel')
  picHeight.value = `${picBox.clientWidth * 0.32}px`
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
h2 {
  font-size: 20px;
  line-height: 2;
  text-align: center;
}
.schoolBox {
  overflow: hidden;
  margin-bottom: 30px;
  & img {
    width: 100%;
    transition: 0.8s all;
  }

  & img:hover {
    transform: scale(1.3);
  }
}

.infos {
  font-size: 18px;
  background-color: rgba($color: wheat, $alpha: 0.3);
  border-radius: 10px;
  margin-bottom: 30px;

  li {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    border-bottom: 1px dashed #aaa;
    .left {
      min-width: 60px;
    }
    .right {
      max-width: 600px; /* 设置最大宽度 */
      white-space: nowrap; /* 禁止换行 */
      overflow: hidden; /* 隐藏溢出内容 */
      text-overflow: ellipsis;
    }
  }

  li:last-of-type {
    border-bottom: none;
  }

  .infoIcon {
    margin-right: 6px;
  }
}
</style>
