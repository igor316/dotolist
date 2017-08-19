import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state: { items: [], text: '' },
}
