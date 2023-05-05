<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.png">
    <!--  
      ref属性：用来给元素或子组件注册引用信息（id的替代者），所有的ref都储存在vm或vc的$refs属性中，通过vm(vc).$refs.xxx获取对应的DOM元素。

      - 若ref标记在html标签上，则通过vm.$refs获取的是真实DOM元素。

      - 若ref标记在组件标签上，则通过vm.$refs获取的是组件实例对象。

      - 使用ref标记元素或组件：<div ref="xxx">.....</div> 或 <School ref="xxx"></School>

      - 获取ref标记的元素对象或组件实例：this.$refs.xxx
    -->
    <div ref="mydiv">欢迎学习Vue</div>  
    <MySchool ref="mySchool"></MySchool><br>
    <button @click="getEle">点我打印信息</button>
  </div>
</template>

<script>
import MySchool  from './components/MySchool.vue' 

export default {
  name: 'App',
  components: {
    MySchool
  },
  methods:{
    getEle(){
      console.log(this.$refs.mydiv) // 获取div元素
      console.log(this.$refs.mySchool)  // 获取School组件的实例对象
    }
  }
}
</script>

