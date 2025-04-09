//引入svg组件
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'

//配置多个全局组件
const componentsConfig = [
  {
    name: 'SvgIcon',
    component: SvgIcon
  }
]

function addGlobal() {
  return {
    install: function (Vue: any) {
      componentsConfig.forEach((config) => {
        Vue.component(config.name, config.component)
      })
    }
  }
}
const components = addGlobal()
export default components
