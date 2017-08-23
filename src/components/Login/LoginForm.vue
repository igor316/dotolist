<template>
  <form @submit.prevent="() => $emit('submit', { mode: title })" :style="{ width: '60%', margin: 'auto' }">
    <div :style="{ 'text-align': 'center' }">{{ title }}</div>
    <div>
      <form-field name="email">
        <template scope="formFieldProps">
          <common-form-field type="email" :formFieldProps="formFieldProps" label="Email" />
        </template>
      </form-field>
      <form-field name="password">
        <template scope="formFieldProps">
          <common-form-field type="password" :formFieldProps="formFieldProps" label="Password" />
        </template>
      </form-field>
    </div>
    <div>
      <span v-once>Have an account</span>
      <toggle-button :value="mode" @change="({ value }) => mode = value" :sync="true" />
    </div>
    <div v-once>
      <b-button type="submit" variant="primary">Login</b-button>
    </div>
  </form>
</template>

<script>
import { createFormMixin } from '@/store/plugins/form'
import CommonFormField from '../common/CommonFormField'

const validate = values => {
  const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const errors = {}

  if (!values.email) {
    errors.email = 'Email is required!'
  } else if (!emailRegexp.test(values.email)) {
    errors.email = 'Email should be valid!'
  }

  if (!values.password) {
    errors.password = 'Password is required!'
  } else if (values.password.length < 6) {
    errors.password = 'Password should contain at least 6 symbols'
  }

  return errors
}

const form = createFormMixin({
  formName: 'login',
  validate,
  validateOnBlur: true,
})

export default {
  data () { return { mode: true } },
  computed: {
    title () { return this.mode ? 'Login' : 'Sign up' }
  },
  mixins: [form],
  components: { CommonFormField },
}
</script>
