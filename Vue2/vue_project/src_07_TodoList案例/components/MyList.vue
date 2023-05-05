<template>
  <ul class="todo-main">
      <!-- 遍历数组的内容 -->
      <MyItem v-for="todo in todoList" :key="todo.id" :todo="todo" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
  </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
  components: { MyItem },
  name: "MyList",
  // 接收App传递过来的数据，其中todoList是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
  props:['todoList','checkTodo','deleteTodo'], 
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
