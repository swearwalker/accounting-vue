<template>
  <form @submit.prevent class="form flex flex-col w-96 p-4">
    <input-component :label="$t('amount')" v-model="transaction.amount" class="mb-4" />
    <select-component
      v-model="transaction.categoryId"
      class="mb-4"
      :title="$t('category')"
      label="name"
      :options="categories"
      :reduce="(category) => category.id"
    />
    <select-component
      v-model="transaction.amountTypeId"
      class="mb-4"
      :title="$t('amountType')"
      :options="amountTypes"
      :reduce="(amountType) => amountType.id"
    />
    <date-picker-component v-model="transaction.date" :title="$t('date')" />
    <btn-component class="self-end" :title="$t('btn.create')" icon="fa-solid fa-check" @click="createTransaction" />
  </form>
</template>

<script>
export default {
  name: 'TransactionDialogComponent',
}
</script>

<script setup>
import { defineEmits } from 'vue'
import TransactionDialog from '@/components/dialogs/TransactionDialog'

const emits = defineEmits(['close'])

const { transaction, createTransaction, categories, amountTypes } = TransactionDialog(emits)
</script>

<style scoped lang="scss">
.form {
  &__wrapper {
    @apply flex flex-col;
  }
}
</style>
