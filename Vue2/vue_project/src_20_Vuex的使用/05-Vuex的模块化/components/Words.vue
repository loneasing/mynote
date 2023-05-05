<template>
	<div>
		<h1>语录列表</h1>
		<h3 style="color:red">Count组件求和为：{{sum}}</h3>
		<h4>第一句语录是：{{firstWords}}</h4>
		<input type="text" placeholder="请输入文字" v-model="word">
		<button @click="publish">发布</button>
		<button @click="oneWords">每日一言</button>
		<ul>
			<li v-for="words in wordsList" :key="words.id">{{words.content}}</li>
		</ul>
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
	export default {
		name:'Words',
		data() {
			return {
				word:''
			}
		},
		// 这里不使用mapXxx方法生成计算属性和方法，通过手写来说明一些注意点
		computed:{
			wordsList(){
				// 导入的模块中state配置项的数据，会成为模块对象的属性，而模块对象存储在store对象的state属性中。
				// 所以要访问模块的数据需要通过this.$store.state.模块名.xxx
				return this.$store.state.wordsAbout.wordsList
			},
			sum(){
				return this.$store.state.countAbout.sum
			},
			firstWords(){
				// 模块getters配置项的数据最终会在store对象的getters属性身上，数据是以键值对形式存储。
				// 键就是计算属性的名字，键的形式：模块名/计算属性名。
				// getters属性值就是一个对象，获取该对象上的数据可以通过属性名的方式获取：对象['属性名']。
				// 因为获取的属性名字有特殊符号'/'，所以不能通过.的方式获取。
				return this.$store.getters['wordsAbout/firstWordsName']
			}
		},
		methods: {
			// actions、mutations配置项中的方法最终也会分别存在于_actions、_mutations对象中，也是以键值对形式存储。
			// 键为方法名，需要加上模块名称前缀：模块名称/方法名；值是一个函数。
			publish(){
				const wordsObj = {id:nanoid(),content:this.word}
				this.$store.dispatch('wordsAbout/addWords',wordsObj)
				this.word = ''
			},
			oneWords(){
				this.$store.dispatch('wordsAbout/addWordsByAjax')
			}
		},
	}
</script>
