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
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
};
</script>
<style scoped>
</style>

