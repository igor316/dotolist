<template>
  <form @submit.prevent="doLogin">
    <div>
      <input v-model="login">
      <input v-model="password" type="password">
    </div>
    <div>
      <b-button type="submit" variant="primary">Login</b-button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions({
    doLogin: 'login/doLogin',
  }),
  computed: {
    login: {
      get () {
        return this.$store.getters['login/login']
      },
      set (value) {
        this.$store.commit('login/login', value)
      },
    },
    password: {
      get () {
        return this.$store.getters['login/password']
      },
      set (value) {
        this.$store.commit('login/password', value)
      },
    },
  },
}
</script>
