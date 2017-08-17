import Vuex from 'vuex'
import Vue from 'vue'

import modules from './modules'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import router from '../router'
import { createRouterPlugin } from './plugins'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules,
  actions,
  mutations,
  getters,
  plugins: [createRouterPlugin(router)],
})

if (module.hot) {
  const dependencies = [
    { path: './actions', name: './actions', field: 'actions' },
    { path: './mutations', name: './mutations', field: 'mutations' },
    { path: './modules', name: '././modules/*', field: 'modules' },
    { path: './getters', name: './getters', field: 'getters' },
  ]

  dependencies.forEach(d =>
    module.hot.accept([d.name], () => {
      const newDependency = require(d.path).default

      store.hotUpdate({
        [d.field]: newDependency,
      })
    })
  )
}

if (process.env.NODE_ENV === 'development') {
  window.store = store
}

export default store
