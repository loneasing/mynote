<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- addTodo()方法传给子组件MyHeader使用 -->
        <MyHeader :addTodo="addTodo" />
        <!-- checkTodo()方法传给子组件MyList，MyList再传给MyItem。deleteTodo()亦是如此-->
        <MyList
          :todoList="todoList"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        <MyFooter :todoList="todoList" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      // 由于todoList(对象数组)是MyList组件和MyFooter组件都在使用，所以放在App中（状态提升）
      todoList: [
        { id: "001", title: "学习", done: true },
        { id: "002", title: "音乐", done: true },
        { id: "003", title: "游戏", done: false },
      ],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todoList.unshift(todoObj);
    },
    // 勾选和取消勾选
    checkTodo(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 根据id删除todo
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id); // 使用过滤器，记得重新赋值
    },
    //全选和取消全选
    checkAllTodo(done) {
      this.todoList.forEach((todo) => {
        todo.done = done;
      });
    },
    //清除所有已经完成的todo
    clearAllTodo() {
      this.todoList = this.todoList.filter((todo) => {
        return !todo.done; // filter()方法默认会筛选过滤条件为true的元素组成新的数组并返回。
      });
    },
  },
};
</script>

<style>
/*一般一些通用的样式就放在App组件的样式中*/
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
