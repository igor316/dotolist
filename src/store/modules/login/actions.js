import api from '../../../api'

export async function doLogin ({ getters }) {
  const res = await api.sessions.doLogin(getters.login, getters.password)

  console.log(res)
}
