<template>
  <div>
    <div class="text-center">Item list</div>
      <transition-group name="list" tag="ul">
        <li class="list-item" v-for="item in items" :key="item.key">
          <slot name="renderItems" :item="item" />
        </li>
      </transition-group>
  </div>
</template>

<script>
export default {
  props: ['items'],
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  width: 50%;
  margin: auto;
}

.list-item {
  transition: all .3s;
  padding: 10px 0 10px;
}

.list-item + .list-item {
  border-top: 1px solid black;
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
