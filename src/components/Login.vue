<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
      </div>
      <div class="login_content">
        <van-form @submit="login">
          <section class="login_message">
            <van-field
              class="login-input"
              v-model="account"
              name="用户名"
              maxlength="11"
              placeholder="手机/邮箱/用户名"
            />
          </section>
          <section class="login_message">
            <van-field
              v-if="!showPwd"
              class="login-input"
              v-model="password"
              type="password"
              maxlength="8"
              name="密码"
              placeholder="密码"
            />
            <van-field
              v-else
              class="login-input"
              v-model="password"
              maxlength="8"
              name="密码"
              placeholder="密码"
            />
            <van-field name="switch" class="switch_button">
              <template #input>
                <van-switch @click="showPwd=!showPwd" v-model="showPwd" size="20"/>
              </template>
            </van-field>
          </section>
          <section class="login_message">
            <van-field
              class="login-input"
              v-model="captcha"
              name="验证码"
              maxlength="11"
              placeholder="验证码"
            />
          </section>
          <div style="margin: 16px;">
            <van-button class="login_submit" round block type="info" native-type="submit">登录</van-button>
          </div>
        </van-form>
      </div>
    </div>
    <!-- 返回箭头 -->
    <a href="javascript:" class="go_back" @click="$router.back()">
        <van-icon name="arrow-left" size="30" color="#999"/>
      </a>
    <!-- 错误提示弹出框 -->
    <van-notify v-model="alertShow" type="warning">
      <van-icon name="fail" style="margin-right: 4px;"/>
      <span>{{alertText}}</span>
    </van-notify>
  </section>
</template>
<script>
import { reqPwdLogin } from '../api'
export default {
  name: "Login",
  data() {
    return {
      account: "", // 用户名
      password: "", // 密码
      showPwd: false, // 是否显示密码
      captcha: "", // 图形验证码
      alertShow: false, // 是否显示警告框
      alertText: "" // 提示文本
    };
  },
  methods: {
    // 优化
    showAlert(alertText) {
        this.alertShow = true;
        this.alertText = alertText;
        setTimeout(() => {
          this.alertShow = false;
        }, 2000);
      },
    // 异步登陆
    async login() {
      let result;
      const { account, password, captcha } = this;
      if (!this.account) {
        // 用户名必须指定
        this.showAlert('用户名必须指定')
        return;
      } else if (!this.password) {
        // 密码必须指定
        this.showAlert('密码必须指定');
        return;
      } else if (!this.captcha) {
        // 验证码必须指定
        this.showAlert('验证码必须指定');
        return;
      } 
      result = await reqPwdLogin({account, password});
      // 根据结果数据处理
      if(result){
        console.log(result);
        // 将user保存到vuex的state
          this.$store.dispatch('recordUser', result)
      }else{
        // 显示新的图片验证码
        this.showAlert('用户名密码错误');
        this.account='';
        this.password='';
        this.captcha='';
      }
    }
  }
};
</script>
<style>
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}
.loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.login_header .login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #02a774;
  text-align: center;
}
.login_message {
  position: relative;
  margin-top: 16px;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.login_message .switch_button {
  position: absolute;
  top: 1%;
  right: 10px;
  width: 58px;
  height: 36px;
}
.login_content .login-input {
  width: 100%;
  height: 82%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.login_content .login-input:focus {
  border: 1px solid #02a774;
}
.login_submit {
  background: #4cd96f;
  border: 1px solid #4cd96f;
}
.go_back{
  position:absolute;
  top:5px;
  left:5px;
}
</style>


