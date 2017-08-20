import Vue from 'vue'

export function registerField (state, { name }) {
  Vue.set(state.values, name, null)
  Vue.set(state.meta, name, { error: null, focus: false })
}

export function change (state, { name, value }) {
  if (state.values.hasOwnProperty(name)) {
    Vue.set(state.values, name, value)
  } else {
    throw new Error(`Cannot change unregistered field ${name}!`)
  }
}

export function blur (state, { name }) {
  if (state.values.hasOwnProperty(name)) {
    Vue.set(state.meta[name], 'focus', false)
  } else {
    throw new Error(`Cannot blur unregistered field ${name}!`)
  }
}

export function focus (state, { name }) {
  if (state.values.hasOwnProperty(name)) {
    Vue.set(state.meta[name], 'focus', true)
  } else {
    throw new Error(`Cannot focus unregistered field ${name}!`)
  }
}

export function errors (state, { errors }) {
  Object.keys(state.meta).filter(k => state.meta.hasOwnProperty(k)).forEach((name) => {
    if (errors.hasOwnProperty(name)) {
      Vue.set(state.meta[name], 'error', errors[name])
    } else {
      Vue.set(state.meta[name], 'error', null)
    }
  })
}

export function values (state, { values }) {
  Object.keys(state.values).filter(k => state.values.hasOwnProperty(k)).forEach((name) => {
    if (values.hasOwnProperty(name)) {
      Vue.set(state.values, name, values[name])
    } else {
      Vue.set(state.values, name, null)
    }
  })
}

export function initialValues (state, { initialValues }) {
  Vue.set(state, 'initialValues', initialValues)
}
