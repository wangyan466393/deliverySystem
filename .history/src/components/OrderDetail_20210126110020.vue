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
          <van-card
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            v-for="v in 10"
            :key="v"
          >
            <template #title>
              <b class="shops_title">嘉禾一品(温都水城)     <van-icon name="arrow" /></b>
            </template>
            <template #tags>
              <div style="margin-top: 8px;color:#ccc">
                <span>2020-01-26 10:48</span>
              </div>
            </template>
            <template #price>
              <div>
                <span>三层甜椒皇等<b>2</b>件商品</span>
              </div>
            </template>
            <template #footer>
                <van-button plain round size="mini">删除订单</van-button>
                <van-button plain round size="mini" type="primary">再来一单</van-button>
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
      option1: [{ text: "其他订单", value: 0 }],
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
.tabs_content /deep/ .van-ellipsis {
  color: black !important;
}
.order_detail .van-card {
  background-color: #fff;
  /* padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 13px; */
  border-bottom: 1px solid #e6e6e6;
  font-size: 14px;
}
</style>