import * as mutations from './mutations'
import * as getters from './getters'

const getCurrentAccount = () => {
  const localAccount = localStorage.getItem('currentAccount')

  if (!localAccount) return null

  try {
    return JSON.parse(localAccount)
  } catch (e) {
    return null
  }
}

export default {
  state: { currentAccount: getCurrentAccount() },
  mutations,
  getters,
  namespaced: true,
}
