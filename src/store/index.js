import { createStore } from 'vuex'

import categories from '@/store/categories'
import transactions from '@/store/transactions'
import amountTypes from '@/store/amountTypes'
import transactionTypes from '@/store/transactionTypes'

export default createStore({
  modules: {
    categories,
    transactions,
    amountTypes,
    transactionTypes,
  },
})
