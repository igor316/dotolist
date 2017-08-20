export function value (state) {
  return name => state.values[name]
}

export function meta (state) {
  return name => state.meta[name]
}

export function values (state) {
  return state.values
}

export function initialValues (state) {
  return state.initialValues
}
