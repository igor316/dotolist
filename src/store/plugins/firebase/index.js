export default (firebase, { authAction, authArgs, onUnauth }) =>
  store => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch(authAction, authArgs(user))
      } else {
        onUnauth()
      }
    })
  }
