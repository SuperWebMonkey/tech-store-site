import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Layout from '../src/components/Layout.vue'
import ScreenOverlay from '../src/components/misc/ScreenOverlay.vue'
import api from './api/index'

Vue.config.productionTip = false
Vue.component('Layout', Layout)
Vue.component('ScreenOverlay', ScreenOverlay)
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
