<template>
  <div>
    <h2 @click="showName">Alice信息</h2>
    <h2>邮箱：{{ email }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>年龄：{{ age }}</h2> <!-- age是混入里面的配置 -->
  </div>
</template>

<script>
// 引入混入配置
import { showName, mydata } from "../mixin";
export default {
  name: "Alice",
  data() {
    return {
      email: "alice@qq.com",
      age:20
    };
  },
  methods: {
    showName() {
      // mixin的加载顺序先于data或者methods，所以可以使用mixin中的配置
      console.log(this.age); // 输出20，说明data的优先级高于mixin
    },
  },
  // 混入配置项：注册混入配置
  mixins: [showName, mydata], // 混入配置项的值是个数组的形式，即使只有一个值也要写成数组形式。注意不用加引号
  mounted() {
    console.log("Alice"); // 注意混入中的mounted()函数先于当前组件的mounted()函数执行
  },
};
</script>