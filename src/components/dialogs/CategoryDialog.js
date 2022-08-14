import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'
import { getData, setData } from '@/helpers/localStorage'
import generateId from '@/helpers/generateId'
import { useStore } from 'vuex'

export default (emits) => {
  const store = useStore()
  const toast = useToast()
  const defaultCategory = {
    id: generateId(),
    name: '',
    transactionTypeId: null,
  }
  const category = ref(defaultCategory)

  const transactionTypes = computed(() => store.getters['transactionTypes/allTransactionTypes'])

  const createCategory = () => {
    const categories = getData('categories')
    categories.push(category.value)
    setData('categories', categories)
    store.dispatch('categories/getCategories')
    emits('close')
    toast.success('Successfully created!')
  }

  return {
    category,
    transactionTypes,
    createCategory,
  }
}
