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
</style>

