<template>
  <div class="container">
    <span>Item list</span>
    <ul>
      <slot name="renderItem" v-for="(item, index) in items" :item="item" :index="index">
      </slot>
    </ul>
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
</style>
