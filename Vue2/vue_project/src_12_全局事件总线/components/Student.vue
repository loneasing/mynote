<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendData">发送数据</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Alice",
      sex: "女",
    };
  },
  methods:{
    sendData(){
      // 触发全局事件总线绑定的receive事件，传输数据
      this.$bus.$emit('receive',this.name)
    }
  }

};
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 10px;
}
</style>
