<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<!-- 访问二级路由的组件，访问地址：一级路由path/二级路由path -->
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<hr>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Home',
		// 每一次切换路由组件都会将被切换的组件实例销毁。
		beforeDestroy() {
			console.log('Home组件即将被销毁了')
		},
		mounted() {
			console.log('Home组件挂载完毕了',this)
			// 每个组件实例的$route属性的值不同，但是$router属性的值是同一个，因为只有一个路由器
			window.homeRoute = this.$route
			window.homeRouter = this.$router
			// 将$router存储到window对象上，在控制台判断homeRouter === aboutRouter
		}, 
	}
</script>