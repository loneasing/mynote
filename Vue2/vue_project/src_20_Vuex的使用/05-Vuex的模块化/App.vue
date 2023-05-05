<template>
	<div>
		<Count/>
		<hr>
		<Words/>
	</div>
</template>

<script>
	import Count from './components/Count'
	import Words from './components/Words'

	export default {
		name:'App',
		components:{Count,Words},
	}
</script>
