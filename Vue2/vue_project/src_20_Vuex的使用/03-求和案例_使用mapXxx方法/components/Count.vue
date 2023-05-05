<template>
	<div>
		<!-- 下面插值语法中反复用到了$store.state，可以将该数据存储在计算属性中，减少代码冗余 -->
		<!-- <h1>我在{{$store.state.school}} 学习{{$store.state.subject}}</h1> -->
		<!-- <h1>当前求和为：{{$store.state.sum}}</h1> -->
		<!-- <h1>扩大十倍后：{{$store.getters.bigSum}}</h1> -->

		<!-- 这样就比上面简洁多了 -->
		<h1>我在{{school}} 学习{{subject}}</h1>
		<h1>当前求和为：{{sum}}</h1>
		<h1>扩大十倍后：{{bigSum}}</h1>


		<!-- 下拉框选择增加步长 -->
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
	// 导入mapState、mapGetters、mapActions、mapMutations
	import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //步长默认为1
			}
		},
		/* 
		computed:{
			school(){
				return this.$store.state.school
			},
			subject(){
				return this.$store.state.subject
			},
			sum(){
				return this.$store.state.sum
			},
			bigSum(){
				return this.$store.getters.bigSum
			}
		},
			上面这样写又出现了代码冗余，观察发现只需要计算属性名和state对象中的属性名即可获得计算属性。
			因此导入Vuex中的一个方法可以帮我们生成计算属性：import {mapState} from 'vuex'
			该方法的参数可以是一个对象，也可以是一个数组。该方法返回一个对象。用于帮助我们映射state中的数据为计算属性。

			对象形式的参数：mapState({school:'school',subject:'subject',sum:'sum'})
			对象中是一个个的键值对，键代表计算属性的名字，值代表state中的属性名。注意值如果不是变量名一定要加引号。
			这里不能使用对象的简写形式，因为对象的简写形式是键和值相同，值要是一个变量且变量名要和键名相同才能简写。而这里值不是一个变量，只是一个普通字符串。

			上面对象形式的参数不能使用简写形式，但是可以用数组形式的参数来代替对象的简写形式。
			使用数组形式的参数：mapState(['school','subject','sum'])
			使用数组形式的参数的前提是计算属性名和state对象中的属性名是同名的。
			若计算属性名和state对象中的属性名不同，则只能使用对象形式的参数。比如mapState({xuexiao:'school'})

			同理，也可以将Store插件中的getters配置项中的计算属性转化成当前组件的计算属性。
			导入mapGetters方法：import { mapGetters } from 'vuex'，其余的和mapState的使用方式一样。

		*/
		// mapXxx()返回的是一个对象，而对象不能直接写在computed对象中，因此可以使用展开运算符，将对象中的属性添加到computed中。
		computed:{
			...mapState(['school','subject','sum']),	// 使用数组形式的参数
			...mapGetters({bigSum:'bigSum'})	// 使用对象形式的参数
			/* 
				展开后相当于：
				school:function(){
					return this.$store.state.school
				},
				subject(){
					return this.$store.state.subject
				},
				sum(){
					return this.$store.state.sum
				},
				bigSum(){
					return this.$store.getters.bigSum
				}

			*/
		},
		methods: {
		/*
			观察到methods中调用dispatch()或commit()方法的代码也很冗余，既然有了mapState和mapGetters将state和getters中的数据映射为计算属性，
			那也会有对应的方法将actions和mutations中的方法映射为当前组件的方法。它们分别是mapActions、mapMutations。
			
			mapActions()方法
			作用：将actions配置项中的方法映射为当前组件的方法。
			mapActions()的参数可以是一个对象也可以是一个数组。
			若参数为对象，对象中的属性名为生成的方法名，属性值为actions对象中的方法名。
			借助mapActions生成对应的方法，方法中会调用dispatch去联系actions对象中的方法。


			mapMutations()方法
			作用：将mutations配置项中的方法映射为当前组件的方法。
			mapMutations()的参数可以是一个对象也可以是一个数组。
			若参数为对象，对象中的属性名为生成的方法名，属性值为mutations对象中的方法名。
			若生成的方法名和mutations对象中的方法名同名，则可以使用更简单的数组形式的参数，只需要将该方法名作为数组的元素即可。
			借助mapMutations生成对应的方法，方法中会调用commit去联系mutations对象中的方法。

			需要注意的是需要给生成的方法传入参数需要在该方法调用的时候在小括号中传入参数。
			因为生成的方法是这样的：
			increment(value){
				this.$store.commit('InCREMENT',value)
			}
			它会给方法添加一个参数，然后传递这个值给对应的对象处理，如果不在小括号中传入参数，默认参数就是事件对象。

		*/
		...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),	// 名字不同，所以不能使用简写的数组形式
		...mapActions(['incrementOdd','incrementWait'])

		},

	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
