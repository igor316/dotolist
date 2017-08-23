<template>
  <div>
    <login-form @submit="({ mode }) => doLogin({ redirect, mode })" :initialValues="{ email: '', password: '' }" />
  </div>
</template>

<script>
import LoginForm from './LoginForm'
import { mapActions } from 'vuex'

export default {
  props: ['redirect'],
  methods: mapActions('login', ['doLogin']),
  components: { LoginForm },
}
</script>
