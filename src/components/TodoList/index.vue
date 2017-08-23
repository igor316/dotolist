<template>
  <div>
    <create-todo-item-form @submit="addItem" />
    <div v-if="!items.length" class="text-center">No items</div>
    <list v-else>
      <template slot="renderItems" scope="props">
        <transition-group name="list" tag="ul">
          <list-item
            v-for="item in items"
            :key="item.key"
            :item="item"
            @remove="removeItem(item.key)"
          />
        </transition-group>
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

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  width: 50%;
  margin: auto;
}

.list-enter-active, .list-leave-active {
  transition: all .3s;
}

.list-leave-active {
  position: absolute;
}

.list-enter {
  opacity: 0;
  transform: translateY(57px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
