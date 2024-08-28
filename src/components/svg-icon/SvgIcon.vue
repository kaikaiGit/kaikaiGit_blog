<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" />
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup name="SvgIcon">
import { computed } from 'vue'

const props = defineProps({
  // svg图片名称
  iconClass: {
    type: String,
    required: true
  },
  //class样式名称,如果svg标签需要添加class样式,那么就需要该属性来添加svg的样式
  className: {
    type: String,
    default: ''
  }
})

//是否外部链接
const isExternal = computed(() => {
  return /^(https?:|mailto:|tel:)/.test(props.iconClass)
})

//svg图片名称计算属性
const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})

//svg样式名称计算属性
const svgClass = computed(() => {
  if (props.className) {
    return 'svg-icon ' + props.className
  } else {
    return 'svg-icon'
  }
})

const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.iconClass}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
