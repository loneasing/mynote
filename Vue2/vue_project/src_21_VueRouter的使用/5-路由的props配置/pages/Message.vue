<template>
	<div>
		<ul>
			<li v-for="msg in messageList" :key="msg.id">

				<!-- 跳转路由并携带query参数，to的对象写法 -->
				<!-- 因为路由配置了props，所以query参数被转换成了props形式的参数传递，接收的时候可以用props配置项接收-->
				<router-link :to="{
					name:'detail',
					query:{
						id:msg.id,
						title:msg.title
					}
				}">
					{{msg.title}}
				</router-link>

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
		}
	}
</script>