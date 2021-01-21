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
        <a href="" class="login_ljp">登录|注册</a>
      </template>
    </van-nav-bar>
    <template>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#00a67c">
        <van-swipe-item>
          <van-grid square :border="false">
            <van-grid-item
              v-for="(value, index) in gridData"
              :key="index"
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
    <van-divider v-for="v in 2" :key="v" :class="'divider' + v" />
    <div>
      <van-cell title="附近商家" icon="wap-nav" :border="false" />
      <van-card thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #title>
          <van-tag color="#FFD857" text-color="black">品牌</van-tag>
          <span>嘉禾一品</span>
        </template>
        <template #price-top>
          <div>
              <van-rate v-model="value" readonly />
          </div>
        </template>
        <template #bottom>
          <div>
              <span>¥20起送/配送费约¥5</span>
          </div>
        </template>
      </van-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "MSite",
  data() {
    return {
      value: 4,
      gridData: [
        { text: "甜品饮品" },
        { text: "商超便利" },
        { text: "美食" },
        { text: "简餐" },
        { text: "新店特惠" },
        { text: "准时达" },
        { text: "预定早餐" },
        { text: "土豪推荐" },
      ],
    };
  },
};
</script>
<style scoped>
.msite /deep/ .van-ellipsis {
  color: #fff;
}
.msite .van-divider {
  margin-top: 0;
}
.msite .divider2 {
  margin-bottom: 0;
}

a.login_ljp {
  color: #fff;
  font-size: 0.875rem;
}
</style>
