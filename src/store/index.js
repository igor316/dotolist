import Vuex from 'vuex'
import Vue from 'vue'

import modules, { LOGIN, TODOLIST, MAIN_LAYOUT } from './modules'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

import {
  createRouterPlugin,
  createFormPlugin,
} from './plugins'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

let router = null

const store = new Vuex.Store({
  state: {},
  actions,
  mutations,
  getters,
  plugins: [
    createRouterPlugin(() => router),
    createFormPlugin(),
    createLogger(),
  ],
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

export { LOGIN, TODOLIST, MAIN_LAYOUT }

export function registerModule (moduleName) {
  if (!store.state[moduleName]) {
    store.registerModule(moduleName, modules[moduleName])
  }
}

export function setRouter (r) {
  router = r
}

export default store
