<template>
  <main class="main">
    <div class="container">
      <filter-component class="flex items-end mb-16">
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
        <div class="wrapper mx-4">
          <label class="wrapper__label label">{{ $t('categories') }}</label>
          <v-select
            class="w-72"
            v-model="checkedCategories"
            multiple
            label="name"
            :options="categories"
          />
        </div>
        <div class="form__wrapper">
          <label class="form__label label">{{ $t('amountType') }}</label>
          <v-select
            class="w-72"
            multiple
            :reduce="(amountType) => amountType.id"
            v-model="amountTypeIds"
            :options="amountTypes"
          />
        </div>
        <button @click="clearTable" class="btn btn-danger ml-auto">
          {{ $t('btn.clear') }}
        </button>
        <button @click="generateTable" class="btn btn-primary ml-4">
          {{ $t('btn.submit') }}
        </button>
      </filter-component>
      <table-component
        v-if="showingTable"
        :header="headerDates"
        :data="tableData"
        :title="$t('incomeTable')"
      />
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
import { getData } from '@/helpers/localStorage'
import { generateDatesRange, generateTableData } from '@/helpers/table'

const store = useStore()
const showingTable = ref(false)
const showTable = () => (showingTable.value = true)
const hideTable = () => (showingTable.value = false)

const dateRange = ref(null)
const amountTypeIds = ref(null)
const tableData = ref([])
const amountTypes = ref([])
const headerDates = ref()
const fullDates = ref([])
const categories = computed(() => store.getters['categories/allCategories'])
const checkedCategories = ref([])
const transactions = ref([])

const getCategories = () => {
  store.dispatch('categories/getCategories')
}
const getTransactions = () => (transactions.value = getData('transactions'))
const getAmountTypes = () => (amountTypes.value = getData('amountTypes'))

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

  tableData.value = generateTableData(
    checkedCategories,
    fullDates,
    transactions
  )

  showTable()
}

const clearTable = () => {
  hideTable()

  dateRange.value = null
  checkedCategories.value = []
}

getCategories()

getTransactions()

getAmountTypes()
</script>

<style lang="scss"></style>
