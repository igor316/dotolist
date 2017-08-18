<template>
  <div v-if="!items.length">No items</div>
  <list v-else :items="items">
    <template slot="renderItem" scope="props">
      <list-item :item="props.item" />
    </template>
  </list>
</template>

<script>
import List from './List'
import ListItem from './List/ListItem'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters('todoList', ['items']),
  methods: mapActions('todoList', ['loadItems']),
  mounted () {
    this.loadItems()
  },
  components: {
    List,
    ListItem,
  },
}
</script>
