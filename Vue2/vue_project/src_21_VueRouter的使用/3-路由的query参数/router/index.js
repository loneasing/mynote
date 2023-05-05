// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
			path:'/about',
			component: About,
		},
		{
			path:'/home',
			component: Home,
			children: [
				{
					path: 'news',
					component:News
				},
				{
					name:'detail',	// 注意这个name和下面的name互不影响，因为他们不是同一级关系，在哪个组件中使用了路由组件，就会匹配对应路由中配置的name。
					path: 'message',
					component: Message,
					children: [
						{
							name: 'detail',	// name属性表示路由的名字，访问此路由的时候就可以用name代替path了，只适合在to的对象形式中才能使用
							path: 'detail',
							component:Detail,
						},
						/* {
							name: 'detail',	// 属于同一级别的路由则不能重复
							path: 'detail',
							component:Detail,
						} */

					]
				}
			]
		}
	]
})
