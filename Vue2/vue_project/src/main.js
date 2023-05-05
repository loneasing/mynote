//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

// 完整引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
// 应用ElementUI组件库
// Vue.use(ElementUI);

// 按需引入组件		---按需引入不需要引入样式，会根据引入的组件自动引入组件使用的样式
import { Button,Row,DatePicker } from 'element-ui';
// 全局注册引入的组件		---这里可以将给组件自定义名字，比如Vue.component('hello',Button)
Vue.component('element-button', Button);
Vue.component('element-row', Row);
Vue.component('element-date-picker', DatePicker);

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
})
