<template>
	<ul>
		<li :style="{opacity}">欢迎学习Vue</li>
		<li>news001</li><input type="text">
		<li>news002</li><input type="text">
		<li>news003</li><input type="text">
	</ul>
</template>

<script>
	export default {
		name:'News',
		data() {
			return {
				opacity:1
			}
		},
		beforeDestroy() {
			console.log('News组件即将被销毁了')
		},

		/*
			keep-alive可以让路由组件不被销毁，但是如果路由组件中设有定时器，即使路由被切换了，定时器也依旧在运行。
			这会占用系统资源。那么该如何解决该问题？
			这里介绍两个新的生命周期钩子：
			activated()：组件激活时被调用
			deactivated()：组件失活时被调用
			因此可以将定时器放在activated()中，组件激活时才正常运行。

		*/

		// 组件激活时被调用
		activated() {
			console.log('News组件被激活了')
			// 定时器返回的是该定时器的唯一标识
			this.timer = setInterval(() => {
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			},16)
		},
		// 组件是失活时被调用
		deactivated() {
			console.log('News组件失活了')
			clearInterval(this.timer)// 清除定时器，参数为定时器的唯一标识
		},
	}
</script>