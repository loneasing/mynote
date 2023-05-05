<template>
  <!-- 
		- 之前学习了使用props实现父子组件之间的通信，下面学习自定义事件实现父子组件间的通信。

		- 自定义事件通常使用在组件标签上。绑定在组件标签上的事件会被当作自定义事件，即使是js中的事件也不例外，
		  因此原生js事件想要在组件标签中正常触发，需要使用native修饰符，例如@click.native

		- 使用场景：A是父组件，B是子组件，B要传数据给A，那么就要在A中给B绑定自定义事件。其中事件的回调在A中。

		- 绑定自定义事件方式：
			- 第一种方式：<组件名 @自定义事件="callback"/>  或 <组件名 v-on:自定义事件="callback"/>
			- 第二种方式：先使用ref标记组件标签：<组件名 ref="xxx"/>，然后获取到该组件实例调用$on()方法绑定事件。
			 			一般在mounted()函数中调用$on()方法：mounted(){ this.$refs.xxx.$on('自定义事件',callback)}
			若想让自定义事件只触发一次，第一种方式可以使用once修饰符：@myEvent.once；第二种方式可以使用$once()方法。

		- 触发自定义事件：this.$emit('自定义事件',数据)，接收多个数据的时候可以用剩余参数“...参数名”接收，剩余参数是一个数组。
		- 解绑自定义事件：this.$off('自定义事件')，解绑多个事件则参数写成数组形似：this.$off(['事件1','事件2'])

	 -->

  <div class="app">
    <h1>{{ msg }}学生姓名是：{{ studentName }}</h1>

    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据（第一种写法，使用@或v-on） -->
    <Student @myEvent="getStudentName" @myEvent2="myTest" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据（第二种写法，使用ref） -->
    <School ref="school" />

    <!-- 原生事件写在组件标签中不使用native修饰会被当作自定义事件 -->
    <!-- <School ref="school" @click.native="getSchoolAddress" /> -->
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
  methods: {
    // 自定义事件myEvent的回调函数
    getStudentName(name, ...params) {
      // ...表示剩余参数，即name接收第一个参数，剩余的参数由params数组接收。
      console.log("App收到了学生名：", name, params);
      this.studentName = name;
    },
    myTest() {
      console.log("myEvent2事件被触发了！");
    },
    getSchoolName(name) {
      console.log("App收到了学校名：", name);
    },
    getSchoolAddress(address) {
      console.log("App收到了学校地址：" + address);
    },
  },
  mounted() {
    this.$refs.school.$on("myEvent3", this.getSchoolName); //使用$on()方法绑定自定义事件
    this.$refs.school.$once("myEvent4", this.getSchoolAddress); //绑定自定义事件（一次性）
    /* 	$emit()方法传递的参数会传给$on()方法中的第二个参数使用，第二个参数是一个回调函数。
	$on()方法中回调函数的this是该方法调用者，即School组件实例。
	但是这里是写在mounted函数中，使用this调用了methods中的方法，this指的是当前App组件实例对象。
	如果直接写回调函数例如$on('myEvent',function(){this.getSchoolName})则会报错，因为该this是School组件实例对象，没有该方法。
	因此要直接写回调函数则须使用箭头函数形式，这样this就找到了mounted()函数的调用者，这样this代表App组件实例，可以调用该方法。 */

    // 下面语句打印this为School组件实例，这种方式不能使用this.getSchoolName，会报错
    // this.$refs.school.$on("myEvent5",function(name){console.log(this);this.getSchoolName(name)})
    // 写成箭头含数才能用this.getSchoolName，如下所示
    this.$refs.school.$on("myEvent5", (name) => {this.getSchoolName(name);});
    // 或者直接将逻辑写在箭头函数里面
    // this.$refs.school.$on("myEvent5", (name) => {console.log("App收到了学校名：", name);});
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
