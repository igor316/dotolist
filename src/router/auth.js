export default store => () => {
  if (!store.state.mainLayout) {
    return false
  }

  const currentAccount = store.state.mainLayout.currentAccount

  if (currentAccount) return currentAccount

  const localAccount = localStorage.getItem(currentAccount)

  if (!localAccount) return false

  try {
    return JSON.parse(localAccount)
  } catch (e) {
    return false
  }
}
