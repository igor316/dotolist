import store from '../../index'
import Field from './Field'
import * as mutations from './mutations'
import * as getters from './getters'
import createActions from './actions'
import { deepEqual } from './helpers'

export default () => s => {
  s.registerModule('vuex-form', {
    namespaced: true,
    state: {},
  })
}

export function getValues (formName) {
  return store.getters[`vuex-form/${formName}/values`]
}

export function reset (formName) {
  const values = store.getters[`vuex-form/${formName}/initialValues`]
  store.commit(`vuex-form/${formName}/values`, { values })
}

export function setField (formName, fieldName, fieldValue) {
  store.commit(`vuex-form/${formName}/change`, { name: fieldName, value: fieldValue })
}

export function focus (formName, fieldName) {
  store.commit(`vuex-form/${formName}/focus`, { name: fieldName })
}

export function blur (formName, fieldName) {
  store.commit(`vuex-form/${formName}/blur`, { name: fieldName })
}

export function createFormMixin ({ formName, validate, validateOnBlur }) {
  if (store.state['vuex-form'][formName]) {
    throw new Error(`Form with name ${formName} already exists!`)
  }

  store.registerModule(['vuex-form', formName], {
    state: { values: {}, meta: {} },
    namespaced: true,
    getters,
    mutations,
    actions: createActions({ validate, validateOnBlur }),
  })

  return {
    data () {
      return { formName, __type: 'vuex-form' }
    },
    props: ['initialValues'],
    methods: {
      async handleSubmit (userSubmit) {
        try {
          const values = await store.dispatch(`vuex-form/${formName}/submit`)
          userSubmit(values)
        } catch (errors) {
          console.error(errors)
        }
      },
    },
    mounted () {
      if (this.initialValues) {
        this.$store.commit(`vuex-form/${formName}/initialValues`, { initialValues: this.initialValues })
        this.$store.commit(`vuex-form/${formName}/values`, { values: this.initialValues })
      } else {
        this.$store.commit(`vuex-form/${formName}/initialValues`, { initialValues: {} })
      }
    },
    computed: {
      pristine () {
        const initial = this.$store.getters[`vuex-form/${formName}/initialValues`]
        const values = this.$store.getters[`vuex-form/${formName}/values`]

        return deepEqual(initial, values)
      },
    },
    components: {
      'form-field': Field,
    },
  }
}
