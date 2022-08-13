<template>
  <header class="header bg-white w-full h-12 px-4 py-2 shadow fixed top-0 z-30">
    <div class="container flex items-center">
      <button
        @click="openCategoryDialog"
        class="btn btn-primary self-end bg-blue-500 mr-4"
      >
        {{ titles.category }}
      </button>
      <button
        @click="openTransactionDialog"
        class="btn btn-primary self-end bg-blue-500"
      >
        {{ titles.transaction }}
      </button>
    </div>
  </header>
  <dialog-component
    :title="titles.dialog.category.create"
    v-if="showingCategoryDialog"
    @close="closeCategoryDialog"
  >
    <CategoryDialogComponent @close="closeCategoryDialog" />
  </dialog-component>
  <dialog-component
    :title="titles.dialog.transaction.create"
    v-if="showingTransactionDialog"
    @close="closeTransactionDialog"
  >
    <TransactionDialogComponent @close="closeTransactionDialog" />
  </dialog-component>
</template>

<script>
import CategoryDialogComponent from '@/components/dialogs/CategoryDialogComponent'
import TransactionDialogComponent from '@/components/dialogs/TransactionDialogComponent'

export default {
  name: 'HeaderComponent',
  components: {
    CategoryDialogComponent,
    TransactionDialogComponent,
  },
}
</script>

<script setup>
import { ref } from 'vue'
import titles from '@/mocks/titles'

const showingCategoryDialog = ref(false)
const showingTransactionDialog = ref(false)

const openCategoryDialog = () => (showingCategoryDialog.value = true)
const closeCategoryDialog = () => (showingCategoryDialog.value = false)
const openTransactionDialog = () => (showingTransactionDialog.value = true)
const closeTransactionDialog = () => (showingTransactionDialog.value = false)
</script>

<style scoped lang="scss"></style>
