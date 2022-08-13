import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { getData, setData } from '@/helpers/localStorage'
import generateId from '@/helpers/generateId'

export default (emits) => {
  const toast = useToast()
  const defaultCategory = {
    id: generateId(),
    name: '',
    transactionTypeId: null,
  }
  const category = ref(defaultCategory)

  const setTransactionTypeId = (item) => {
    category.value.transactionTypeId = item.id
  }

  const transactionTypes = getData('transactionTypes')

  const createCategory = () => {
    const categories = getData('categories')
    categories.push(category.value)
    setData('categories', categories)
    emits('close')
    toast.success('Successfully created!')
  }

  return {
    category,
    transactionTypes,
    setTransactionTypeId,
    createCategory,
  }
}
