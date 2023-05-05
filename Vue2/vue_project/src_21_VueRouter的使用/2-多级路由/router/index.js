// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

//创建并暴露一个路由器
export default new VueRouter({
	// 路由配置项routes，值是一个数组，数组中的元素是一个个的路由配置对象
	routes: [
		// path表示请求路径，该路径会拼接在端口号后面，不要忘记写“/”
		// component表示请求路径所代表的组件
		// children表示二级路由，值是一个数组，可以配置多个二级路由
		// 这些属性名都是固定的，不能随意写
		{
			path:'/about',
			component: About,
		},
		{
			path:'/home',
			component: Home,
			children: [
				// 注意二级路由的path不需要加“/”，它会自动加上
				{
					path: 'news',
					component:News
				},
				{
					path: 'message',
					component:Message
				}
			]
		}
	]
})
