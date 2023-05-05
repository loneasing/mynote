<template>
	<ul>
		<li>消息编号：{{id}}</li>
		<li>消息标题：{{title}}</li>
		<li>接收到的props参数：{{a+''+b}}</li>
	</ul>
</template>

<script>
	export default {
		name:'Detail',
		// 接收props参数
		props:['id','title','a','b'],
		mounted() {
			console.log(this.$route)
		},
	}
</script>