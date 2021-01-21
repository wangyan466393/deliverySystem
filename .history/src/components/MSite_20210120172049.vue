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
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#00a67c">
        <van-swipe-item>
          <van-grid square :border="false">
            <van-grid-item
              v-for="value in gridData"
              :key="value"
              icon="https://img.yzcdn.cn/vant/apple-3.jpg"
              :text="value.text"
            />
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid square :border="false">
            <van-grid-item
              v-for="value in 8"
              :key="value"
              icon="https://img.yzcdn.cn/vant/apple-3.jpg"
              text="文字"
            />
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </template>
    <van-divider/>
    <div style="border-top:1px solid #ebedf0">
        <van-cell title="附近商家" icon="wap-nav" />
    </div>
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
.msite .van-divider{
    margin-top: 0;
}
a {
  color: #fff;
  font-size: 0.875rem;
}
</style>
