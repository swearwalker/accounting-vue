import state from '@/store/amountTypes/state'
import mutations from '@/store/amountTypes/mutations'
import actions from '@/store/amountTypes/actions'
import getters from '@/store/amountTypes/getters'

export default {
  namespaced: true,
  state: state,
  mutations,
  actions,
  getters,
}
