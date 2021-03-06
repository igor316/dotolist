// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store, { setRouter } from './store'
import { sync } from 'vuex-router-sync'
import Icon from 'vue-awesome/components/Icon'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import ToggleButton from 'vue-js-toggle-button'

sync(store, router)
setRouter(router)

Vue.config.productionTip = false

Vue.use(ToggleButton)
Vue.use(BootstrapVue)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
})
