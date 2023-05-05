<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
	  v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid"; // 导入生成id的组件nanoid，这是一个函数，调用时需要加小括号
export default {
  name: "MyHeader",
  props: ["addTodo"], // 接收从App传过来的addTodo()方法
  data() {
    return {
      title: "", // 收集用户输入的title
    };
  },
  methods: {
    add() {
      // 校验数据
      if (!this.title.trim()) return alert("输入不能为空");
      //将用户输入的数据包装成一个todo对象
      const todoObj = { id: nanoid(), title: this.title, done: false };
      //通知App组件去添加一个todo对象
      this.addTodo(todoObj);
      //清空输入
      this.title = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>