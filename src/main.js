import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import axios from 'axios'
import 'buefy/dist/buefy.css'

import { routes } from '@/routes.js'
import { store } from '@/store'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.prototype.$http = axios

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
