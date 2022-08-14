import state from '@/store/transactionTypes/state'
import mutations from '@/store/transactionTypes/mutations'
import actions from '@/store/transactionTypes/actions'
import getters from '@/store/transactionTypes/getters'

export default {
  namespaced: true,
  state: state,
  mutations,
  actions,
  getters,
}
