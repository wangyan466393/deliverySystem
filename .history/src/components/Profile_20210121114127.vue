<template>
  <div class="profile_ljp">
    <van-nav-bar
      title="我的"
      text-color="#fff"
      style="background-color: #00a67c; color: #fff"
    >
    </van-nav-bar>
    <div>
      <van-row>
        <van-col span="8">
          <van-image
            round
            width="10rem"
            height="10rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>

