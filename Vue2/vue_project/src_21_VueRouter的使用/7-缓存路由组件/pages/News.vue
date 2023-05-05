<template>
	<ul>
		<li>news001</li><input type="text">
		<li>news002</li><input type="text">
		<li>news003</li><input type="text">
	</ul>
</template>

<script>
	export default {
		name:'News',
		beforeDestroy() {
			console.log('News组件即将被销毁了')
		},
	}
</script>