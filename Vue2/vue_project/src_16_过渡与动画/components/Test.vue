<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 要给谁做动画，就把谁用transition标签包起来，然后Vue会给包起来的标签添加对应的类名-->
    <!-- appear表示页面一加载就执行一次动画 ，直接写appear相当于appear="true"，不写则相当于appear="false"-->
    <transition appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>

    <!-- 给transition添加name属性，这样只能匹配.hello-xxx-xxx的类名 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">太酷啦！</h1>
    </transition>

    <!-- 当要给多个标签添加动画时需要使用transition-group标签，并且多个标签还需要使用key标识-->
    <transition-group name="hello">
      <h1 v-show="isShow" key="1">你好帅！</h1>
      <h1 v-show="isShow" key="2">我不信！</h1>
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
  background-color: #bfa;
}
/* 下面介绍定义动画的使用*/

/* 当没有给transition标签添加name属性时，默认匹配v-xxx-active类名的样式 */
/* 当给transition标签添加了name属性时，则匹配name-xxx-active类名的样式，这些类名格式是固定的 */

/* 入场过程*/
.v-enter-active {
  /* animation：动画名称 持续时间 运动曲线 延时开始时间 播放次数 是否反方向 动画结束后的状态
    大致按照这个顺序写，没有强硬要求，但是持续时间肯定是写在延时开始时间之前 */
  animation: myAnimation 0.5s linear; /* linear表示匀速 */
}
.hello-enter-active {
  animation: myAnimation 0.5s linear;
}
/* 出场过程 */
.v-leave-active {
  animation: myAnimation 0.5s linear reverse; /* reverse表示反转 */
}
.hello-leave-active {
  animation: myAnimation 0.5s linear reverse;
}

/* 自定义动画 */
/* myAnimation是自定义的动画名 */
@keyframes myAnimation {
  /* 起始状态 */
  from {
    transform: translateX(-100%);
  }
  /* 结束状态 */
  to {
    transform: translateX(0px);
  }
}
</style>