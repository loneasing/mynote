<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 导入pubsub
import PubSub from 'pubsub-js'
export default {
  name: "School",
  data() {
    return {
      name: "哔哩哔哩",
      address: "上海",
    };
  },
  mounted() {
    // 订阅消息
    // subscribe()有两个参数，第一个参数为消息名（唯一标识）；第二个参数为回调函数，接收到的数据都传给回调函数使用。
    // 回调函数也有两个参数，第一个参数为消息名，第二个参数是消息的内容。第一个参数没多大用处但是又不能不写，所以一般会用"_"来占位。（实际上就是个变量名"_"）
    // subscribe()会返回一个值，这个值是订阅者的唯一标识。
    this.pbId = PubSub.subscribe('hello',(_,data)=>{  // 将订阅者的id存储到当前实例上，取消订阅的时候就可以直接获取到这个id
      console.log('我是School组件，收到了来自'+_+'的消息：'+data)
    })
  },
  beforeDestroy() {
	// 取消订阅是根据订阅者的唯一标识取消的
  // unsubscribe()的参数为订阅者的唯一标识。
    PubSub.unsubscribe(this.pbId)
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 10px;
}
</style>