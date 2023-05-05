<template>
  <div>
    <h2>Alice信息</h2>
    <h2>邮箱：{{ email | mySlice }}</h2>  <!--截取邮箱的前4个字符-->
    <button @click="hello">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Alice",
  data() {
    return {
      email: "alice@qq.com",
      age:20
    };
  },
};
</script>