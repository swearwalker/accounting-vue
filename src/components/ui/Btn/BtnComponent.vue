<template>
  <button class="btn" :class="['btn-' + color, 'justify-' + contentPosition, 'btn-' + size]" @click="click">
    <font-awesome-icon v-if="iconPosition === 'left' && title && icon" :icon="icon" class="btn__icon mr-2" />
    <font-awesome-icon v-if="iconPosition === 'center' || !title" :icon="icon" class="btn__icon" />
    <span v-if="iconPosition !== 'center' && title" class="btn__title">{{ title }}</span>
    <font-awesome-icon v-if="iconPosition === 'right' && title && icon" :icon="icon" class="btn__icon ml-2" />
  </button>
</template>

<script>
export default {
  name: 'BtnComponent',
}
</script>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  title: {
    type: String,
    required: false,
  },
  contentPosition: {
    type: String,
    default: 'center',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'default',
  },
  icon: {
    type: String,
    required: false,
  },
  iconPosition: {
    type: String,
    default: 'left',
  },
})

const emits = defineEmits(['click'])

const click = () => emits('click')
</script>

<style scoped lang="scss"></style>
