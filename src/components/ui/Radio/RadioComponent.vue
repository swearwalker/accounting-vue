<template>
  <div class="wrapper flex items-center">
    <input
      type="radio"
      :value="props.value"
      @input="changeModelValue"
      class="form__input input"
    />
    <label class="form__label label ml-4">{{ props.label }}</label>
  </div>
</template>

<script>
export default {
  name: 'RadioComponent',
}
</script>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: String,
  value: Number,
  modelValue: Number,
})

const emits = defineEmits(['update:modelValue'])

const changeModelValue = () => emits('update:modelValue', props.value)
</script>

<style scoped lang="scss"></style>
