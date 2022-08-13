<template>
  <div v-click-outside="closeMenu" class="drop-down relative">
    <button @click="toggleMenu" class="drop-down__btn">
      <span class="drop-down__label">{{ currentLabel[props.label] }}</span>
      <font-awesome-icon
        icon="fa-solid fa-angle-down"
        class="drop-down__icon text-blue-500 cursor-pointer"
        :class="{ 'rotate-180': show }"
      />
    </button>
    <ul v-if="items.length > 0 && show" class="drop-down__list">
      <li
        v-for="(item, index) in items"
        @click="changeValue(item)"
        :key="item.id ? item.id : index"
        class="drop-down__item"
      >
        {{ item[props.label] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropDownComponent',
}
</script>

<script setup>
import { defineProps, defineEmits } from 'vue'

import DropDown from '@/components/ui/DropDown/DropDown'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: () => 'label',
  },
  value: {
    type: [String, Number, Object, null],
    required: true,
  },
})
const emits = defineEmits(['change'])

const { show, currentLabel, toggleMenu, closeMenu, changeValue } = DropDown(
  props,
  emits
)
</script>

<style scoped lang="scss"></style>
