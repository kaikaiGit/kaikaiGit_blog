<template>
  <div>
    <h1>个人简介</h1>
    <div class="container">
      <div class="infos">
        <ul>
          <li>
            <div class="flex-vertical">
              <el-icon class="infoIcon">
                <user />
              </el-icon>
              姓名：
            </div>
            <div>吴嘉楷</div>
          </li>
          <li>
            <div class="flex-vertical">
              <el-icon class="infoIcon">
                <Iphone />
              </el-icon>
              电话：
            </div>
            <div>17825698559</div>
          </li>
        </ul>
      </div>
      <div class="flex-grow"></div>
      <img src="@/assets/images/myPic.jpg" alt="JK Wu" height="250px" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0;
}

.container {
  display: flex;
  flex-wrap: wrap;

  .infos {
    font-size: 18px;

    li {
      width: 200px;
      display: flex;
      justify-content: space-between;
      padding: 8px 5px;
      border-bottom: 1px dashed #aaa;
    }

    li:last-of-type {
      border-bottom: none;
    }

    .infoIcon {
      margin-right: 6px;
    }
  }
}
</style>
