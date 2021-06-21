import Vue from 'vue'
import App from './App.vue'
import VueRouter  from 'vue-router'
import routes from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import * as filters from './filters' // global filters

import  '@/styles/index.scss'
import '@/styles/index.scss'

import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const router = new VueRouter({
  mode: 'history', 
  routes, 
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
