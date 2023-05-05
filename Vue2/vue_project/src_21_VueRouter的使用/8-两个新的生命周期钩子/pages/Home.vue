<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 访问二级路由的组件，访问地址：一级路由path/二级路由path -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <hr />
      <!-- 前面了解过切换路由后被切换的路由组件就被销毁了，假如一个路由组件中填写了表单数据，但是切换后组件就被销毁了，
            重新切换回来表单数据也不见了，那么怎么才能让被切换的路由组件不被销毁？ 
            将router-view标签用keep-alive标签包裹起来，该标签有一个include属性，值为组件名。该属性用来指定路由组件不被销毁。
            若不使用include属性，表述该router-view中出现过的所有路由组件都不会被销毁，而是将他们缓存下来了。
            一般不需要全部缓存下来，而是将include使用数据绑定将值写成数组形式指定不需要被销毁的路由组件。 -->

      <!-- 跳转路由后About和Home组件都不会被销毁 -->
      <keep-alive include="News"><router-view></router-view></keep-alive>
      <!-- <keep-alive :include="['News','Message']"><router-view></router-view></keep-alive> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // 每一次切换路由组件都会将被切换的组件实例销毁。
  beforeDestroy() {
    console.log("Home组件即将被销毁了");
  },
  mounted() {
    console.log("Home组件挂载完毕了", this);
    // 每个组件实例的$route属性的值不同，但是$router属性的值是同一个，因为只有一个路由器
    window.homeRoute = this.$route;
    window.homeRouter = this.$router;
    // 将$router存储到window对象上，在控制台判断homeRouter === aboutRouter
  },
};
</script>