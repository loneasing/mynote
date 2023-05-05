<template>
  <div id="app">
    <Student />
    <School />
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  components: { Student, School },
};
</script>

<style>
/*一般App中的样式不用加scoped，加了的话只能App中的标签才生效*/
.title {
  color: red;
}
</style>
