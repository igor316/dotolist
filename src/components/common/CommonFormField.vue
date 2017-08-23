<template>
  <div class="form-group">
    <label v-if="label" :for="`control-${formFieldProps.form}-${formFieldProps.fieldName}`">{{ label }}</label>
    <input
      class="form-control"
      v-if="type === 'text'"
      v-model="value"
      @blur="formFieldProps.onBlur"
      @focus="formFieldProps.onFocus"
      v-focus.lazy="formFieldProps.meta.focus"
      :aria-describedby="`tooltip-${formFieldProps.form}-${formFieldProps.fieldName}`"
      :id="`control-${formFieldProps.form}-${formFieldProps.fieldName}`"
    />
    <input
      class="form-control"
      v-else-if="type === 'password'"
      type="password"
      v-model="value"
      @blur="formFieldProps.onBlur"
      @focus="formFieldProps.onFocus"
      v-focus.lazy="formFieldProps.meta.focus"
      :aria-describedby="`tooltip-${formFieldProps.form}-${formFieldProps.fieldName}`"
      :id="`control-${formFieldProps.form}-${formFieldProps.fieldName}`"
    />
    <input
      class="form-control"
      v-else-if="type === 'email'"
      type="email"
      v-model="value"
      @blur="formFieldProps.onBlur"
      @focus="formFieldProps.onFocus"
      v-focus.lazy="formFieldProps.meta.focus"
      :aria-describedby="`tooltip-${formFieldProps.form}-${formFieldProps.fieldName}`"
      :id="`control-${formFieldProps.form}-${formFieldProps.fieldName}`"
    />
    <small
      v-if="formFieldProps.meta.error !== null"
      :style="{ color: 'red !important' }"
      class="form-text text-muted"
      :id="`tooltip-${formFieldProps.form}-${formFieldProps.fieldName}`">
        {{ formFieldProps.meta.error }}
    </small>
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
    label: { type: String },
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
