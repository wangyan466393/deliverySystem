<template>
  <div class="msite">
    <van-nav-bar title="后厂村路联想全球.." text-color="#fff" style="background-color:#00A67C;color:#fff">
      <template #left>
        <van-icon name="search" size="20" color="#fff" />
      </template>
      <template #right>
        <a href="">登录|注册</a>
      </template>
    </van-nav-bar>
    <template>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </template>
  </div>
</template>
<script>
export default {
  name: "MSite",
};
</script>
<style scoped>
.msite /deep/ .van-ellipsis{
    color: #fff ;
}
    a{
        color:#fff;
        font-size: 0.875rem;
    }
</style>
