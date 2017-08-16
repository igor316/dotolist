<template>
  <span>
    <label v-if="label">{{ label }}</label>
    <input @input="handleInput($event.target.value)" :value="inputValue">
  </span>
</template>

<script>
export default {
  name: 'myinput',
  model: {
    prop: 'inputValue',
    event: 'change',
  },
  props: {
    inputValue: {
      type: String,
      default: 'Default',
    },
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput (value) {
      this.$emit('change', value)
    }
  },
}
</script>
