import Vue from 'vue'

export function login (state, login) {
  Vue.set(state, 'login', login)
}

export function password (state, password) {
  Vue.set(state, 'password', password)
}
