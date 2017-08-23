export function setItems (state, items) {
  state.items = items
}

export function addItem (state, item) {
  state.items.push(item)
}

export function removeItem (state, key) {
  state.items = state.items.filter(item => item.key !== key)
}
