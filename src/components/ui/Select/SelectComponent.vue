<template>
  <div class="wrapper flex flex-col">
    <label class="wrapper__label label">{{ title }}</label>
    <v-select
      class="wrapper__select w-full"
      :class="customClasses"
      :label="label"
      :disabled="disabled"
      :multiple="multiple"
      :clearable="clearable"
      :close-on-select="closeOnSelect"
      :searchable="searchable"
      :deselect-from-dropdown="deselectFromDropdown"
      :reduce="reduce"
      :modelValue="modelValue"
      :options="options"
      @update:modelValue="updateValue"
    />
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'SelectComponent',
  components: {
    vSelect,
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
  multiple: {
    type: Boolean,
    default: false,
  },
  deselectFromDropdown: {
    type: Boolean,
    default: true,
  },
  closeOnSelect: {
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
  searchable: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: String,
    default: 'center',
  },
  label: {
    type: String,
    default: 'label',
  },
  modelValue: {},
  options: {
    type: Array,
    default: () => [],
  },
  reduce: {
    type: Function,
    default: (e) => e,
  },
})

const emits = defineEmits(['update:modelValue'])

const updateValue = (data) => {
  console.info(data)
  emits('update:modelValue', data)
}
</script>

<style scoped lang="scss"></style>
