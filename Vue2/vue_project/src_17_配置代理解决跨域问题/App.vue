<template>
	<div>
		<button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
	</div>
</template>

<script>
	// 导入axios
	import axios from 'axios'
	export default {
		name:'App',
		methods: {
			getStudents(){
				// 发送get方式的Ajax
				// 因为配置了前缀，所以请求的时候要把前缀hello加上。
				axios.get('http://localhost:8080/hello/students').then(
					response => {
						console.log('请求成功了',response.data)	// response参数接收服务器响应的对象，数据存储在该对象中的data属性
					},
					error => {
						console.log('请求失败了',error.message) // error接收错误的对象，错误信息存储在message属性中
					}
				)
			},
			getCars(){
				axios.get('http://localhost:8080/demo/cars').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			}
		},
	}
</script>