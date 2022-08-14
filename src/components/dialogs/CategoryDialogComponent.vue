<template>
  <form @submit.prevent class="form flex flex-col w-96 p-4">
    <input-component :label="$t('name')" v-model="category.name" class="mb-4" />
    <div class="form__wrapper mb-4">
      <label class="form__label label">{{ $t('transactions') }}</label>
      <v-select
        :reduce="(transactionType) => transactionType.id"
        v-model="category.transactionTypeId"
        :options="transactionTypes"
      />
    </div>
    <button @click="createCategory" class="form__btn btn btn-primary self-end bg-blue-500">
      {{ $t('btn.create') }}
    </button>
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
