<template>
  <div class="hello" route>
    <van-tabbar v-model="active" active-color='#4AA478'>
      <van-tabbar-item icon="home-o" to='/'>外卖</van-tabbar-item>
      <van-tabbar-item icon="search" to='/search'>搜索</van-tabbar-item>
      <van-tabbar-item icon="bill-o" to='/order'>订单</van-tabbar-item>
      <van-tabbar-item icon="contact" to='/profile'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  data () {
     return {
      active: 0,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
