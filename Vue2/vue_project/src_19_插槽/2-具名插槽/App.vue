<template>
	<!-- 
			具名插槽就是具有名字的插槽，给<slot>标签添加name属性设置名字。
			给需要传入到插槽的元素添加slot属性，属性值为插槽的name值。
	 -->
	<div class="container">
		<Category title="美食" >
			<!-- 添加slot属性，插入到指定插槽中 -->
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<a slot="footer" href="javascript:;">更多美食</a>
		</Category>

		<Category title="游戏" >
			<ul slot="center">
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
			<div class="foot" slot="footer">
				<a href="javascript:;">单机游戏</a>
				<a href="javascript:;">网络游戏</a>
			</div>
		</Category>

		<Category title="电影">
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<!-- 使用template标签将多个标签包裹起来插入到插槽中，可以用『v-slot:插槽名』来指定插槽 -->
			<!-- 注意『v-slot:插槽名』插槽名不需要加引号，并且该指令只能在template标签中使用 -->
			<template v-slot:footer>
				<div class="foot">
					<a href="javascript:;">经典</a>
					<a href="javascript:;">热门</a>
					<a href="javascript:;">推荐</a>
				</div>
				<h4>欢迎前来观影</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				foods:['火锅','烧烤','龙虾','牛排'],
				games:['王者荣耀','和平精英','穿越火线','QQ飞车'],
				films:['《钢铁侠3》','《美国队长》','《X战警 黑凤凰》','《复仇者联盟4》']
			}
		},
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
