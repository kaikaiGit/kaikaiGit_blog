//引入svg组件
import SvgIcon from './svg-icon/index'

//配置多个全局组件
const componentsConfig = [
  {
    name: 'SvgIcon',
    component: SvgIcon
  }
]

function addGlobal() {
  return {
    install: function (Vue) {
      componentsConfig.forEach((config) => {
        Vue.component(config.name, config.component)
      })
    }
  }
}
const components = addGlobal()
export default components
