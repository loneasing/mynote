export default {	// 默认暴露
	install(Vue,x,y,z){
		console.log(x,y,z)  // 打印Alice、18、undefined
        
		//全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4) // 截取前四个字符
		})

		//给Vue原型上添加一个方法（vm和vc就都能用了）
		Vue.prototype.hello = ()=>{alert('你好啊')}
        
        //还可以定义混入、自定义指令等等
	}
}
