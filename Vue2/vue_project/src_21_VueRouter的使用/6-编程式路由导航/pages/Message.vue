<template>
	<div>
		<ul>
			<li v-for="msg in messageList" :key="msg.id">

				<!-- 跳转路由并携带query参数，to的对象写法 -->
				<!-- 因为路由配置了props，所以query参数被转换成了props形式的参数传递，接收的时候也更方便 -->
				<router-link :to="{
					name:'detail',
					query:{
						id:msg.id,
						title:msg.title
					}
				}" replace>
					{{msg.title}}
				</router-link>
				<!-- push模式跳转路由，会留下历史记录，可以点击浏览器的左上角的箭头回退到上一个路由组件 
					 replace模式跳转路由，不会留下历史记录，不可以回退到『上一个』路由组件。
					 默认是push模式，需要切换replace模式直接在router-link标签上添加replace即可。 -->

				<!-- 下面介绍编程式路由导航，通过push()和replace方法实现路由跳转。
					这两个方法在$router中，他们的参数是一个对象，和to的对象写法中的对象一样。-->
				<button @click="pushShow(msg)">push查看</button>
				<button @click="replaceShow(msg)">replace查看</button>
			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data(){
			return{
				messageList:[
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
			}
		},
		methods: {
			// 编程式路由导航
			pushShow(msg){
				this.$router.push({
					name:'detail',
					query:{
						id:msg.id,
						title:msg.title
					}
				})
			},
			replaceShow(msg){
				this.$router.replace({
					name:'detail',
					query:{
						id:msg.id,
						title:msg.title
					}
				})
			}
		},
	}
</script>