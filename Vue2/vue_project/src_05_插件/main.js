//引入Vue
import Vue from 'vue' 
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭vue的生产提示
Vue.config.productionTip = false
//注册插件
Vue.use(plugins,'Alice',18)
new Vue({
  render: h => h(App),
}).$mount('#app')
