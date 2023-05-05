//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入模块，store对象相当于一个模块
//该模块一般放在store目录中，并且模块文件用index.js命名，这样导入的时候导入store文件夹即可自动识别到该文件
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