<template>
  <div class="demo">
    <h3>学校名字：{{ name }}</h3>
    <h3>学校地址：{{ address }}</h3>
    <button @click="showInfo">Click Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "哔哩哔哩",
      address: "上海",
    };
  },
  methods: {
    showInfo() {
      alert("学校名：" + this.name + ",学校地址：" + this.address);
    },
  },
};
</script>

<style>
.demo {
  background-color: aquamarine;
}
</style>