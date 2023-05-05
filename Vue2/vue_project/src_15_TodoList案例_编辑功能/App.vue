<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 给子组件MyHeader绑定自定义事件addTodo -->
        <MyHeader @addTodo="addTodo" />
        <!-- checkTodo()方法传给子组件MyList，MyList再传给MyItem。deleteTodo()亦是如此-->
        <MyList :todoList="todoList" />
        <!-- 给子组件MyFooter绑定自定义事件checkAllTodo、clearAllTodo -->
        <MyFooter
          :todoList="todoList"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        />
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
      // 从浏览器本地存储中获取值
      todoList: JSON.parse(localStorage.getItem("todoList")) || [], // 如果前者为false（null也算），则取后者的值。
      // JSON.parse(String)表示将一个JSON格式的字符串解析成一个JSON对象，JSON.parse(null)的结果依然是null。
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todoList.unshift(todoObj);
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
  // 监视todoList
  watch: {
    todoList: {
      deep: true, // 开启深度监视，因为变化的是对象中的属性，开启深度监视才能监视到其变化。
      handler(value) {
        // 只要todoList发生了变化，就重新存到浏览器本地存储中
        localStorage.setItem("todoList", JSON.stringify(value));
        // JSON.stringify(Object)表示将一个对象转换成JSON格式的字符串
      },
    },
  },

  mounted() {
    // 使用全局事件总线进行组件间的通信
    // 勾选和取消勾选
    this.$bus.$on("checkTodo", (id) => {
      this.todoList.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    });
    // 根据id删除todo
    this.$bus.$on("deleteTodo", (id) => {
      this.todoList = this.todoList.filter((todo) => todo.id !== id); // 使用过滤器，记得重新赋值
    });
    // 根据id修改todo
    this.$bus.$on("updateTodo", (id,title) => {
      this.todoList.forEach(todo => {
        if (todo.id === id) todo.title = title;
      })
    });
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
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
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
