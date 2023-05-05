<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑myEvent2事件</button>
    <button @click="death">销毁当前Student组件的实例</button>
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
  methods: {
    sendStudentName() {
      //使用$emit()方法触发事件：
      //第一个参数为事件名，千万不要写错。后面的参数为传递的数据，接收的时候可以用剩余参数“...参数名”接收。
      this.$emit("myEvent", this.name, "Bryan", "Cindy", "David");//触发Student组件实例身上的自定义事件myEvent
      this.$emit("myEvent2");//触发Student组件实例身上的自定义事件myEvent2
    },
    unbind() {
      this.$off("myEvent2"); //解绑一个自定义事件
      // this.$off(['myEvent','myEvent2']) //解绑多个自定义事件
      // this.$off() //解绑所有的自定义事件
    },
    death() {
      this.$destroy(); //销毁了当前Student组件的实例，销毁后Student实例的所有事件全都无效。
	//   Vue2.7版本之前，销毁vm或vc后自定义事件全部失效，原生js事件还有效，2.7版本以后全部事件都失效。
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 10px;
}
</style>
