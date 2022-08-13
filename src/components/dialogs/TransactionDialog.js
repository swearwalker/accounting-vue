import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { getData, setData } from '@/helpers/localStorage'
import generateId from '@/helpers/generateId'

export default (emits) => {
  const toast = useToast()
  const defaultTransaction = {
    id: generateId(),
    date: new Date(),
    amount: 0,
    categoryId: null,
    amountTypeId: null,
  }
  const transaction = ref(defaultTransaction)

  const setCategoryId = (item) => {
    transaction.value.categoryId = item.id
  }

  const setAmountTypeId = (item) => {
    transaction.value.amountTypeId = item.id
  }

  const categories = getData('categories')

  const amountTypes = getData('amountTypes')

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
    setCategoryId,
    setAmountTypeId,
    createTransaction,
  }
}
