import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import { getData, setData } from '@/helpers/localStorage'
import generateId from '@/helpers/generateId'

export default (emits) => {
  const store = useStore()
  const toast = useToast()
  const defaultTransaction = {
    id: generateId(),
    date: new Date(),
    amount: '0',
    categoryId: null,
    amountTypeId: null,
  }
  const transaction = ref(defaultTransaction)

  const categories = computed(() => store.getters['categories/allCategories'])
  const amountTypes = computed(() => store.getters['amountTypes/allAmountTypes'])

  const createTransaction = () => {
    const transactions = getData('transactions')

    transactions.push(transaction.value)
    setData('transactions', transactions)
    emits('close')
    toast.success('Successfully created!')
  }

  return {
    transaction,
    categories,
    amountTypes,
    createTransaction,
  }
}
