import isEqualWith from 'lodash/isEqualWith'

const customizer = (obj, other) => {
  if (obj === other) return true
  if ((obj == null || obj === '' || obj === false) && (other == null || other === '' || other === false)) return true

  if (obj && other && obj._error !== other._error) return false
  if (obj && other && obj._warning !== other._warning) return false
}

export function deepEqual (a, b) {
  return isEqualWith(a, b, customizer)
}
