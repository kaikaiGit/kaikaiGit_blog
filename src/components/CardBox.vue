!<template>
  <div class="card">
    <div class="flex-vertical" v-if="title !== ''">
      <i class="iconfont" :class="iconName"></i>
      <span>{{ title }}</span>
    </div>

    <slot>默认内容</slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconName: {
    type: String,
    default: '',
    required: false
  },
  title: {
    type: String,
    default: '',
    required: false
  },
});
</script>

<style lang="scss" scoped>
.card {
  flex: 1;
  padding: 25px 20px;
  min-width: 280px;
  min-height: 140px;
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 var(--boxShadowColor);
  overflow: hidden;

  .flex-vertical {
    margin-bottom: 25px;
  }
}

.iconfont{        
  font-size: 1.5rem;
  margin-right: 6px;
}
</style>