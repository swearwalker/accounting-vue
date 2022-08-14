<template>
  <header class="header bg-white w-full px-4 py-2 shadow fixed top-0 z-30">
    <div class="container flex items-center">
      <btn-component class="mr-4" :title="$t('category')" icon="fa-solid fa-plus" @click="openCategoryDialog" />
      <btn-component :title="$t('transaction')" icon="fa-solid fa-plus" @click="openTransactionDialog" />
    </div>
  </header>
  <dialog-component :title="$t('dialog.category.create')" v-if="showingCategoryDialog" @close="closeCategoryDialog">
    <CategoryDialogComponent @close="closeCategoryDialog" />
  </dialog-component>
  <dialog-component
    :title="$t('dialog.transaction.create')"
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

const showingCategoryDialog = ref(false)
const showingTransactionDialog = ref(false)

const openCategoryDialog = () => (showingCategoryDialog.value = true)
const closeCategoryDialog = () => (showingCategoryDialog.value = false)
const openTransactionDialog = () => (showingTransactionDialog.value = true)
const closeTransactionDialog = () => (showingTransactionDialog.value = false)
</script>

<style scoped lang="scss"></style>
