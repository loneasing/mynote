<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolName">把学校名给App</button>
		<button @click="sendSchoolAddress">把学校地址给App(仅一次)</button>
		<button @click="unbindAll">解绑当前School组件绑定的所有自定义事件</button>
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
		},
		methods: {
			sendSchoolName(){
				this.$emit("myEvent3",this.name)
				this.$emit("myEvent5",this.name)
			},
			sendSchoolAddress(){
				this.$emit("myEvent4",this.address)
			},
			unbindAll(){
				this.$off()
			}
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
		margin-top: 10px;
	}
</style>