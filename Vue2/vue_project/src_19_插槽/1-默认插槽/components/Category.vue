<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<!-- 定义一个插槽（组件标签的标签体内容会填充到插槽中） -->
		<slot>我是插槽，若组件标签体没有传递内容时，我会出现</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title']
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: #fab;
	}
	
</style>