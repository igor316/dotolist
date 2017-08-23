<template>
  <div :style="{ display: 'flex' }">
    <div class="w-100 text-left">
      <div>{{ item.text }}</div>
      <div class="minified">(created at {{ createdAt }})</div>
    </div>
    <div>
      <b-button size="sm" variant="danger" @click="$emit('remove')">
        <icon name="remove"/>
      </b-button>
    </div>
  </div>
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
.minified {
  font-size: 0.6em
}
</style>
