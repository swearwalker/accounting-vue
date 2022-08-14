import { getData } from '@/helpers/localStorage'

export default {
  getAmountTypes({ commit }) {
    const list = getData('amountTypes')
    commit('setAmountTypes', list)
  },
}
