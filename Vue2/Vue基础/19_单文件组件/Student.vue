<template>
  <div>
    <h3 class="style">学生名字：{{ name }}</h3>
    <h3 class="style">学校年龄：{{ age }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Alice",
      age: 20
    }
  }
};
</script>

<style>
.style {
  background-color: aquamarine;
}
</style>