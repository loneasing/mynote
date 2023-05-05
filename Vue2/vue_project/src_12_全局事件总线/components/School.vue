<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "哔哩哔哩",
      address: "上海",
    };
  },
  mounted() {
    // 给全局事件总线绑定自定义事件receive
    this.$bus.$on("receive", (data) => {
      console.log("我是School组件，收到了数据：" + data);
    });
  },
  beforeDestroy() {
	// 在组件实例销毁之前解绑事件
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 10px;
}
</style>