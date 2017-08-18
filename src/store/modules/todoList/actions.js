import api from '../../../api'

export async function loadItems ({ rootGetters, commit }) {
  const login = rootGetters['mainLayout/currentAccount'].login

  const items = await api.todolist.index(login)

  commit('setItems', items)
}
