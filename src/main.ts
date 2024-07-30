import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css' //使用黑暗模式
import 'bootstrap/dist/css/bootstrap.min.css' //使用bootstrap
import '@/assets/css/common.scss'
import pinia from './stores'

const app = createApp(App)

// useElement-plus的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)

app.mount('#app')
