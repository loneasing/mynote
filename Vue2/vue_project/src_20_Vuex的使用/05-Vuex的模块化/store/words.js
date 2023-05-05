//语录管理相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
	namespaced:true,
	actions:{
		addWords(context,words){
			if (words.content.length < 12) {
				// 记住在当前模块中不用添加模块前缀，它会自动加上去的
				// context.commit('wordsAbout/ADD_WORDS',words)
				context.commit('ADD_WORDS',words)
			}else{
				alert('输入字符不能超过12个')
			}
		},
		// 通过网络请求数据，就不需要在方法中接收数据了，只需要接收一个上下文参数即可
		addWordsByAjax(context) {
			// 安慰语句接口：https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json
			// 社会语录接口：https://api.uixsj.cn/hitokoto/get?type=social
			axios.get('https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json').then(
				response => {
					context.commit('ADD_WORDS',{id:nanoid(),content:response.data.anwei})
				},
				error => {
					alert(error.message)
				}
			)
		}
	},
	mutations:{
		ADD_WORDS(state,words){
			console.log('mutations中的ADD_WORDS被调用了')
			state.wordsList.unshift(words)
		}
	},
	state:{
		wordsList:[
			{id:'001',content:'一定要优秀，堵住那悠悠众口'}
		]
	},
	getters: {
		// 获取第一条语录的内容
		firstWordsName(state){
			return state.wordsList[0].content
		}
	},
}