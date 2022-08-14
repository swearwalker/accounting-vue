import { getData } from '@/helpers/localStorage'

export default {
  getTransactions({ commit }) {
    const list = getData('transactions')
    commit('setTransactions', list)
  },
}
