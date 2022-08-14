<template>
  <div class="wrapper flex flex-col w-full">
    <h2 class="title text-2xl font-bold mb-2">{{ props.title }}</h2>
    <table class="acc-table table-fixed border-collapse overflow-x-auto block w-full">
      <thead class="acc-table__header">
        <tr class="acc-table__row">
          <th v-for="(headerItem, index) in header" :key="index + headerItem" class="acc-table__cell border">
            {{ headerItem }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="(subItem, subIndex) in item" :key="index * subIndex" class="border">
            {{ subItem }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
}
</script>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  header: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped lang="scss">
.acc-table {
  &__cell {
    min-width: 6rem;

    &:first-child {
      min-width: 16rem;
    }
  }
}
</style>
