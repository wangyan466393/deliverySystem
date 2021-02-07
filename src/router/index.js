import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/components/MSite'   //外卖
import Search from '@/components/Search'  //搜索
import Order from '@/components/OrderDetail' //订单
import Profile from '@/components/Profile'  //我的
import Login from '@/components/Login'  //登录

import Shop from '@/components/Shop/Shop.vue'//商家页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shop',
      component: Shop,
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
