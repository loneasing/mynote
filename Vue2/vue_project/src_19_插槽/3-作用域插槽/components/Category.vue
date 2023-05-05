<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<!-- 给插槽的使用者传递数据 -->
		<slot :games="games" msg="hello">我是默认的一些内容</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title'],
		data() {
			return {
				games:['王者荣耀','和平精英','穿越火线','QQ飞车'],
			}
		},
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
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>