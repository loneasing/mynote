<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendData">发送数据</button>
  </div>
</template>

<script>
// 导入pubsub
import Pubsub from 'pubsub-js'
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
      // 发布消息
      // publish()函数第一个参数为消息名字，第二个参数为消息的内容
      Pubsub.publish('hello',['Alice','Bryan','Cindy'])
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
