import Vuex from 'vuex'
import Vue from 'vue'

import modules, { LOGIN, TODOLIST, MAIN_LAYOUT } from './modules'
import { DEFAULT_SET_LOCATION } from './plugins/router'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import firebase from '@/api/firebase'

import {
  createRouterPlugin,
  createFormPlugin,
  createFirebasePlugin,
} from './plugins'
import createLogger from 'vuex/dist/logger'
import { createVuexLoader } from 'vuex-loading'

const VuexLoading = createVuexLoader({
  moduleName: 'loading',
  componentName: 'v-loading',
})

Vue.use(Vuex)
Vue.use(VuexLoading)

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
    createFirebasePlugin(firebase, {
      authAction: 'login/accountVerified',
      authArgs: user => ({
        redirect: router.currentRoute.query.redirect || '/',
        accountData: { email: user.email, uid: user.uid },
      }),
      onUnauth: () => {
        if (router.currentRoute.name !== 'Login') {
          store.dispatch(DEFAULT_SET_LOCATION, {
            name: 'Login',
            query: { redirect: router.currentRoute.fullPath },
          })
        }
      },
    }),
    VuexLoading.Store,
  ],
})

if (module.hot) {
  const dependencies = [
    { path: './actions', name: './actions', field: 'actions' },
    { path: './mutations', name: './mutations', field: 'mutations' },
    { path: './modules', name: './modules/*', field: 'modules' },
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
