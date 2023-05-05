<template>
  <div id="app">  <!-- 这个id可写可不写，只要html页面中有id为app的容器就行，template标签内的容器会替换页面中id为app的容器 -->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
    // 引入组件
    import School from "./School.vue"
    import Student from "./Student.vue"
    
    export default {
        name: App,
        components: { School, Student }
    };
</script>

<style>
</style>