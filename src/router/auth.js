export default () => () => {
  const localAccount = localStorage.getItem('currentAccount')

  if (!localAccount) return false

  try {
    return JSON.parse(localAccount)
  } catch (e) {
    return false
  }
}
