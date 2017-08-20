const performValidate = (commit, validate, values) => {
  const errors = validate ? validate(values) : {}

  if (Object.keys(errors).filter(k => errors.hasOwnProperty(k)).length) {
    commit('errors', { errors })
    return new Promise((resolve, reject) => reject(errors))
  }

  commit('errors', { errors: {} })
  return Promise.resolve()
}

export default ({ validate, validateOnBlur }) => ({
  async submit ({ getters, commit }) {
    const formValues = getters.values

    await performValidate(commit, validate, formValues)

    return formValues
  },

  async blur ({ commit, getters }, { name }) {
    if (validateOnBlur) {
      const formValues = getters.values

      try {
        await performValidate(commit, validate, formValues)
      } catch (e) {
        // DO NOTHING
      }
    }

    commit('blur', { name })
  }
})
