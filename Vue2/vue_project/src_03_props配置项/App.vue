<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.png">
    <div >欢迎学习Vue</div>  
    <Student name="Alice" sex="女" :age="20"/> <!-- 传递参数给组件内部使用 -->
  </div>
</template>

<script>
import Student  from './components/Student.vue' 
export default {
  name: 'App',
  components: {
    Student
  },
}
</script>

