<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>当前求和放大10倍为：{{bigSum}}</h3>
		<h3>我在{{school}}，学习{{subject}}</h3>
		<h3 style="color:red">Words组件的总语录数是：{{wordsList.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, 
			}
		},
		computed:{
			/*
				因为使用模块化后此时Store的配置对象中有很多个模块，每个模块对应一个配置对象。
				所以在使用mapXxx方法时，要在方法的第一个参数指定是哪个模块，第二个参数为该模块中对应配置项的数据。
			*/
			//借助mapState生成计算属性，从state中读取数据。
			...mapState('countAbout',['sum','school','subject']),
			...mapState('wordsAbout',['wordsList']),
			//借助mapGetters生成计算属性，从getters中读取数据。
			...mapGetters('countAbout',['bigSum'])
		},
		methods: {
			//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations。
			...mapMutations('countAbout',{increment:'INCREMENT',decrement:'DECREMENT'}),
			//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions。
			...mapActions('countAbout',['incrementOdd','incrementWait'])
		},
		mounted() {
			// 查看store对象的结构
			console.log(this.$store)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
