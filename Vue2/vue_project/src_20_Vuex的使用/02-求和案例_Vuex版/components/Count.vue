<template>
	<div>
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<h1>扩大十倍后：{{$store.getters.bigSum}}</h1>
		<!-- 下拉框选择增加步长 -->
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	export default {
		name:'Count',
		data() {
			return {
				n:1, //步长默认为1
			}
		},
		methods: {
			increment(){
				console.log(this)
				this.$store.dispatch('increment',this.n)
			},
			/* 
				像上面这个操作没有处理逻辑，调用dispatch()通知actions，actions收到后直接就调用commit()给mutations了
				一般这种不需要逻辑处理的操作，可以直接调用commit()通知mutations操作数据。如下所示：
			*/
			decrement(){
				this.$store.commit('DECREMENT',this.n)
			},
		
			/* 
				下面两个操作需要处理逻辑，所以需要经过actions处理，所以需要调用dispatch()（当然完全可以将逻辑写在下面方法中，这里只是为了演示Vuex的流程，）
			*/
			incrementOdd(){
				this.$store.dispatch('incrementOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('incrementWait',this.n)
			},
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
