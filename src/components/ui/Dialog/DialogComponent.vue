<template>
  <div class="dialog__overlay">
    <div @click.once="closeDialog" class="dialog__bg"></div>
    <div class="dialog">
      <div class="dialog__header">
        <h2 class="dialog__title">{{ props.title }}</h2>
        <font-awesome-icon @click="closeDialog" icon="fa-solid fa-xmark" class="text-red-500 cursor-pointer" />
      </div>
      <slot></slot>
      <div v-if="$slots.actions" class="dialog__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogComponent',
}
</script>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
})

const emits = defineEmits(['close'])

const closeDialog = () => emits('close')
</script>

<style scoped lang="scss"></style>
