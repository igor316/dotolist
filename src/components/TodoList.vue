<template>
  <div>
    <form @submit.prevent="addItem">
      <input v-model="text"/>
      <b-button type="submit" variant="success">Add Item</b-button>
    </form>
    <div v-if="!items.length">No items</div>
    <list v-else :items="items">
      <template slot="renderItem" scope="props">
        <list-item :item="props.item" :index="props.index" @remove="index => removeItem(index)" />
      </template>
    </list>
  </div>
</template>

<script>
import List from './List'
import ListItem from './List/ListItem'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('todoList', ['items']),
    text: {
      get () { return this.$store.getters['todoList/text'] },
      set (value) { this.$store.commit('todoList/text', value) },
    },
  },
  methods: mapActions('todoList', ['loadItems', 'addItem', 'removeItem']),
  mounted () {
    this.loadItems()
  },
  components: {
    List,
    ListItem,
  },
}
</script>
