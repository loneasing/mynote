<template>
	<div class="demo">
		<h2 class="title">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'哔哩哔哩',
				address:'上海',
			}
		}
	}
</script>
 
<style scoped> /* scoped属性表示当前样式只适用于当前组件，不会和其他组件同名的样式产生冲突 */
	.demo{
		background-color: skyblue;
	}
</style>