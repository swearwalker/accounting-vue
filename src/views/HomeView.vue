<template>
  <main class="main">
    <div class="container">
      <filter-component class="flex items-end mb-16">
        <select-component
          v-model="checkedCategories"
          class="w-full mb-4"
          :title="$t('categories')"
          multiple
          label="name"
          :options="categories"
        />
        <div class="wrapper">
          <label class="wrapper__label label">{{ $t('dateRange') }}</label>
          <date-picker-component
            class="w-72"
            :enable-time-picker="false"
            auto-apply
            range
            v-model="dateRange"
            format="MM/dd/yyyy"
          />
        </div>
        <select-component
          v-model="amountTypeIds"
          class="w-64 mx-4"
          :title="$t('amountType')"
          :reduce="(amountType) => amountType.id"
          multiple
          :options="amountTypes"
        />
        <select-component
          v-model="transactionTypeIds"
          class="w-64"
          :title="$t('transactionType')"
          :reduce="(transactionType) => transactionType.id"
          :options="transactionTypes"
        />
        <select-component
          v-model="transactionTypeIds"
          class="w-64"
          :title="$t('transactionType')"
          :reduce="(transactionType) => transactionType.id"
          multiple
          :options="transactionTypes"
        />
        <btn-component
          class="ml-auto mr-4"
          :title="$t('btn.clear')"
          color="danger"
          icon="fa-solid fa-xmark"
          @click="clearTable"
        />
        <btn-component :title="$t('btn.submit')" icon="fa-solid fa-check" @click="generateTable" />
      </filter-component>
      <table-component v-if="showingTable" :header="headerDates" :data="tableData" :title="$t('incomeTable')" />
    </div>
  </main>
</template>

<script>
import FilterComponent from '@/components/common/FilterComponent'

export default {
  name: 'HomeView',
  components: {
    FilterComponent,
  },
}
</script>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { generateDatesRange, generateTableData } from '@/helpers/table'

const store = useStore()
const showingTable = ref(false)
const showTable = () => (showingTable.value = true)
const hideTable = () => (showingTable.value = false)

const dateRange = ref(null)
const amountTypeIds = ref(null)
const transactionTypeIds = ref(null)
const tableData = ref(null)
const headerDates = ref()
const fullDates = ref(null)
const checkedCategories = ref(null)
const categories = computed(() => store.getters['categories/allCategories'])
const transactions = computed(() => store.getters['transactions/allTransactions'])
const amountTypes = computed(() => store.getters['amountTypes/allAmountTypes'])
const transactionTypes = computed(() => store.getters['transactionTypes/allTransactionTypes'])

const getCategories = () => store.dispatch('categories/getCategories')
const getTransactions = () => store.dispatch('transactions/getTransactions')
const getAmountTypes = () => store.dispatch('amountTypes/getAmountTypes')
const getTransactionTypes = () => store.dispatch('transactionTypes/getTransactionTypes')

const generateTable = () => {
  getCategories()
  getTransactions()

  const { generatedFullDates, generatedHeaderDates } = generateDatesRange(
    {
      startDate: dateRange.value[0],
      endDate: dateRange.value[1],
    },
    'Name'
  )

  fullDates.value = generatedFullDates
  headerDates.value = generatedHeaderDates
  tableData.value = generateTableData(checkedCategories, fullDates, transactions)

  showTable()
}

const clearTable = () => {
  hideTable()

  dateRange.value = null
  checkedCategories.value = null
  amountTypeIds.value = null
}

getCategories()
getTransactions()
getAmountTypes()
getTransactionTypes()
</script>

<style lang="scss"></style>
