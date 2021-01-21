<template>
  <div>
    <van-nav-bar title="后厂村路联想全球.." text-color="#fff" style="background-color:#00A67C;color:#fff">
      <template #left>
        <van-icon name="search" size="20" color="#fff" />
      </template>
      <template #right>
        <a href="">登录|注册</a>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: "MSite",
};
</script>
<style scoped>
.van-nav-bar__title{
    color: #fff !important;
}
    a{
        color:#fff;
        font-size: 0.875rem;
    }
</style>
