export function setItems (state, items) {
  state.items = items
}

export function text (state, text) {
  state.text = text
}

export function addItem (state, item) {
  state.items.push(item)
}

export function removeItem (state, index) {
  state.items.splice(index, 1)
}
