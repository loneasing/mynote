<template>
  <!-- 总数大于1时显示此元素 -->
  <div class="todo-footer" v-show="total">
    <label>
      <!-- checkbox类型的表单的value值即checked的值，所以isAll为true表示全选 -->
      <!-- isAll不是props的值，所以可以使用v-model绑定 -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todoList", "checkAllTodo", "clearAllTodo"],
  computed: {
    // 总数
    total() {
      return this.todoList.length;
    },
    // 已完成数
    doneTotal() {
      //此处使用reduce方法做条件统计
      //reduce()方法有两个参数，第一个参数为一个条件函数，第二个参数为初始值。
      //条件函数有两个参数，第一参数为上一次的值，第二个参数为当前值。该函数还需要返回值。
      /* const x = this.todoList.reduce((pre,current)=>{
					return pre + (current.done ? 1 : 0)	// 当前值的done为true则加1
				},0) */
      //箭头函数形式
      return this.todoList.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    // 全选框是否勾选
    isAll: {
      get() {
        // 已完成数和总数相等且大于0时返回true
        return this.doneTotal === this.total && this.total > 0;
      },
      // isAll被修改时set被调用
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    //清空所有已完成
    clearAll() {
      this.clearAllTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
