<template>
	<div>
		<ul>
			<li v-for="msg in messageList" :key="msg.id">

				<!-- 传递query参数给路由组件使用有两种方式：
						(1) to的模板字符串写法：将参数以name=value&name=value的形式用?拼接到路径中
						(2) to的对象写法： 将路径和参数分被封装成对象的path属性和query属性。（参数最终也会拼接到路径上）	

					注意：对象形式的写法中path属性可以替换成name属性，name表示路由的名字，需要在路由器文件index.js中配置。
						 在哪个组件中使用了路由组件，则会匹配对应路由的name值。
				-->

				<!-- to的模板字符串写法 -->
				<router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{msg.title}}</router-link>

				<!-- to的对象写法 -->
				<router-link :to="{
					path:'/home/message/detail',
					query:{
						id:msg.id,
						title:msg.title
					}
				}">
					{{msg.title}}
				</router-link>

				<!-- to的对象写法，name替换path -->
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