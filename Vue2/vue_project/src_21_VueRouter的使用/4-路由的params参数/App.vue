<template>
  <div>
    <div class="row">
      <!-- 这里Banner是默认组件,下面的router-view标签所代表的是路由组件-->
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- Vue中借助router-link标签实现路由的切换 -->
          <!-- router-link标签最终会被解析成a标签
               router-link标签中的active-class属性表示该标签激活后添加的类名
               router-link标签中的to属性表示跳转链接，相当于href。to属性的值为路由中配置的地址，不要忘记写“/” -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 请求路径所代表的路由组件的呈现位置 使用router-view标签占位-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: "App",
  components:{
    Banner
  }
};
</script>
