import api from '../../../api'

export async function loadItems ({ rootGetters, commit }) {
  const login = rootGetters['mainLayout/currentAccount'].login

  const items = await api.todolist.index(login)

  commit('setItems', items)
}

export function addItem ({ getters, commit }) {
  const text = getters.text

  if (text) {
    commit('addItem', { text, createdAt: new Date() })
    commit('text', '')
  }
}

export function removeItem ({ getters, commit }, index) {
  commit('removeItem', index)
}
