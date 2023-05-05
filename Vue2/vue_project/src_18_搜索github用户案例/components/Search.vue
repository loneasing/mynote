<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
    	<input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
		<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
// 导入axios
import axios from 'axios'
export default {
  name: "Search",
  data() {
	return {
		keyword:''
	}
  },
  methods: {
	searchUsers(){
		//请求前先更新List的数据以及状态信息
		this.$bus.$emit('updateData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
		//发送Ajax请求（查询github用户接口为：https://api.github.com/search/users?q=xxx），这里需要用到模板字符串（``），方便传入参数
		axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
			response =>{
				console.log('请求成功了')
				// 请求成功后更新数据
				// 注意axios返回的是一个Promise对象，返回的数据存储在该对象的PromiseResult属性中。
				// then()方法的第一个参数为一个相应成功的对象，该对象中的data属性存储着PromiseResult属性中成功的数据，第二个参数则反之。
				this.$bus.$emit('updateData',{isLoading:false,errMsg:'',users:response.data.items})	// 用户信息在接口返回的对象的item属性中
			},
			error =>{
				// 请求失败后更新数据（主要是提示错误信息，清空列表信息）
				this.$bus.$emit('updateData',{isLoading:false,errMsg:error.message,users:response.data.items})
			}
		)

	}
  },
};
</script>
