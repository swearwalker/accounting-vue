<template>
  <form @submit.prevent class="form flex flex-col w-96 p-4">
    <input-component
      :label="titles.amount"
      v-model="transaction.amount"
      class="mb-4"
    />
    <div class="form__wrapper mb-4">
      <label class="form__label label">{{ titles.category }}</label>
      <drop-down-component
        label="name"
        :items="categories"
        :value="transaction.categoryId"
        @change="setCategoryId"
      />
    </div>
    <div class="form__wrapper mb-4">
      <label class="form__label label">{{ titles.amountType }}</label>
      <drop-down-component
        :items="amountTypes"
        :value="transaction.amountTypeId"
        @change="setAmountTypeId"
      />
    </div>
    <div class="form__wrapper mb-4">
      <label class="form__label label">{{ titles.date }}</label>
      <DatePicker
        :enable-time-picker="false"
        auto-apply
        v-model="transaction.date"
        format="MM/dd/yyyy"
      />
    </div>
    <button
      @click="createTransaction"
      class="form__btn btn btn-primary self-end bg-blue-500"
    >
      {{ titles.btn.create }}
    </button>
  </form>
</template>

<script>
export default {
  name: 'TransactionDialogComponent',
}
</script>

<script setup>
import { defineEmits } from 'vue'
import titles from '@/mocks/titles'
import TransactionDialog from '@/components/dialogs/TransactionDialog'

const emits = defineEmits(['close'])

const {
  transaction,
  setCategoryId,
  setAmountTypeId,
  createTransaction,
  categories,
  amountTypes,
} = TransactionDialog(emits)
</script>

<style scoped lang="scss">
.form {
  &__wrapper {
    @apply flex flex-col;
  }
}
</style>
