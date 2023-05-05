<template>
  <div>
    <h2 @click="showName">Cindy信息</h2>
    <h2>邮箱：{{ email }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>年龄：{{ age }}</h2>
  </div>
</template>

<script>
import { showName, mydata } from "../mixin";

export default {
  name: "Cindy",
  data() {
    return {
      email: "cindy@qq.com",
      age: 21,
    };
  },
  mixins: [showName, mydata],
  mounted(){
    console.log('Cindy')
  }
};
</script>