<template>
	<div>
		<ul>
			<li v-for="msg in messageList" :key="msg.id">

				<!-- 传递params参数给路由组件使用有两种方式：
						(1) to的模板字符串写法：将参数直接写到路径中
						(2) to的对象写法：将路径和参数分被封装成对象的path属性和params属性（path属性可以用name属性替换）

				-->

				<!-- to的模板字符串写法 -->
				<router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link>

				<!-- 跳转路由并携带params参数，to的对象写法 -->
				<router-link :to="{
					name:'detail',
					params:{
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