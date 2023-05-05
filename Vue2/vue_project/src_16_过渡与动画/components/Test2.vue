<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">好好学习！</h1>
      <h1 v-show="!isShow" key="2">天天向上！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: #fab;
}

/* 下面使用过渡完成两个动画 ：
		①由进入起点过渡到进入的终点，也就是入场过程(v-enter-active)
		②由离开的起点过渡到离开的终点，也就是出场过程(v-leave-active)
		提示：进入指的是元素从页面外进入到页面中，离开指的是元素从页面中离开到页面之外。
	*/

/* 进入的起点、离开的终点  */
/* 这些类名格式都是规定好了的 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

/* 将过度属性写在入场动画和出场动画的样式中 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点、离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>