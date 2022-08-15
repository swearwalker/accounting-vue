<template>
  <div class="wrapper flex flex-col">
    <label class="wrapper__label label">{{ title }}</label>
    <date-picker
      class="wrapper__date-picker w-full"
      :class="customClasses"
      :format="format"
      :clearable="clearable"
      :disabled="disabled"
      :auto-apply="autoApply"
      :range="range"
      :enable-time-picker="enableTimePicker"
      :modelValue="modelValue"
      @update:modelValue="updateValue"
    />
  </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker'

export default {
  name: 'DatePickerComponent',
  components: {
    DatePicker,
  },
}
</script>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  title: {
    type: String,
    required: false,
  },
  range: {
    type: Boolean,
    default: false,
  },
  autoApply: {
    type: Boolean,
    default: false,
  },
  enableTimePicker: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: String,
    default: 'center',
  },
  format: {
    type: String,
    default: 'MM/dd/yyyy',
  },
  modelValue: {},
})

const emits = defineEmits(['update:modelValue'])

const updateValue = (data) => {
  emits('update:modelValue', data)
}
</script>

<style scoped lang="scss"></style>
