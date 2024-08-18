<template>
  <div>
    <h1>个人简介</h1>
    <div class="container">
      <div class="infos">
        <ul>
          <li>
            <div class="flex-vertical">
              <el-icon class="infoIcon">
                <User />
              </el-icon>
              姓名：
            </div>
            <div>吴嘉楷</div>
          </li>

          <li>
            <div class="flex-vertical">
              <el-icon class="infoIcon">
                <Male />
              </el-icon>
              性别：
            </div>
            <div>男</div>
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

          <li>
            <div class="flex-vertical">
              <el-icon class="infoIcon">
                <Calendar />
              </el-icon>
              生日：
            </div>
            <div>{{ dayjs('2003-03-14').format('YYYY-MM-DD') }}</div>
          </li>

          <li>
            <div class="flex-vertical">
              <el-icon class="infoIcon">
                <Place />
              </el-icon>
              籍贯：
            </div>
            <div>广东汕头</div>
          </li>

          <li>
            <div class="flex-vertical">
              <el-icon class="infoIcon">
                <Message />
              </el-icon>
              邮箱：
            </div>
            <div>2431208434@qq.com</div>
          </li>

          <li>
            <div class="flex-vertical">
              <el-icon class="infoIcon">
                <Postcard />
              </el-icon>
              职位：
            </div>
            <div>前端开发工程师</div>
          </li>
        </ul>
      </div>

      <div class="flex-horizontal" style="height: 280px; flex-grow: 1">
        <div><img src="@/assets/images/myPic.jpg" alt="JK Wu" style="height: 100%" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .infos {
    font-size: 18px;
    // flex-grow: 1;

    li {
      width: calc(100px + 30vw);
      display: flex;
      justify-content: space-between;
      padding: 10px 10px;
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
