<template>
  <div id="wordcloud" style="width: 100%;height: 80%"></div>
</template>
 
<script setup lang="ts">
import { toRefs, onMounted } from 'vue'
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { debounce } from '@/utils/index.js'

const props = defineProps({
  ciYun: {
    type: Array<{name,value}>,
    default: '',
    required: false
  }
});

const { ciYun } = toRefs(props)    //把props数据解构出来，toRefs实现动态变化

onMounted(() => {
	DrawWordCloud(ciYun)
})

function DrawWordCloud(ciYun) {
    let myChart = echarts.init(document.getElementById('wordcloud'));

    const newResize = debounce(myChart.resize, 300)
    window.onresize = function () {
        newResize()
    };
    
    myChart.setOption({
      series: [{
          type: 'wordCloud',
          shape: 'pentagon',
          keepAspect: false,
          left: 'center',
          top: 'center',
          width: '100%',
          height: '100%',
          right: null,
          bottom: null,
          sizeRange: [14, 30],
          rotationRange: [-50, 50],
          rotationStep: 45,
          gridSize: 8,
          drawOutOfBound: false,
          shrinkToFit: false,
          layoutAnimation: true,
          // Global text style
          textStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                  // Random color
                  return 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                  ].join(',') + ')';
              }
          },
          emphasis: {
              focus: 'self',
              textStyle: {
                  textShadowBlur: 10,
                  textShadowColor: '#333'
              }
          },
          // Data is an array. Each array item must have name and value property.
          data: ciYun.value
      }]
    })
}
        
</script>