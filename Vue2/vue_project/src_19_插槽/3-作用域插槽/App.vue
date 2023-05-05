<template>
	<div class="container">

		<Category title="游戏">
			<!-- 添加一个scope属性接收插槽传递的数据，数据存储在myData中，需要通过myData.xxx获取数据 -->
			<template scope="myData">
				<ul>
					<li v-for="(g,index) in myData.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<!-- 这里使用了对象解构语法获取scope对象中的games对象 
				首先接收到参数存储在scope属性的值中，该值是一个对象，对象名可以随便取，
				接收到的数据会成为该对象的一个属性，解构该对象只获取其中的games属性。
			-->
			<template scope="{games}">
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>

		<Category title="游戏">
			<template slot-scope="{games}">
				<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			</template>
		</Category>

	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
	}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>