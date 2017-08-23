<template>
  <span v-if="!currentAccount"></span>
  <div v-else>
    <div class="text-center">This is a todo list of {{ currentAccount.email }} user</div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('mainLayout', ['currentAccount']),
}
</script>
