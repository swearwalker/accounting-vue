<template>
  <div class="wrapper flex flex-col">
    <label class="form__label label">{{ label }}</label>
    <input :type="type" :value="modelValue" @input="changeModelValue" class="form__input input" />
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

const changeModelValue = (event) => {
  const value = props.type === 'number' ? Number(event.target.value) : event.target.value
  emits('update:modelValue', value)
}
</script>

<style scoped lang="scss"></style>
