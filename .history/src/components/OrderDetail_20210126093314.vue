<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="background-color: #00a67c; color: #fff"
    />
  </div>
</template>
<script>
export default {
  name: "orderdetail",
};
</script>