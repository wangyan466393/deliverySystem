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
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="描述文字"
      >
        <van-button round type="danger" class="bottom-button">按钮</van-button>
      </van-empty>
    </div>
  </div>
</template>
<script>
export default {
  name: "Order",
};
</script>

