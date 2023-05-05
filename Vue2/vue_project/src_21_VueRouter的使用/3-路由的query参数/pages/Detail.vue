<template>
	<ul>
		<!-- 通过拼接请求地址传递的参数叫query参数，存储在$route属性中的query属性中 -->
		<li>消息编号：{{$route.query.id}}</li>
		<li>消息标题：{{$route.query.title}}</li>
	</ul>
</template>

<script>
	export default {
		name:'Detail',
		mounted() {
			console.log(this.$route)
		},
	}
</script>