<template>
  <div class="body">
    <div class="top"></div>
    <div class="content">
      <h1 class="title">About me</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'dd Regular';
  src:
    url('@/assets/fonts/dd_Regular/bjJcJl24BO6h.woff2') format('woff2'),
    url('@/assets/fonts/dd_Regular/bjJcJl24BO6h.woff') format('woff');
  font-display: swap;
}

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
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .title {
      position: absolute;
      left: 0;
      top: -55px;
      font-size: 34px;
      font-weight: 700;
      font-family: 'dd Regular';
      letter-spacing: 0.05em;
      color: white;
    }
  }
}
</style>

<script setup lang="ts"></script>
