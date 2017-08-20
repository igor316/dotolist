<template>
  <login-form @submit="doLogin({ redirect })" />
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
