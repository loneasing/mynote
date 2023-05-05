<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="$router.forward()">前进</button>
      <!-- go()的参数为正数表示前进对应的次数，为负数表示后退对应的次数 
          若前进或后退的次数与记录数不符合，则不执行任何操作-->
      <button @click="$router.go(-3)">后退3次</button>
      <button @click="$router.go(3)">前进3次</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back(){
      this.$router.back()
    }
  },
};
</script>