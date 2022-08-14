<template>
  <form @submit.prevent class="form flex flex-col w-96 p-4">
    <input-component :label="$t('name')" v-model="category.name" class="mb-4" />
    <select-component
      v-model="category.transactionTypeId"
      class="mb-4"
      :title="$t('transactionType')"
      :reduce="(transactionType) => transactionType.id"
      :options="transactionTypes"
    />
    <btn-component class="self-end" :title="$t('btn.create')" icon="fa-solid fa-check" @click="createCategory" />
  </form>
</template>

<script>
export default {
  name: 'CategoryDialogComponent',
}
</script>

<script setup>
import { defineEmits } from 'vue'
import CategoryDialog from '@/components/dialogs/CategoryDialog'

const emits = defineEmits(['close'])

const { category, createCategory, transactionTypes } = CategoryDialog(emits)
</script>

<style scoped lang="scss">
.form {
  &__wrapper {
    @apply flex flex-col;
  }
}
</style>
