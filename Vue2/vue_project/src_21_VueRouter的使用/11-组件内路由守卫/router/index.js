// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建一个路由器
const router =  new VueRouter({
	// 路由配置项routes，值是一个数组，数组中的元素是一个个的路由配置对象
	routes: [
		{
			name:'about',
			path:'/about',
			component: About,
			// meta配置项，它的值是一个对象，我们自定义的一些属性就放在该配置项里面，比如权是否需要鉴权
			meta:{title:'关于'}
			
		},
		{
			name:'home',
			path:'/home',
			component: Home,
			children: [
				{
					name:'news',
					path: 'news',
					component: News,
					meta: { isAuth: true, title: '新闻' },	// 自定义一个isAuth属性，表示是否需要鉴权
					// 设置独享路由守卫：beforeEnter() ，三个参数和beforeEach()一样
					// 该方法在切换到该路由时之前被调用。
					beforeEnter: (to, from, next) => {
						console.log('独享路由守卫',to,from)
						if(to.meta.isAuth){ //判断是否需要鉴权
							if(localStorage.getItem('name')==='hello'){
								next()
							}else{
								alert('数据错误，无权限查看！')
							}
						}else{
							next()
						}
					}
				},
				{
					name:'message',
					path: 'message',
					component: Message,
					children: [
						{
							name: 'detail',	
							path: 'detail',	
							component: Detail,
							meta:{isAuth:true,title:'详情'},
							props($route){
								return {
									// 可以获取query参数以props的形式传递
									id:$route.query.id,
									title: $route.query.title,
									// 可以传自定义参数
									a:1,
									b:'hello'
								}
							}
						},
						
					]
				}
			]
		}
	]
})

// 设置全局前置路由守卫	--- 初始化时被调用、每次切换路由之前被调用
// 该方法有三个参数，第一个参数表示要跳转的路由，第二个参数表示从哪个路由跳转，第三个参数为放行函数
/* router.beforeEach((to, from, next) => {
	console.log('前置路由守卫',to,from)
	if (to.meta.isAuth) { //读取meta中的数据判断是否需要鉴权
		// 这里从浏览器本地存储中获取数据，若获取到数据不符合要求则无权查看
		if(localStorage.getItem('name')==='hello'){
			next()	// next()表示放行，可以查看
		}else{
			alert('数据错误，无权限查看！')
		}
	}else{
		next()
	}
}) */

// 设置全局后置路由守卫 --- 初始化的时候被调用、每次路由切换之后被调用
// 该方法有三个参数，第一个参数表示要跳转的路由，第二个参数表示从哪个路由跳转
router.afterEach((to,from)=>{
	console.log('后置路由守卫',to,from)
	document.title = to.meta.title || '学习Vue'	// 将meta中自定义的title设置为页面的标题，若没有则默认“学习Vue”
})


// 暴露路由器
export default router