<template>
  <div class="myInfo">
    <h1>荣誉奖项</h1>

    <el-carousel :height="picHeight" id="picCarousel" type="card">
      <el-carousel-item>
        <img
          src="@/assets/images/prize1.jpg"
          height="100%"
          width="100%"
          style="object-fit: cover"
        />
      </el-carousel-item>

      <el-carousel-item>
        <img
          src="@/assets/images/prize2.jpg"
          height="100%"
          width="100%"
          style="object-fit: cover"
        />
      </el-carousel-item>

      <el-carousel-item>
        <img
          src="@/assets/images/prize3.jpg"
          height="100%"
          width="100%"
          style="object-fit: cover"
        />
      </el-carousel-item>

      <el-carousel-item>
        <img
          src="@/assets/images/prize4.jpg"
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
  if (!picBox) return
  if(picBox.clientWidth > 600){
    console.log(1111);
    picHeight.value = `${600 * 0.72}px`
  }
    
  else
    picHeight.value = `${picBox.clientWidth * 0.75}px`
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
#picCarousel {
  max-width: 600px;
  margin-inline: auto;
}
</style>
