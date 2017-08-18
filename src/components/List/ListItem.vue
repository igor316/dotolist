<template>
  <li>
    <div>{{ item.text }}</div>
    <div class="minified">(created at {{ item.createdAt }})</div>
  </li>
</template>

<script>
export default {
  props: ['item'],
}
</script>
<style scoped>
li {
  padding: 10px 0 10px;
}

li + li {
  border-top: 1px solid black;
}

.minified {
  font-size: 0.6em
}
</style>
