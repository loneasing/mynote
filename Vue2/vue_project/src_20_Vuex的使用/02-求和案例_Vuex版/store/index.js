// 引入Vue，调用use()时要用到
import Vue from 'vue'
// 引入Vuex，创建Store对象
import Vuex from 'vuex'

// 准备actions
const actions = {
    // actions中存储着一个个的方法（处理业务逻辑），方法有两个参数，第一个参数为上下文对象，第二个参数为dispatch()传递的值。
    // 上下文对象一般用context表示，该对象中拥有commit()方法、dispatch()方法、state对象等等。
    increment: function (context,value) {   // 可以使用简写形式，直接写成一个函数
        console.log(context)
        console.log('actions中的increment方法被调用了')
        // 调用commit()，通知mutations执行操作
        context.commit('INCREMENT',value)  
    },
    decrement(context, value) {
        console.log('actions中的decrement方法被调用了')
        context.commit('DECREMENT',value)
    },

    /* 
        向上面这两个操作，没有处理任何逻辑，可以不用写在actions中，直接$store.commit()对用的操作通知mutations即可。
        actions就相当于业务逻辑层，mutations相当于数据访问层，state相当于数据库。
        actions中通过commit()调用mutations中的方法，mutations操作state中的数据。
        对于简单的操作，可以不经过actions，直接通过commit()调用mutations中的方法。
    
    */

    incrementOdd(context, value) {
        console.log('actions中的incrementOdd方法被调用了')
        // 奇数时才增加
        if (context.state.sum % 2) {
            context.commit('INCREMENT',value)
        }
    },
    incrementWait(context, value) {
        console.log('actions中的incrementWait方法被调用了')
        // 等待500毫秒后增加
        setTimeout(() => {
            context.commit('INCREMENT',value)
        }, 500);
    }
}
// 准备mutations
const mutations = {
    // mutations中也存储着一个个的方法（操作数据），方法也有两个参数，第一个参数为state对象，第二个参数为dispatch()或commit()传递的数据。
    // 一般mutations中的方法名(操作名)用大写，方便和actions对象中的方法名区分。
    INCREMENT(state, value) {
        console.log('mutations中的INCREMENT方法被调用了')
        state.sum += value
    },
    DECREMENT(state, value) {
        console.log('mutations中的DECREMENT方法被调用了')
        state.sum -= value
    },

}
// 准备state
const state = {
    sum:0
}

// 准备getters
const getters = {
    // getters中的方法为计算属性方法，该方法会接收到一个参数为state对象
    // getters中计算属性方法的返回值存储在store对象中的getters属性。获取需要通过this.$store.getters.xxx
    bigSum(state) {
        return state.sum*10
    }
}

// 使用Vuex
Vue.use(Vuex)

// 创建Store对象
export default new Vuex.Store({
    actions: actions, // 键和值同名时可以触发对象的简写形式
    mutations,
    state,
    getters
})