import * as mutations from './mutations'
import * as getters from './getters'
import { currentAccount } from '@/api/sessions'

const getCurrentAccount = () => {
  const account = currentAccount()

  if (!account) return null

  return {
    email: account.email,
    uid: account.uid,
  }
}

export default {
  state: { currentAccount: getCurrentAccount() },
  mutations,
  getters,
  namespaced: true,
}
