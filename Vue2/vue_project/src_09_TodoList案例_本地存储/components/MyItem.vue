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
           props的数据原则上是不允许修改的，所以不见以使用v-model -->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 接收MyList传递的参数
  props: ['todo', 'checkTodo','deleteTodo'],
  methods: {
    // 勾选和取消勾选
    handleCheck(id) {
      // 调用App组件传过来的checkTodo()，将id对应的todo对象的done值取反(这个逻辑写在App中，数据在谁那谁操作数据)
      this.checkTodo(id);
    },
    // 删除todo
    handleDelete(id){
     if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					this.deleteTodo(id)
				}
    }
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