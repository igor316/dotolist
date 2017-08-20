<template>
  <login-form @submit="doLogin" />
</template>

<script>
import { mapActions } from 'vuex'
import LoginForm from './LoginForm'

export default {
  methods: mapActions({
    doLogin: 'login/doLogin',
  }),
  components: { LoginForm },
}
</script>
