<template>
  <div id="app">
    <router-view />
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide.vue";
export default {
  name: "App",
  components: { FooterGuide },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
}
a{
  text-decoration: none;
}
/* 头部文字样式 */
#app /deep/ .van-ellipsis {
  color: #fff;
}
</style>
