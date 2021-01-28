<template>
  <div class="order_detail">
    <van-nav-bar
      title="订单详情"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="background-color: #00a67c; color: #fff"
    >
    <template #left>
        <van-icon name="arrow-left" color="#fff" />
      </template>
      </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: "orderdetail",
};
</script>