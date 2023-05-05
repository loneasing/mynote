<template>
	<h2>我是About组件的内容</h2>
</template>

<script>
	export default {
		name:'About',
		beforeDestroy() {
			console.log('About组件即将被销毁了')
		},
		// 下面设置组件内路由守护

		//设置进入守卫：进入该组件时被调用
		beforeRouteEnter (to, from, next) {
			console.log('About--beforeRouteEnter',to,from)
			if(to.meta.isAuth){ //判断是否需要鉴权
				if(localStorage.getItem('name')==='hello'){
					next()
				}else{
					alert('数据错误，无权限查看！')
				}
			}else{
				next()
			}
		},
		//设置离开守卫：离开该组件时被调用
		beforeRouteLeave (to, from, next) {	// 即使参数没使用也要写出来，可以使用_占位：beforeRouteLeave(_,_,next)
			console.log('About--beforeRouteLeave')
			next()
		}
	}
</script>