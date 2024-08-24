<template>
  <div class="myInfo">
    <h1>实习经历</h1>
    <div class="content">
      <div class="flex-horizontal-between">
        <span class="company flex-vertical">深圳市区块跳动科技有限公司</span>
        <el-tag type="primary" effect="dark" round disable-transitions>前端实习生</el-tag>
        <span class="period flex-vertical">2024.07 - 至今</span>
      </div>
      <!-- 实习项目内容 -->
      <el-collapse v-model="activeName" accordion class="company-projects">
        <el-collapse-item name="1">
          <template #title>
            <img src="@/assets/images/airform-logo.webp" alt="stickerHub-logo" />
            Airform
          </template>
          <ul>
            <li>
              项目链接：
              <a href="https://airform.ai/" target="_blank">官方网站</a>
            </li>
            <li>
              项目描述： 基于React + Redux + MUI + i18n + Echart + Ts的一款面向海外的表单构建工具
            </li>
            <li>
              项目职责：
              负责使用table、grid、flex等布局方式以及css媒体查询优化workspace页面的移动端适配效果，同时使用Echart优化表单result页面的数据可视化展示。
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <img src="@/assets/images/game-logo.webp" alt="stickerHub-logo" />
            Monology Game
          </template>
          <ul>
            <li>
              项目链接：
              <a href="https://monopolygo.game/" target="_blank">官方网站</a>
            </li>
            <li>项目描述： 基于Nextra + i18n + nodejs的一款用于推流的游戏攻略网站</li>
            <li>
              项目职责： 负责接入 disqus
              第三方评论库的服务，同时根据产品的调研结果，在nextra、i18n多语言框架基础上，使用mdx语法修改、发布文章。
              为简化多语言的翻译操作，本人使用 node.js
              编写了一套自动化脚本，用于读取文章内容及多语言配置项，通过调用 openai 的 api
              接口翻译读取到的信息后输出为其他语言版本的文件，极大加快了工作流程。
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <img src="@/assets/images/stickerHub-logo.webp" alt="stickerHub-logo" />
            StickerHub
          </template>
          <ul>
            <li>
              项目链接：
              <a href="https://stickerhub.io/" target="_blank">官方网站</a> &
              <a
                href="https://play.google.com/store/apps/details?id=com.meta.inno.sticker"
                target="_blank"
                >下载链接</a
              >
            </li>
            <li>
              项目描述： 基于React Native + AntD + html + css3 + js + i18n的面向海外的一款移动App
            </li>
            <li>
              项目职责：
              负责对接后端api，并根据UI设计稿完成web端页面的构建和交互逻辑，同时上报埋点以分析用户信息，使用i18n国际化框架完成项目的多语言配置。
            </li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content {
  .company {
    font-weight: bolder;
  }

  .tag {
    border-radius: 15px;
    height: 30px;
    width: 100px;
    background-color: var(--themeColor);
    color: #fff;
  }

  .company-projects {
    margin-top: 20px;
    a {
      color: var(--el-color-primary);
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
</style>
