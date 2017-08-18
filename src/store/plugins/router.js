import { SET_LOCATION_ACTION, NAMESPACE } from '../constants'

export default (getRouter, namespace = NAMESPACE) =>
  store =>
    store.registerModule(namespace, {
      namespaced: true,
      state: {},
      actions: {
        [SET_LOCATION_ACTION]: (state, payload) => {
          getRouter().push(payload)
        },
      },
    })
