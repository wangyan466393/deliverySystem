<template>
  <div class="order_detail">
    <van-nav-bar
      title="订单详情"
      style="background-color: #00a67c; color: #fff"
      @click-left="onClickLeft"
    >
      <template #left>
        <van-icon name="arrow-left" color="#fff" />
      </template>
    </van-nav-bar>
    <div class="tabs_content">

    
    <van-tabs v-model="active" color="#00a67c">
      <van-tab title="外卖订单">
         
        <van-card thumb="https://img.yzcdn.cn/vant/ipad.jpeg" v-for="v in 10" :key="v">
        <template #title>
          <van-tag
            color="#FFD857"
            text-color="black"
            size="medium"
            style="font-weight: 700"
            >品牌</van-tag
          >
          <b class="shops_title">嘉禾一品(温都水城)</b>
        </template>
        <template #tags>
          <div style="margin-top: 18px">
            <span>月售755单</span>
          </div>
        </template>
        <template #price>
          <div>
            <span>¥20起送/距离5.1km</span>
          </div>
        </template>
      </van-card>
   
      </van-tab>
      <van-tab title="待评价">内容 2</van-tab>
      <van-tab title="退款">内容 3</van-tab>
      <van-tab>
        <template #title>
          <van-dropdown-menu active-color="#00a67c">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </template>
        内容 4
      </van-tab>
    </van-tabs>
    </div>

  </div>
</template>
<script>
export default {
  name: "orderdetail",
  data() {
    return {
      active: "1",
      value1: 0,
      option1: [
        { text: "其他订单", value: 0 },
      ],
    };
  },
  methods: {
    onClickLeft() {
      alert("返回");
    },
  },
};
</script>
<style scoped>
    .tabs_content  /deep/ .van-ellipsis{
        color:black !important;
    }
</style>