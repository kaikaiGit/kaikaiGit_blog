<template>
  <div class="myInfo">
    <el-tooltip class="box-item" effect="dark" content="前端相关技术栈" placement="right">
      <h1 style="display: inline-block">专业技能</h1>
    </el-tooltip>
    <div class="container">
      <el-table :data="tableData" stripe style="width: 100%" @row-click="handleClick">
        <el-table-column prop="title" label="技术栈" width="120" align="center" />
        <el-table-column prop="tag" label="类别" width="120" align="center">
          <template #default="item">
            <el-tag
              :type="typeMap[item.row.tag]"
              :effect="item.row.effect"
              round
              disable-transitions
              >{{ item.row.tag }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column prop="desc" label="描述" min-width="180" header-align="center" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
//点击跳转到对应的技术栈文档
const handleClick = (row: TableItem) => {
  window.open(row.url, '_blank')
}
//技术栈数据
interface TableItem {
  title: string
  desc: string
  url: string
  tag: string
  effect: string
}
const tableData: TableItem[] = [
  {
    title: 'HTML',
    desc: 'HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。',
    url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
    tag: '语言',
    effect: 'dark'
  },
  {
    title: 'CSS',
    desc: '层叠样式表（Cascading Style Sheets，缩写为 CSS）是一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现方式。CSS 描述了在屏幕、纸质、音频等其他媒体上的元素应该如何被渲染的问题。',
    url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
    tag: '语言',
    effect: 'dark'
  },
  {
    title: 'JavaScript',
    desc: 'JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。进一步说，JavaScript 是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。',
    url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
    tag: '语言',
    effect: 'dark'
  },
  {
    title: 'TypeScript',
    desc: 'TypeScript 是具有类型语法的 JavaScript。',
    url: 'https://www.typescriptlang.org/',
    tag: '语言',
    effect: 'dark'
  },
  {
    title: 'Sass',
    desc: '“Sass是世界上最成熟、最稳定、最强大的专业级CSS扩展语言 。”——Sass 官网',
    url: 'https://sass-lang.com/',
    tag: '预处理语言',
    effect: 'light'
  },
  {
    title: 'Vue & Vue3',
    desc: 'Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。',
    url: 'https://v3.cn.vuejs.org/',
    tag: '框架库',
    effect: 'dark'
  },
  {
    title: 'React',
    desc: 'React 是一个用于构建 Web 和原生交互界面的框架库。',
    url: 'https://react.dev/',
    tag: '框架库',
    effect: 'dark'
  },
  {
    title: 'Pinia',
    desc: 'Pinia 起源于 2019 年 11 月左右，当时它作为一项实验，旨在围绕 Vue 的 Composition API 重新设计 Vue 的 Store。',
    url: 'https://pinia.esm.dev/',
    tag: '状态管理',
    effect: 'light'
  },
  {
    title: 'Redux',
    desc: 'Redux 是一个用于可预测和可维护的全局状态管理的 JavaScript 库，常与 React 一起使用。',
    url: 'https://redux.js.org/',
    tag: '状态管理',
    effect: 'light'
  },
  {
    title: 'uni-app',
    desc: 'uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到Android、iOS、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。',
    url: 'https://uniapp.dcloud.io/',
    tag: '跨端框架',
    effect: 'plain'
  },
  {
    title: 'bootstrap',
    desc: 'Bootstrap 是一款功能强大、功能丰富的前端工具包。只需几分钟即可构建任何内容（从原型到生产）。',
    url: 'https://getbootstrap.com/',
    tag: '工具类库',
    effect: 'dark'
  },
  {
    title: 'element-plus',
    desc: 'Element Plus 是一个基于 Vue 3，面向设计师和开发者的组件库。',
    url: 'https://element-plus.org/zh-CN/',
    tag: '组件库',
    effect: 'light'
  },
  {
    title: 'material-ui',
    desc: 'Material UI 是一个开源的 React 组件库，实现了 Google 的 Material Design。它功能全面，开箱即用，可以直接用于生产环境。',
    url: 'https://mui.com/material-ui/',
    tag: '组件库',
    effect: 'light'
  },
  {
    title: 'uview-ui',
    desc: 'uView 是 uni-app 生态专用的、全面兼容nvue的 UI 框架。',
    url: 'https://uviewui.com/',
    tag: '组件库',
    effect: 'light'
  },
  {
    title: 'Node.js',
    desc: 'Node.js 是一个免费、开源、跨平台的 JavaScript 运行时环境，它让开发人员能够创建服务器、Web 应用、命令行工具和脚本。',
    url: 'https://nodejs.org/zh-cn/',
    tag: '运行环境',
    effect: 'dark'
  },
  {
    title: 'Git',
    desc: 'Git 是一个免费开源的分布式版本控制系统，旨在快速高效地处理从小型到大型的所有项目。',
    url: 'https://git-scm.com/',
    tag: '版本控制',
    effect: 'light'
  },
  {
    title: 'iconfont',
    desc: 'iconfont 是阿里巴巴矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。',
    url: 'https://www.iconfont.cn/',
    tag: '素材库',
    effect: 'plain'
  }
]
//标签type映射表
const typeMap = {
  语言: 'primary',
  预处理语言: 'primary',
  工具类库: 'warning',
  框架库: 'success',
  状态管理: 'success',
  跨端框架: 'success',
  组件库: 'warning',
  运行环境: 'info',
  版本控制: 'info',
  素材库: 'info'
}
</script>

<style lang="scss" scoped></style>
