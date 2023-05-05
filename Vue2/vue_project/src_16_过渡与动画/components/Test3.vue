<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- 使用第三方库中的动画，这些属性和值都是第三方库规定好了的 -->
		<transition-group 
			appear
			name="animate__animated animate__bounce" 
			enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp"
		>
			<h1 v-show="!isShow" key="1">我喜欢你！</h1>
			<h1 v-show="isShow" key="2">你说什么？</h1>
		</transition-group>
	</div>
</template>

<script>
	// 导入第三方动画库
	import 'animate.css'
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: #fba;
	}
</style>