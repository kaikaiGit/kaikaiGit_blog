<template>
  <div class="myInfo">
    <h1>项目经历</h1>
    <div class="content">
      <div class="flex-horizontal-between">
        <span class="company flex-vertical">养趣-年轻化养生社区</span>
        <el-tag type="success" effect="dark" round disable-transitions>前端主开发</el-tag>
        <span class="flex-vertical">2023.10 - 2024.05</span>
      </div>

      <div class="my-projects">
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content {
  .company {
    font-weight: bolder;
  }

  .my-projects {
    ul {
      margin-top: 10px;
      font-size: 13px;
      line-height: 1.5;
      li {
        border-bottom: 1px dashed #ebeef5;
        padding-block: 5px;
      }
    }

    a {
      color: var(--el-color-primary);
    }
  }
}
</style>
