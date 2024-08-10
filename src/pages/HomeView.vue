<template>
  <div class="body">
    <div class="top"></div>
    <div class="content">
      <h1 class="title">About me</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  .top {
    height: 160px;
    background-color: var(--themeColor);
  }

  .content {
    position: relative;
    height: 100px;
    background-color: #fff;
    border-radius: 10px;
    margin: -66px 32px;

    .title {
      position: absolute;
      left: 0;
      top: -55px;
      font-size: 34px;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: white;
    }
  }
}
</style>

<script setup lang="ts"></script>
