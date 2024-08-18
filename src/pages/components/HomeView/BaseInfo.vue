<template>
  <div class="myInfo">
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
                <Calendar />
              </el-icon>
              生日：
            </div>
            <div>2003-03-14</div>
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
                <School />
              </el-icon>
              学校：
            </div>
            <div>深圳大学</div>
          </li>

          <li>
            <div class="flex-vertical">
              <el-icon class="infoIcon">
                <Key />
              </el-icon>
              专业：
            </div>
            <div>计算机科学与技术</div>
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

      <div class="flex-horizontal" style="height: 350px; flex-grow: 1">
        <div class="picBox">
          <img
            src="@/assets/images/myPic.jpg"
            alt="JK Wu"
            style="height: 100%; transition: 0.3s all"
          />
          <div class="cover">
            <div style="margin-top: 10px">JK Wu</div>
            <div class="desc">一位酷爱探索的开发者</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .infos {
    font-size: 18px;

    li {
      width: calc(300px);
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

  .picBox {
    position: relative;
    overflow: hidden;

    &:hover {
      .cover {
        bottom: 0;
        .desc {
          animation: moveBgc 3s 1 forwards;
        }
      }
      img {
        transform: scale(1.1);
      }
    }

    .cover {
      position: absolute;
      bottom: -30%;
      width: 100%;
      height: 30%;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      color: white;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.7;
      transition: 0.3s all;

      .desc {
        font-size: 18px;
        font-weight: 400;
        color: transparent;
        background: -webkit-linear-gradient(left, #ff5500, #ffff00) 0 0 no-repeat;
        background-size: 28px;
        background-clip: text;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}

@keyframes moveBgc {
  0% {
    background-position: 0 0;
  }
  95% {
    background-position: 100% 100%;
    color: rgba(255, 255, 255, 0.6);
  }
  100% {
    color: #fff;
  }
}
</style>
