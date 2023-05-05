//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入store模块
import store from './store'
//关闭Vue的生产提示
Vue.config.productionTip = false


//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	// 配置store
	store: store,	// 可以使用简写形式
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})