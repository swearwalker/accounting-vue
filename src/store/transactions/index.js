import state from '@/store/transactions/state'
import mutations from '@/store/transactions/mutations'
import actions from '@/store/transactions/actions'
import getters from '@/store/transactions/getters'

export default {
  namespaced: true,
  state: state,
  mutations,
  actions,
  getters,
}
