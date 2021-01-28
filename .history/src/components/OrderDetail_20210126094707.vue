<template>
  <div class="order_detail">
    <van-nav-bar
      title="订单详情"
      style="background-color: #00a67c; color: #fff"
      @click-left="onClickLeft"
    >
      <template #left>
        <van-icon name="arrow-left" color="#fff"  />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active">
  <van-tab title="外卖订单">内容 1</van-tab>
  <van-tab title="待评价">内容 2</van-tab>
  <van-tab title="退款">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
  </div>
</template>
<script>
export default {
  name: "orderdetail",
  data() {
      return {
          active:'1'
      }
  },
  methods: {
    onClickLeft() {
      alert("返回");
    },
  },
};
</script>