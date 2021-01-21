<template>
  <div class="profile_ljp">
    <van-nav-bar
      title="我的"
      text-color="#fff"
      style="background-color: #00a67c; color: #fff"
    >
    </van-nav-bar>
    <div>
      <van-cell value="内容" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">单元格</span>
          <van-tag type="danger">标签</van-tag>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>

