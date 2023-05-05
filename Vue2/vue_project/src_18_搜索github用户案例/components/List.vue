<template>
  <div class="row">
    <!-- 展示用户列表 -->
	<!-- 列表长度为0则不显示此元素 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">	
		<!-- 跳转用户主页链接(链接存储在用户信息的html_url属性)-->
    	<a :href="user.html_url" target="_blank">
			<!-- 用户头像地址(地址存储在用户信息的avatar_url属性-->
        	<img :src="user.avatar_url" style="width: 100px" />
    	</a>
		<!-- 用户名 login -->
      	<p class="card-text">{{user.login}}</p>
		
    </div>
	<!-- 展示欢迎词 -->
	<h1 v-show="info.isFirst">欢迎使用！</h1>
	<!-- 展示加载中 -->
	<h1 v-show="info.isLoading">加载中....</h1>
	<!-- 展示错误信息 -->
	<h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
	return {
		info:{
			isFirst:true,	// 是否是第一次打卡界面，是就显示欢迎信息
			isLoading:false,	// 是否处于加载中，是就显示加载提示
			errMsg:false,	// 是否出现错误，是就展示错误信息
			users:[]	// 用户列表
		}
	}
  },
  mounted(){
	this.$bus.$on('updateData',data =>{
		this.info = {...this.info,...data}	// 展开运算符可以合并数组，也可以合并对象，合并可以去除重复元素（属性），相同的元素会被后者的元素覆盖
	})
  }
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>