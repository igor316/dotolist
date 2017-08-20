import api from '../../../api'
import { DEFAULT_SET_LOCATION } from '@/store/plugins/router'
import { getValues } from '@/store/plugins/form'

export async function doLogin ({ dispatch, commit }, { redirect }) {
  const values = getValues('login')
  const res = await api.sessions.doLogin(values.login, values.password)

  localStorage.setItem('currentAccount', JSON.stringify(res))

  await dispatch(DEFAULT_SET_LOCATION, { path: redirect }, { root: true })

  commit('mainLayout/currentAccount', res, { root: true })
}
