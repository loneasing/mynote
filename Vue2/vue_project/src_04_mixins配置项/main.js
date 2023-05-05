//引入Vue
import Vue from 'vue' 
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入混入
//import {show,mydata} from './mixin'
// 注册全局混入
// Vue.mixin('show')
// Vue.mixin('mydata')
//关闭vue的生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
