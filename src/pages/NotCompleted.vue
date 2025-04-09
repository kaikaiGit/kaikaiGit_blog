<template>
  <div class="flex-column flex-vertical">
    <div class="btn-shine">作者正在努力完善中</div>
    <SvgIcon iconClass="buildingNow" style="height: 28rem; width: 28rem" />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.btn-shine {
  margin-block: 80px 0;
  font-size: 2.5rem;
  font-weight: 600;
  color: transparent;
  background: -webkit-linear-gradient(left, #ff5500, #ffff00) 0 0 no-repeat;
  background-size: 5rem;
  background-clip: text;
  color: rgba(255, 255, 255, 0.6);
  animation: moveBgc 3s forwards infinite;
}
@keyframes moveBgc {
  0% {
    background-position: 0 0;
  }
  90% {
    background-position: 100% 100%;
    color: rgba(255, 255, 255, 0.6);
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>