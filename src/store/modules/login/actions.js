import api from '../../../api'
import { DEFAULT_SET_LOCATION } from '../../constants'

export async function doLogin ({ getters, dispatch }) {
  const res = await api.sessions.doLogin(getters.login, getters.password)

  localStorage.setItem('currentAccount', JSON.stringify(res))
  dispatch(DEFAULT_SET_LOCATION, { name: 'TodoList' }, { root: true })
}
