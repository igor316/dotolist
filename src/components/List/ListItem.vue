<template>
  <li class="list-item">
    <div class="w-100 text-left">
      <div>{{ item.text }}</div>
      <div class="minified">(created at {{ createdAt }})</div>
    </div>
    <div>
      <b-button size="sm" variant="danger" @click="$emit('remove')">
        <icon name="remove"/>
      </b-button>
    </div>
  </li>
</template>

<script>
import moment from 'moment'

export default {
  props: ['item'],
  computed: {
    createdAt () {
      return moment.duration(moment().diff(moment(this.item.createdAt), 'minutes'), 'minutes').humanize()
    },
  },
}
</script>
<style scoped>
li {
  padding: 10px 0 10px;
  display: flex;
}

li + li {
  border-top: 1px solid black;
}

.minified {
  font-size: 0.6em
}

.list-item {
  transition: all .3s;
}
</style>
