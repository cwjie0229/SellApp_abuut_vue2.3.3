// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Goods from '@/components/goods/Goods'
import ratings from '@/components/ratings/Ratings'
import seller from '@/components/seller/Seller'
import '@/common/stylus/index.styl'
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/goods', component: Goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
  ],
  linkActiveClass: 'active'
})
router.push('/goods')
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    eventHub: new Vue()
  }
})
