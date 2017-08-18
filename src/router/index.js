import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'

import { registerModule, LOGIN, TODOLIST, MAIN_LAYOUT } from '../store'
import MainLayout from '@/components/MainLayout'
import TodoList from '@/components/TodoList'
import Login from '@/components/Login'

const createAsyncComponentRenderer = (component, moduleName) => resolve => {
  if (moduleName) {
    registerModule(moduleName)
  }

  return Promise.resolve(component)
}

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: createAsyncComponentRenderer(MainLayout, MAIN_LAYOUT),
    meta: { requiresAuth: true },
    children: [{
      path: '',
      name: 'TodoList',
      component: createAsyncComponentRenderer(TodoList, TODOLIST),
    }],
  }, {
    path: '/login',
    name: 'Login',
    component: createAsyncComponentRenderer(Login, LOGIN),
  }],
})

const checkAuth = auth()
Vue.use(Router)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!checkAuth()) {
      next({
        name: 'Login',
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

if (process.env.NODE_ENV === 'development') {
  window.router = router
}

export default router
