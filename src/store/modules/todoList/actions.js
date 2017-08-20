import api from '../../../api'
import { getValues, reset, focus } from '@/store/plugins/form'

export async function loadItems ({ rootGetters, commit }) {
  const login = rootGetters['mainLayout/currentAccount'].login

  const items = await api.todolist.index(login)

  commit('setItems', items)
}

export function addItem ({ getters, commit }) {
  const text = getValues('createTodoItem').text

  if (text) {
    commit('addItem', { text, createdAt: new Date() })
    reset('createTodoItem')
    focus('createTodoItem', 'text')
  }
}

export function removeItem ({ getters, commit }, index) {
  commit('removeItem', index)
}
