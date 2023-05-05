//求和相关的配置
export default {
	namespaced: true,// 开启命名空间，这样在mapXxx()方法的第一个参数写本模块名才能被识别。比如mapState('countAbout',['school'])
	actions:{
		incrementOdd(context,value){
			console.log('actions中的incrementOdd被调用了')
			if(context.state.sum % 2){
				context.commit('INCREMENT',value)
			}
		},
		incrementWait(context,value){
			console.log('actions中的incrementWait被调用了')
			setTimeout(()=>{
				context.commit('INCREMENT',value)
			},500)
		}
	},
	mutations:{
		INCREMENT(state,value){
			console.log('mutations中的INCREMENT被调用了')
			state.sum += value
		},
		DECREMENT(state,value){
			console.log('mutations中的DECREMENT被调用了')
			state.sum -= value
		},
	},
	state:{
		sum:0, 
		school:'哔哩哔哩',
		subject:'Vue',
	},
	getters:{
		bigSum(state){
			return state.sum*10
		}
	},
}