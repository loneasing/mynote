<template>
	<!-- 
		默认插槽就是没有给插槽配置名字，默认将组件标签体中的内容都插入到插槽中。
		组件标签体中的结构被解析完才会插入到插槽中。
	 -->
	<div class="container">
	
		<Category title="美食" >	<!-- 给子组件传递一个title参数 -->
			<!-- 向插槽中插入一张图片 -->
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Category>

		<Category title="游戏" >
			<ul>
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
		</Category>

		<Category title="电影">
			<!-- 插入一个视频，controls的作用是显示控制按钮 -->
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
	.container{
		display: flex;	/* flex布局 */
		justify-content: space-around;
	}

	/* 向下面这种组件标签体中结构的样式写在App中和子组件中都可以
	   写在App中则是解析完标签体中的结构带着样式插入到插槽中。
	   写在子组件中，则只是带着结构插入到插槽中，最终的效果都是一样的。
	*/
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>
