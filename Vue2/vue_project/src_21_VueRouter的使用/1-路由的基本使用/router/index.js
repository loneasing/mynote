// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../components/About'
import Home from '../components/Home'

//创建并暴露一个路由器
export default new VueRouter({
	//  mode配置项用来配置路由器的工作模式，有hash和history模式，默认是hash模式，hash模式下地址栏中的地址会有"#"这个符号。
	// mode:'history',
	
	// 路由配置项routes，值是一个数组，数组中的元素是一个个的路由配置对象
	routes: [
		// path表示请求路径，该路径会拼接在端口号后面，不要忘记写“/”
		// component表示请求路径所代表的组件
		// 这些属性名都是固定的，不能随意写
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		}
	]
})
