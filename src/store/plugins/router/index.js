import { SET_LOCATION_ACTION, NAMESPACE, DEFAULT_SET_LOCATION } from './constants'

export {
  SET_LOCATION_ACTION,
  NAMESPACE,
  DEFAULT_SET_LOCATION,
}

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
