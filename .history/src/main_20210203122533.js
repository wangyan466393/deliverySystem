// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

axios.defaults.baseURL="http://47.95.13.193/takeOutSystem-1.0-SNAPSHOT";
Vue.prototype.$http = axios;

Vue.use(Vant);

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '5ad77ea3aaf123f2257a9db2a27bd452',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch','AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Geolocation','AMap.Geocoder', 'AMap.AMapManager', 'AMap.Marker'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
