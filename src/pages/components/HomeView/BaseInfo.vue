<template>
  <div class="myInfo">
    <div class="container">   
      <h2 class="mainInfo">
        <div>
          我是JK Wu，
        </div>
        <div>
          一位前端工程师
        </div>
        <div class="box">
          <div>
            <span>酷爱探索</span>
            <br>
            <span>追求卓越</span>
            <br>
            <span>酷爱探索</span>
          </div>
        </div>
        <span>中国·深圳</span>
      </h2>

      <div class="flex-horizontal" style="height: 350px;">
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
  gap:20px;

  .mainInfo{
    flex: 1;
    min-width: 170px;
    div {
      font-size: 2rem;
      font-weight: 600;
      font-family: 'dd Regular';
      line-height: 1.5em;
    }

    .box {
      overflow: hidden;
      height: 50px;
    }

    div span:first-of-type{
      color: transparent;
      background: -webkit-linear-gradient(left, #1b3eed, #13dfb6) 0 0 no-repeat;
      background-clip: text;
    }

    div span:nth-of-type(2n){
      color: transparent;
      background: -webkit-linear-gradient(left, #ff5500, #ffff00) 0 0 no-repeat;
      background-clip: text;
    }

    div span:last-of-type{
      color: transparent;
      background: -webkit-linear-gradient(left, #1b3eed, #13dfb6) 0 0 no-repeat;
      background-clip: text;
    }

    @keyframes moveToTop {
      0% {
        transform: translateY(0);
      }
      7% {
        transform: translateY(-3.625rem);
      }
      50% {
        transform: translateY(-3.625rem);
      }
      57% {
        transform: translateY(-7.25rem);
      }
      100% {
        transform: translateY(-7.25rem);
      }
    }

    div > div {
      animation: moveToTop 4s ease-in-out infinite;
    }

    span {
      line-height: 1.8em;
      color: #888;
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
