<template>
  <div class="demo">
    <h2 class="title">学生姓名：{{ name }}</h2>
    <h2 class="demo2">学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
};
</script>

<style lang="less" scoped>
// lang表示语法格式，不写默认是css语法
// less语法，需要安装less-loader（npm install less-loader）
// less语法支持单行注释
// less语法支持样式嵌套
.demo {
  background-color: pink;
  .demo2 {
    font-size: 40px;
  }
}
</style>
