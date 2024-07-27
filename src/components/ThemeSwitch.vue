<template>
  <div class="env-box" style="height: 100%; width: 330px">
    <el-switch
      v-model="isdark"
      size="large"
      inline-prompt
      :style="{
        '--el-switch-on-color': myColor.darkInputBgc,
        '--el-switch-off-color': myColor.inputBgc
      }"
    >
      <template #active-action>
        <el-icon>
          <MoonNight />
        </el-icon>
      </template>
      <template #inactive-action>
        <el-icon>
          <Sunny />
        </el-icon>
      </template>
    </el-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core' //主题切换相关
import { myColor } from '@/assets/themes'

//主题切换相关
const isDark = useDark()
const toggleDark = useToggle(isDark)
const isdark = ref(isDark)
</script>

<style></style>
