<template>
  <div>
    <input
      v-if="type === 'text'"
      v-model="value"
      @blur="formFieldProps.onBlur"
      @focus="formFieldProps.onFocus"
      v-focus.lazy="formFieldProps.meta.focus"
    />
    <input
      v-else-if="type === 'password'"
      type="password"
      v-model="value"
      @blur="formFieldProps.onBlur"
      @focus="formFieldProps.onFocus"
      v-focus.lazy="formFieldProps.meta.focus"
    />
    <input
      v-else-if="type === 'email'"
      type="email"
      v-model="value"
      @blur="formFieldProps.onBlur"
      @focus="formFieldProps.onFocus"
      v-focus.lazy="formFieldProps.meta.focus"
    />
    <span v-if="formFieldProps.meta.error !== null">{{ formFieldProps.meta.error }}</span>
  </div>
</template>

<script>
import { focus } from 'vue-focus'

export default {
  props: {
    type: { type: String, required: true },
    formFieldProps: {
      validator (value) {
        return !!value
      },
    },
  },
  computed: {
    value: {
      get () { return this.formFieldProps.value },
      set (value) { this.formFieldProps.onChange(value) },
    },
  },
  directives: { focus },
}
</script>
