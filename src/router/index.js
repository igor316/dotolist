import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'
import MainLayout from '@/components/MainLayout'

import store from '../store'
import auth from './auth'
// import Hello from '@/components/Hello'

const checkAuth = auth(store)
Vue.use(Router)

const router = new Router({
  routes: [/* {
      path: '/',
      name: 'Hello',
      component: Hello
    }, */{
      path: '/',
      component: MainLayout,
      meta: { requiresAuth: true },
      children: [{
        path: '',
        name: 'TodoList',
        component: TodoList,
      }],
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }]
})

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

export default router
