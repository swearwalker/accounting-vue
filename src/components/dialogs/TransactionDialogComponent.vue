<template>
  <form @submit.prevent class="form flex flex-col w-96 p-4">
    <input-component :label="$t('amount')" v-model="transaction.amount" class="mb-4" />
    <div class="form__wrapper mb-4">
      <label class="form__label label">{{ $t('category') }}</label>
      <v-select
        label="name"
        :reduce="(category) => category.id"
        v-model="transaction.categoryId"
        :options="categories"
      />
    </div>
    <div class="form__wrapper mb-4">
      <label class="form__label label">{{ $t('amountType') }}</label>
      <v-select :reduce="(amountType) => amountType.id" v-model="transaction.amountTypeId" :options="amountTypes" />
    </div>
    <div class="form__wrapper mb-4">
      <label class="form__label label">{{ $t('date') }}</label>
      <date-picker-component :enable-time-picker="false" auto-apply v-model="transaction.date" format="MM/dd/yyyy" />
    </div>
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
