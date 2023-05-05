<template>
  <li>
    <label>
      <!-- checked的值为真表示选上，为假表示未选上 -->
      <!-- change事件表示当前元素发生了变化则触发事件修改todo对象的done值 -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 当然上述操作可以使用v-model完成，v-model是双向数据绑定，会修改todo的值，但是todo是props接收的数据，
           props的数据原则上是不允许修改的，所以不建议使用v-model -->
      <!-- <input type="checkbox" v-model="todo.done"> -->

      <!-- isEdit是给todo对象添加的一个属性，如果该值为true则显示输入框(编辑状态) -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 接收MyList传递的参数
  props: ["todo"],
  methods: {
    // 勾选和取消勾选
    handleCheck(id) {
      this.$bus.$emit("checkTodo", id); // 调用App将id对应的todo对象的done值取反
    },
    // 删除todo
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        this.$bus.$emit("deleteTodo", id); //通知App组件将对应的todo对象删除
      }
    },
    // 编辑
    handleEdit(todo) {
      // hasOwnProperty()判断自己是否拥有该属性
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true); // 没有该属性则添加一个属性，注意要用Vue.set()或者$set()添加响应式的属性
      }
      /* $nextTick(callback)：在下一次 DOM 更新结束后执行其指定的回调。
        即当前一轮的操作改变了数据而造成了页面的更新，则$nextTick()中的回调函数会在这一轮页面更新后再被调用。
        例如当前函数内的操作就可以表示是一轮操作，函数结束后页面更新后$nextTick()中的函数才执行。
        */
      this.$nextTick(function () {
        this.$refs.inputTitle.focus(); // 让输入框获取焦点
      });
    },
    //失去焦点，执行修改逻辑 (当然也可以考虑用v-model实现)
    handleBlur(todo, e) {
      todo.isEdit = false;
      // trim()去掉前后空格返回的字符串。如果返回空串，那么布尔值就是false；返回非空串，布尔值就是true。
      if (!e.target.value.trim()) return alert("输入不能为空！");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>