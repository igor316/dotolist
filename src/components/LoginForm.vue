<template>
  <form @submit.prevent="doLogin">
    <div>
      <form-field name="login">
        <template scope="formFieldProps">
          <common-form-field type="text" :formFieldProps="formFieldProps" />
        </template>
      </form-field>
      <form-field name="password">
        <template scope="formFieldProps">
          <common-form-field type="password" :formFieldProps="formFieldProps" />
        </template>
      </form-field>
    </div>
    <div>
      <b-button type="submit" variant="primary">Login</b-button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { createFormMixin } from '@/store/plugins/form'
import CommonFormField from './CommonFormField'

const validate = values => {
  const errors = {}

  if (!values.login) {
    errors.login = 'Login is required!'
  } else if (values.login.length < 3) {
    errors.login = 'Login should contain at least 3 symbols'
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
  mixins: [form],
  components: { CommonFormField },
  methods: mapActions('login', ['doLogin']),
}
</script>
