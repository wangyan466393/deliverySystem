<template>
  <div class="msite">
    <van-nav-bar
      :title="positionAddress ?positionAddress :'正在定位...'"
      text-color="#fff"
      style="background-color: #00a67c; color: #fff"
    >
      <template #left>
        <van-icon name="search" size="20" color="#fff" />
      </template>
      <template #right>
        <a href="" class="login_ljp">登录|注册</a>
      </template>
    </van-nav-bar>
    <template>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#00a67c">
        <van-swipe-item>
          <van-grid square :border="false">
            <van-grid-item
              v-for="(value, index) in gridData"
              :key="index"
              icon="https://img.yzcdn.cn/vant/apple-3.jpg"
              :text="value.name"
            />
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid square :border="false">
            <van-grid-item
              v-for="value in 8"
              :key="value"
              icon="https://img.yzcdn.cn/vant/apple-3.jpg"
              text="文字"
            />
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </template>
    <van-divider v-for="v in 2" :key="v" :class="'divider' + v" />
    <div class="shops_lists">
      <van-cell title="附近商家" icon="wap-nav" :border="false" />
      <template v-for="(item,index) in shopsData">
        <img :src="item.photo" alt="" :key="item">
      <van-card :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo" :key="index">
        <template #title>
          <van-tag
            color="#FFD857"
            text-color="black"
            size="medium"
            style="font-weight: 700"
            >品牌</van-tag
          >
          <b class="shops_title">{{ item.name }}</b>
        </template>
        <template #tags>
          <div style="margin-top: 18px">
            <van-rate
              v-model="item.score"
              allow-half
              color="#FF992D"
              readonly
              size="14"
            />
            <span>{{item.score}}</span>
            <span>月售{{item.sales}}单</span>
          </div>
        </template>
        <template #price>
          <div>
            <span>¥20起送/配送费约¥5</span>
          </div>
        </template>
      </van-card>
      </template>
      
    </div>
    <div class="amap-page-container">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>
      <div class="toolbar">
        <!-- <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span> -->
      </div>
    </div>
  </div>
</template>
<script>
// import VueAMap from "vue-amap";
// let amapManager = new VueAMap.AMapManager();
export default {
  name: "MSite",
  data() {
    let self = this;
    return {
      positionAddress: "",
      value: 4,
      gridData: [
        { text: "甜品饮品" },
        { text: "商超便利" },
        { text: "美食" },
        { text: "简餐" },
        { text: "新店特惠" },
        { text: "准时达" },
        { text: "预定早餐" },
        { text: "土豪推荐" },
      ],
      shopsData:null,
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                console.log(result);
                // console.log(result.addressComponent.township);
                if (result && result.position) {
                  var len = result.addressComponent.township.length;
                  var index = result.formattedAddress.indexOf(
                    result.addressComponent.township
                  );
                  self.positionAddress = result.formattedAddress.substring(
                    index + len
                  );
                  // self.lng = result.position.lng;
                  // self.lat = result.position.lat;
                  // self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            },
          },
        },
      ],
    };
  },
  methods: {
    //首页九宫格
    getGrid(){
      let _this = this;
      this.$http.post("/biz/queryBigCategory").then(res=>{
        console.log(res);
        _this.gridData = res.data;
      })
    },
    //首页商家信息
    getShopsData(){
      let _this = this;
      this.$http.get("/biz/queryAllShopsInfo").then(res=>{
        console.log(res.data);
        this.shopsData = res.data
      })
    }
  },
  created() {
    this.getGrid();
    this.getShopsData()
  },
};
</script>
<style scoped>
.msite .van-divider {
  margin-top: 0;
}
.msite .divider2 {
  margin-bottom: 0;
}

a.login_ljp {
  color: #fff;
  font-size: 0.875rem;
}
.shops_lists .van-cell {
  padding-bottom: 0;
}
.shops_lists .van-card {
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 13px;
  border-bottom: 1px solid #e6e6e6;
}
.shops_lists .shops_title {
  font-size: 0.875rem;
}
</style>
