<template>
  <div v-click-outside="closeMenu" class="drop-down relative">
    <button @click="toggleMenu" class="drop-down__btn">
      <span class="drop-down__label">{{
        props.static ? props.label : currentLabel[props.label]
      }}</span>
      <font-awesome-icon
        icon="fa-solid fa-angle-down"
        class="drop-down__icon text-blue-500 cursor-pointer"
        :class="{ 'rotate-180': show }"
      />
    </button>
    <ul
      v-if="items.length > 0 && show && !$slots.default"
      class="drop-down__list"
    >
      <li
        v-for="(item, index) in items"
        @click="changeValue(item)"
        :key="item.id ? item.id : index"
        class="drop-down__item"
      >
        {{ item[props.label] }}
      </li>
    </ul>
    <div v-else-if="$slots.default && show" class="drop-down__content">
      <slot />
      <button
        v-if="props.closeBtn"
        @click="closeMenu"
        class="btn btn-primary w-full"
      >
        {{ titles.btn.submit }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDownComponent',
}
</script>

<script setup>
import { defineProps, defineEmits } from 'vue'
import titles from '@/mocks/titles'

import DropDown from '@/components/ui/DropDown/DropDown'

const props = defineProps({
  static: {
    type: Boolean,
    default: false,
  },
  closeBtn: {
    type: Boolean,
    default: false,
  },
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
    default: null,
  },
})
const emits = defineEmits(['change'])

const { show, currentLabel, toggleMenu, closeMenu, changeValue } = DropDown(
  props,
  emits
)
</script>

<style scoped lang="scss"></style>
