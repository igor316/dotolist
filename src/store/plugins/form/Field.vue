<template>
  <div>
    <slot
      :onChange="onChange"
      :onBlur="onBlur"
      :onFocus="onFocus"
      :value="value"
      :meta="meta"
      :fieldName="name"
      :form="$parent.formName"
    />
  </div>
</template>

<script>
const stringReqRule = {
  type: String,
  required: true,
}

export default {
  name: 'Field',
  props: {
    name: stringReqRule,
  },
  computed: {
    value () {
      return this.$store.getters[`vuex-form/${this.$parent.formName}/value`](this.name)
    },
    meta () {
      return this.$store.getters[`vuex-form/${this.$parent.formName}/meta`](this.name)
    },
  },
  methods: {
    onChange (value) {
      this.$store.commit(`vuex-form/${this.$parent.formName}/change`, { name: this.name, value })
    },
    onBlur () {
      this.$store.dispatch(`vuex-form/${this.$parent.formName}/blur`, { name: this.name })
    },
    onFocus () {
      this.$store.commit(`vuex-form/${this.$parent.formName}/focus`, { name: this.name })
    },
  },
  beforeCreate () {
    if (!this.$parent.__type === 'vuex-form') throw new Error('form-field must be only inside vuex-form-mixin-used component!')
  },
  created () {
    this.$store.commit(`vuex-form/${this.$parent.formName}/registerField`, { name: this.name })
  },
}
</script>
