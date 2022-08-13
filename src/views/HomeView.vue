<template>
  <main class="main">
    <div class="container">
      <button
        @click="openCategoryDialog"
        class="btn btn-primary self-end bg-blue-500"
      >
        {{ titles.category }}
      </button>
      <button
        @click="openTransactionDialog"
        class="btn btn-primary self-end bg-blue-500"
      >
        {{ titles.transaction }}
      </button>
      <DatePicker
        :enable-time-picker="false"
        auto-apply
        range
        :modelValue="dateRange"
        @update:modelValue="getDatesInRange"
        format="MM/dd/yyyy"
      />
      <ul v-for="category in categories" :key="category.id" class="list">
        <li class="list__item">
          <input
            type="checkbox"
            :value="category"
            v-model="checkedCategories"
          />
          <label class="list__label">{{ category.name }}</label>
        </li>
      </ul>
      <DialogComponent
        :title="titles.dialog.category.create"
        v-if="showingCategoryDialog"
        @close="closeCategoryDialog"
      >
        <CategoryDialogComponent @close="closeAfterCreateCategory" />
      </DialogComponent>
      <DialogComponent
        :title="titles.dialog.transaction.create"
        v-if="showingTransactionDialog"
        @close="closeTransactionDialog"
      >
        <TransactionDialogComponent @close="closeAfterCreateTransaction" />
      </DialogComponent>
      <ul class="list flex flex-col">
        <li class="list__item font-bold">{{ titles.categories }}</li>
        <li
          v-for="category in categories"
          :key="category.id"
          class="list__item"
        >
          {{ category }}
        </li>
      </ul>
      <ul class="list flex flex-col">
        <li class="list__item font-bold">{{ titles.transactions }}</li>
        <li
          v-for="transaction in transactions"
          :key="transaction.id"
          class="list__item"
        >
          {{ transaction }}
        </li>
      </ul>
      <table-component
        v-if="showingTable"
        :header="headerDates"
        :data="tableData"
        :title="titles.incomeTable"
      />
    </div>
  </main>
</template>

<script>
import CategoryDialogComponent from '@/components/dialogs/CategoryDialogComponent'
import TransactionDialogComponent from '@/components/dialogs/TransactionDialogComponent'
import DialogComponent from '@/components/ui/Dialog/DialogComponent'

export default {
  name: 'HomeView',
  components: {
    CategoryDialogComponent,
    TransactionDialogComponent,
    DialogComponent,
  },
}
</script>

<script setup>
import { ref } from 'vue'
import titles from '@/mocks/titles'
import { getData } from '@/helpers/localStorage'
import { generateDatesRange, generateTableData } from '@/helpers/table'

const showingTable = ref(false)
const showingCategoryDialog = ref(false)
const showingTransactionDialog = ref(false)
const showTable = () => (showingTable.value = true)
const openCategoryDialog = () => (showingCategoryDialog.value = true)
const closeCategoryDialog = () => (showingCategoryDialog.value = false)
const openTransactionDialog = () => (showingTransactionDialog.value = true)
const closeTransactionDialog = () => (showingTransactionDialog.value = false)

const dateRange = ref(null)
const tableData = ref([])
const headerDates = ref()
const fullDates = ref([])
const categories = ref([])
const checkedCategories = ref([])

const transactions = ref([])

const getCategories = () => (categories.value = getData('categories'))
const getTransactions = () => (transactions.value = getData('transactions'))

const getDatesInRange = (dates) => {
  const { generatedFullDates, generatedHeaderDates } = generateDatesRange(
    {
      startDate: dates[0],
      endDate: dates[1],
    },
    'Name'
  )

  fullDates.value = generatedFullDates
  headerDates.value = generatedHeaderDates

  dateRange.value = dates

  tableData.value = generateTableData(
    checkedCategories,
    fullDates,
    transactions
  )

  showTable()
}

getCategories()

getTransactions()

const closeAfterCreateCategory = () => {
  closeCategoryDialog()
  getCategories()
}

const closeAfterCreateTransaction = () => {
  closeTransactionDialog()
  getTransactions()
}
</script>

<style lang="scss"></style>
