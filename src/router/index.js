import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'
import MainLayout from '@/components/MainLayout'
import auth from './auth'
// import Hello from '@/components/Hello'

const router = new Router({
  mode: 'history',
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
