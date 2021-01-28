<template>
  <div class="search_ljp">
    <van-nav-bar
      title="搜索"
      text-color="#fff"
      style="background-color: #00a67c; color: #fff"
    >
    </van-nav-bar>
    <div>
      <van-search
        v-model="value"
        show-action
        placeholder="请输入商家名称"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch" class="search_btn">搜索</div>
        </template>
      </van-search>
    </div>
    <div>
        <van-card thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #title>
          <van-tag
            color="#FFD857"
            text-color="black"
            size="medium"
            style="font-weight: 700"
            >品牌</van-tag
          >
          <b class="shops_title">嘉禾一品(温都水城)</b>
        </template>
        <template #tags>
          <div style="margin-top: 18px">
            <span>月售755单</span>
          </div>
        </template>
        <template #price>
          <div>
            <span>¥20起送/配送费约¥5</span>
          </div>
        </template>
      </van-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
      return {
          value:''
      }
  },
  methods: {
      onSearch(){
          
      }
  },
};
</script>
<style scoped>
.search_btn{
    padding: 0 10px;
    border-radius: 3px;
    background-color:#00a67c ;
    color: #fff;
}
.search_ljp .van-card {
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 13px;
  border-bottom: 1px solid #e6e6e6;
}
</style>

