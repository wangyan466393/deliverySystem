<template>
  <div class="profile_ljp">
    <van-nav-bar
      title="我的"
      text-color="#fff"
      style="background-color: #00a67c; color: #fff"
    >
    </van-nav-bar>
    <div class="profile_content">
      <van-row>
        <van-col span="6"  offset="1">
          <van-image
            round
            width="5rem"
            height="5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-col>
        <van-col span="15">
            <van-row>
                <van-col>
                    <a href="">登录/注册</a>
                </van-col>
            </van-row>
            <van-row>
                <van-col>
                   <van-icon :name="require('@/assets/images/icon_phone.png')" />暂无绑定手机号
                </van-col>
            </van-row>
        </van-col>
        <van-col span="2" style="line-height:5"><van-icon name="arrow" /></van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>
<style >
   .profile_content > .van-row{
       background-color: #00a67c;
       color:#fff
   }
</style>
