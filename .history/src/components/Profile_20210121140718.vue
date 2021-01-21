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
        <van-col span="6" offset="1">
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
              <van-icon
                :name="require('@/assets/images/icon_phone.png')"
                size="20"
              />暂无绑定手机号
            </van-col>
          </van-row>
        </van-col>
        <van-col span="2" style="line-height: 5"
          ><van-icon name="arrow"
        /></van-col>
      </van-row>
      <van-grid :column-num="3">
        <van-grid-item>
          <p><span class="remaining_ljp">0.00</span>元</p>
          <span>我的余额</span>
        </van-grid-item>
        <van-grid-item>
          <p><span class="discounts_ljp">0</span>个</p>
          <span>我的优惠</span>
        </van-grid-item>
        <van-grid-item>
          <p><span class="integral_ljp">0</span>分</p>
          <span>我的积分</span>
        </van-grid-item>
      </van-grid>
      <van-cell title="单元格" icon="location-o" is-link/>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>
<style >
.profile_content > .van-row {
  background-color: #00a67c;
  color: #fff;
}
.profile_content p > span{
    font-size: 24px;
    font-weight: 700;
}
.remaining_ljp{
    color: #FF992D;
}
.discounts_ljp{
    color:#FF613D;
}
.integral_ljp{
    color:#69C147;
}
</style>
