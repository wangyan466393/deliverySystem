<template>
  <div class="msite">
    <van-nav-bar
      title="后厂村路联想全球.."
      text-color="#fff"
      style="background-color: #00a67c; color: #fff"
    >
      <template #left>
        <van-icon name="search" size="20" color="#fff" />
      </template>
      <template #right>
        <a href="">登录|注册</a>
      </template>
    </van-nav-bar>
    <template>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-grid square :border="false">
            <van-grid-item
              v-for="value in 8"
              :key="value"
              icon="photo-o"
              text="文字"
            />
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid square :border="false">
            <van-grid-item
              v-for="value in 8"
              :key="value"
              icon="photo-o"
              text="文字"
            />
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </template>
  </div>
</template>
<script>
export default {
  name: "MSite",
  data() {
      return {
          gridData:[
            {text:"甜品饮品"},
            {text:"商超便利"},
            {text:"美食"},
            {text:"简餐"},
            {text:"新店特惠"},
            {text:"准时达"},
            {text:"预定早餐"},
            {text:"土豪推荐"},
          ]
      }
  },
};
</script>
<style scoped>
.msite /deep/ .van-ellipsis {
  color: #fff;
}
a {
  color: #fff;
  font-size: 0.875rem;
}
</style>
