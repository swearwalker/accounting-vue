<template>
  <div class="wrapper flex flex-col">
    <label class="form__label label">{{ props.label }}</label>
    <input
      :type="type"
      :value="props.modelValue"
      @input="changeModelValue"
      class="form__input input"
    />
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
}
</script>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: String,
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
})

const emits = defineEmits(['update:modelValue'])

const changeModelValue = (event) =>
  emits(
    'update:modelValue',
    props.type === 'number' ? Number(event.target.value) : event.target.value
  )
</script>

<style scoped lang="scss"></style>
