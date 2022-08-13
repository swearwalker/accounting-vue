<template>
  <main class="main">
    <div class="container">
      <filter-component class="flex items-center mb-16">
        <date-picker-component
          class="w-72 mr-4"
          :enable-time-picker="false"
          auto-apply
          range
          v-model="dateRange"
          format="MM/dd/yyyy"
        />
        <drop-down-component
          class="w-72"
          close-btn
          static
          :label="titles.categories"
        >
          <ul class="list w-full mb-2">
            <li
              v-for="category in categories"
              :key="category.id"
              class="list__item px-2 py-1 flex items-center cursor-pointer hover:bg-blue-500 hover:text-white rounded-md"
            >
              <input
                :id="category.id"
                type="checkbox"
                :value="category"
                v-model="checkedCategories"
                class="mr-2 cursor-pointer"
              />
              <label
                :for="category.id"
                class="list__label flex-1 cursor-pointer"
              >
                {{ category.name }}
              </label>
            </li>
          </ul>
        </drop-down-component>
        <button @click="generateTable" class="btn btn-primary ml-auto">
          {{ titles.btn.submit }}
        </button>
      </filter-component>
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
import FilterComponent from '@/components/common/FilterComponent'

export default {
  name: 'HomeView',
  components: {
    FilterComponent,
  },
}
</script>

<script setup>
import { ref } from 'vue'
import titles from '@/mocks/titles'
import { getData } from '@/helpers/localStorage'
import { generateDatesRange, generateTableData } from '@/helpers/table'

const showingTable = ref(false)
const showTable = () => (showingTable.value = true)

const dateRange = ref(null)
const tableData = ref([])
const headerDates = ref()
const fullDates = ref([])
const categories = ref([])
const checkedCategories = ref([])

const transactions = ref([])

const getCategories = () => (categories.value = getData('categories'))
const getTransactions = () => (transactions.value = getData('transactions'))

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

getCategories()

getTransactions()
</script>

<style lang="scss"></style>
