<template>
  <form @submit.prevent="handleSubmit(values => $emit('submit', values))">
    <form-field :name="'text'">
      <template scope="formFieldProps">
        <common-form-field type="text" :formFieldProps="formFieldProps" />
      </template>
    </form-field>
    <b-button type="submit" variant="success">Add Item</b-button>
  </form>
</template>

<script>
import { createFormMixin } from '@/store/plugins/form'
import CommonFormField from '../common/CommonFormField'

const validate = values => {
  const errors = {}

  if (!values.text) {
    errors.text = 'Text required!'
  }

  return errors
}

const form = createFormMixin({
  formName: 'createTodoItem',
  validate,
  validateOnBlur: true,
})

export default {
  components: { CommonFormField },
  mixins: [form],
}
</script>
