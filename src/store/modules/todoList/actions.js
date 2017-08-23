import { todolist, sessions } from '../../../api'
import { getValues, reset, focus } from '@/store/plugins/form'

export async function loadItems ({ rootGetters, commit }) {
  const { onChange } = todolist
  const uid = sessions.currentAccount().uid

  onChange(uid, items => commit('setItems', items))
}

export function addItem ({ getters, commit, rootGetters }) {
  const text = getValues('createTodoItem').text
  const uid = sessions.currentAccount().uid

  todolist.create(uid, text, new Date())

  reset('createTodoItem')
  focus('createTodoItem', 'text')
}

export function removeItem ({ rootGetters }, key) {
  const uid = sessions.currentAccount().uid

  todolist.remove(uid, key)
}
