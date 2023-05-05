import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引入模块
import countOptions from './count'
import wordsOptions from './words'
//应用Vuex插件
Vue.use(Vuex)

//创建并暴露store对象
export default new Vuex.Store({
	// modules：模块配置项
	// 包含多个 module，一个 module 是一个 store 的配置对象，与一个组件（包含有共享数据）对应
	modules: {
		// 键指的是模块的名称，这里也可以用对象的简写形式
		countAbout:countOptions,	// 这就是一个module
		wordsAbout: wordsOptions	// 这也是一个module
		
		/* 	模块中的state配置项的数据会存在以该模块名命名的对象中，并且这些数据是响应式的(有对应的getter和setter)
			该模块对象存在store对象的state属性中。所以想要获取模块中state配置项的数据则需要this.$store.state.模块名.xxx */
	
		/*  这些模块的getters配置项的数据存放store对象的getters属性中，键值对形式存在。
			键的形式：模块名称/计算属性名，比如countAbout/bigSum；值是一个函数。	*/
		
		/* 	这些模块的actions、mutations配置项的数据则存放在_actions、_mutations属性中，也是键值对形式存在。
			键的形式：模块名称/方法名，比如wordsAbout/addWords；值是一个函数。*/
	}
})