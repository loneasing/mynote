//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入vue-router插件
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//关闭Vue的生产提示
Vue.config.productionTip = false
//注册vue-router插件
Vue.use(VueRouter)	// 注册vue-router插件，并且配置router配置项后，vm和vc身上就会出现$router属性和$route属性

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	// 配置路由（可以使用对象简写形式）
	router:router 
})