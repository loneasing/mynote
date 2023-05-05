<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.png" />
    <MySchool></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
// 引入组件
import MySchool from "./components/MySchool.vue"; // 组件名要改成多单词大驼峰命名，不然会报错（或者关闭语法检查）
import MyStudent from "./components/MyStudent.vue";

// 默认暴露
export default {
  // 设置Vue开发者工具中显示的组件名
  name: "App",
  // 注册组件
  components: {
    MySchool,
    MyStudent,
  },
};
</script>

