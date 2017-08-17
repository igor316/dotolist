import { SET_LOCATION_ACTION, NAMESPACE } from '../constants'

export default (router, namespace = NAMESPACE) =>
  store =>
    store.registerModule(namespace, {
      namespaced: true,
      state: {},
      actions: {
        [SET_LOCATION_ACTION]: (state, payload) => {
          console.log(namespace, payload)
          router.push(payload)
        },
      },
    })
