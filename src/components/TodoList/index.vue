<template>
  <div>
    <create-todo-item-form @submit="addItem" />
    <div v-if="!items.length" class="text-center">No items</div>
    <list v-else :items="items">
      <template slot="renderItems" scope="props">
        <list-item
          :item="props.item"
          @remove="removeItem(props.item.key)"
        />
      </template>
    </list>
  </div>
</template>

<script>
import List from '../List'
import ListItem from '../List/ListItem'
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
