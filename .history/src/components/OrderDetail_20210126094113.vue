<template>
  <div class="order_detail">
    <van-nav-bar
      title="订单详情"
      style="background-color: #00a67c; color: #fff"
    >
      <template #left>
        <van-icon name="arrow-left" color="#fff" @click-left="onClickLeft" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: "orderdetail",
  methods: {
    onClickLeft() {
      Toast("返回");
    },
  },
};
</script>