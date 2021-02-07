<template>
  <div class="shop-deader">
    <nav class="shop-nav">
      <a class="back" @click="$router.back()">
        <van-icon name="arrow-left" size="30" color="#999"/>
      </a>
    </nav>
  </div>
</template>
<script>
export default {
    name:'shopHeader'
};
</script>
<style>
.shop-header{
    height:100%;
    position:relative;
    background:#fff;
    color:#fff;
    overflow:hidden;
}
.shop-nav{
    background-size:cover;
    background-repeat:no-repeat;
    height:40px;
    padding:5px 10px;
    position:relative;
}
       
    
    
</style>


