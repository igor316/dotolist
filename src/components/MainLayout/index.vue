<template>
  <span v-if="!currentAccount"></span>
  <div v-else>
    <span>This is a todo list of {{ currentAccount.login }} user</span>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('mainLayout', ['currentAccount']),
}
</script>
