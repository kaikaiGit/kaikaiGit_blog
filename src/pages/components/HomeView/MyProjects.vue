<template>
  <div class="myInfo flex-column">
    <h1>项目经历</h1>
    <!-- 小智聊天助手 -->
    <card-box class="content">
      <div class="flex-horizontal-between">
        <span class="company flex-vertical">小智聊天助手app</span>
        <el-tag type="success" effect="dark" round disable-transitions>前端开发者</el-tag>
        <span class="flex-vertical">2024.11 - 2024.11</span>
      </div>

      <ul>
        <li>
          项目链接：
          <a href="https://github.com/kaikaiGit/chatAI" target="_blank">代码仓库</a>
        </li>
        <li>
          项目描述： 基于 ArkTs 开发的 AI 对话助手，支持用户输入消息，并调用 AI 接口返回智能回复，旨在提供便捷的、仿真的对话体验。
        </li>
        <li>
          功能介绍：<br />
          1.模仿微信聊天页面实现的一个AI对话HarmonyOS app。<br />
          2.生成式AI接口调用了讯飞星火提供的API，使用到了http模块进行网络请求。<br />
          3.将每次用户发送的问题以及AI进行的回答进行了本地的持久化存储，更加接近微信朋友聊天的场景。<br />
          4.其中对应用图标，应用名进行了配置，同时，还对部分文字内容进行了中文和英文两种语言的国际化配置。
        </li>
        <li>项目成果：成功完成<b>腾讯客户端菁英班</b>课程大作业并顺利结课。</li>
      </ul>
    </card-box>
    <!-- 养趣年轻化社区 -->
    <card-box class="content">
      <div class="flex-horizontal-between">
        <span class="company flex-vertical">养趣-年轻化养生社区</span>
        <el-tag type="success" effect="dark" round disable-transitions>前端主开发</el-tag>
        <span class="flex-vertical">2023.10 - 2024.05</span>
      </div>

      <ul>
        <li>
          项目链接：
          <a href="https://gitee.com/szu_kaikai/young_treat" target="_blank">代码仓库</a>
        </li>
        <li>
          项目描述： 基于 uni-app + Vue + JavaScript + Sass + uview-ui + iconfont + ES6
          的一款微信小程序应用。
        </li>
        <li>
          项目职责：<br />
          1.负责协助UI美工同学设计小程序页面设计图以及项目logo，与后端开发组通过apifox接口文档进行接口联调测试。<br />
          2.作为前端主开发，根据UI图、API文档以及功能需求，协调分配各前端开发成员的工作任务，协同进行uniapp开发。<br />
          3.作为项目微信小程序管理员 ，管理项目成员权限，并对前端开发源代码进行gitee云托管。
        </li>
        <li>
          功能模块：<br />
          &nbsp;&nbsp;用户快捷登录、AI 舌诊、AI
          聊天对话、养生视频模块、社区交流发帖、文章论坛、用户个人相关展示、
          用户信息修改、内容搜索等。
        </li>
        <li>项目成果：获得全国大学生服务外包创新创业大赛C类<b>全国三等奖、广东省一等奖</b>等。</li>
      </ul>
    </card-box>
    <!-- 仿京东购物网站 -->
    <card-box class="content">
      <div class="flex-horizontal-between">
        <span class="company flex-vertical">仿京东购物网站</span>
        <el-tag type="success" effect="dark" round disable-transitions>前端开发者</el-tag>
        <span class="flex-vertical">2023.11 - 2023.12</span>
      </div>

      <ul>
        <li>
          项目链接：
          <a href="https://github.com/kaikaiGit/web_JD" target="_blank">代码仓库</a>
        </li>
        <li>
          项目描述： 基于 html5 + css3 + JavaScript + Vue + Sass + iconfont + element-ui + bootstrap
          的一个web端购物网站。
        </li>
        <li>
          项目职责：<br />
          1.负责调用京东网页并构思前端UI页面<br />
          2.作为前端开发，参考京东网站UI，并根据功能需求文档实现各功能模块。<br />
          3.作为项目仓库管理员，对项目代码进行版本管理及github云托管。
        </li>
        <li>
          功能模块：<br />
          &nbsp;&nbsp;购物网站首页、商品分类-女装页面、品质生活-商品推荐、京东快报、
          客户服务-联系我们、用户注册登录、用户个人信息页、商品搜索、购物车、特惠秒杀等。
        </li>
        <li>项目成果：获得web开发与人机交互课程<b>A等级</b>评分。</li>
      </ul>
    </card-box>
    <!-- 小讯聊天助手 -->
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content {
  font-size: 1rem;
  .company {
    font-weight: bolder;
  }

  ul {
    margin-top: 10px;
    font-size: 13px;
    line-height: 1.5;
    li {
      border-bottom: 1.5px dashed #ebeef5;
      padding-block: 8px;
    }
  }

  a {
    color: var(--el-color-primary);
  }
}
</style>
