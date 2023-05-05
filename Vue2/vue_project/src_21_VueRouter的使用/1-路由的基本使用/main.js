//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入vue-router插件
import VueRouter from 'vue-router'
//引入路由器,路由器一般放在router文件中，路由器文件一本命名为index.js（如果是index.js则引入的时候可以省略文件名）
import router from './router'
//关闭Vue的生产提示
Vue.config.productionTip = false
//注册vue-router插件
Vue.use(VueRouter)	// 注册vue-router插件，并且配置router配置项后，vm和vc身上就会出现$router属性和$route属性

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	// 配置路由器（可以使用对象简写形式）
	router:router 
})