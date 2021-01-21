<template>
  <div class="order_ljp">
    <van-nav-bar
      title="订单列表"
      text-color="#fff"
      style="background-color: #00a67c; color: #fff"
    >
    </van-nav-bar>
    <div>
      <van-empty
        class="custom-image"
        :image="require('@/assets/images/person.png')"
        description="登录后查看外卖订单"
      >
        <van-button type="primary" class="bottom-button">立即登录</van-button>
      </van-empty>
    </div>
  </div>
</template>
<script>
export default {
  name: "Order",
};
</script>

<style scoped>
.bottom-button {
  border-radius: 5px;
  padding: 10px 20px;
  background: #02a774;
}
</style>