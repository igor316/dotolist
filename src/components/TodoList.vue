<template>
  <div>
    <create-todo-item-form @submit="addItem" />
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
import CreateTodoItemForm from './CreateTodoItemForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters('todoList', ['items']),
  methods: mapActions('todoList', ['loadItems', 'addItem', 'removeItem']),
  mounted () {
    this.loadItems()
  },
  components: {
    List,
    ListItem,
    CreateTodoItemForm,
  },
}
</script>
