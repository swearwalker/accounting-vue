import { getData } from '@/helpers/localStorage'

export default {
  getTransactionTypes({ commit }) {
    const list = getData('transactionTypes')
    commit('setTransactionTypes', list)
  },
}
