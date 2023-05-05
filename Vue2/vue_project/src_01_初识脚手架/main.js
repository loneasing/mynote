/* 
	该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue' // 这个vue是运行版的vue.runtime.esm.js
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

/* 
	关于不同版本的Vue：
	
		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

//创建Vue实例对象
new Vue({
  /*render函数功能：注册组件，将App组件放入容器中
    render函数的形参是一个函数，用于创建元素，它需要将创建的元素返回。
  */
  /*
      render(createElement){
         const div = createElement('div','你好呀')
         return div
      }
  */
  // 下面是箭头函数的写法，h代表的就是函数的形参，App代表组件名，组件的内容在App里面，所以只需要传入一个参数给h函数
  render: h => h(App),
}).$mount('#app')
