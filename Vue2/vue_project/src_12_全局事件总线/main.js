//引入Vue
import Vue from 'vue' 
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
/*
  全局事件总线：适用于任意组件之间的通信。

  分析：① 首先需要一个“傀儡”作为信息的载体，这个“傀儡”是全部组件都能看见的，所以可以考虑将这个傀儡放在window或者Vue的原型或者VueComponent的原型上。
      ② 其次这个傀儡还要能被操控，即拥有$on()、$emit()、$off()等方法，而这些方法在Vue的原型上，所以这个傀儡必须是vm或者vc。
      ③ 然而不建议给window添加属性(window.xxx = new Vue())，所以考虑这个傀儡放在Vue或者VueComponent的原型上。
      ④ 因为不同的vc是由不同的VueComponent创建出来的，如果将“傀儡”放在VueComponent原型上这样就会有很多个“傀儡”，但是Vue只有一个，
        并且VueComponent的原型指向了Vue的原型，vc可以访问的到Vue的原型上的“傀儡”。因此傀儡放在Vue的原型上。
      ⑤ 再说这个“傀儡”可以是vm或者vc，但是vc不容易获取：const Vc = Vue.extend({}); const vc = new Vc()。因此使用vm作为傀儡。
      ⑥ 一般这个“傀儡”一般使用$bus作为变量名：Vue.prototype.$bus = new Vue()
      ⑦ “傀儡”初始化需要一个合适的时期，因此将傀儡的初始化放在beforeCreate()方法中执行：beforeCreate(){ Vue.prototype.$bus = this}
      ⑧ 最后这个“傀儡”就是所谓的全局事件总线。 
    
*/

//const Vc = Vue.extend({})
//Vue.prototype.$bus = new Vc()

new Vue({
  render: h => h(App),
   beforeCreate() {
    Vue.prototype.$bus = this // 注册全局事件总线
  }
}).$mount('#app')
