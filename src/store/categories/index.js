import state from '@/store/categories/state'
import mutations from '@/store/categories/mutations'
import actions from '@/store/categories/actions'
import getters from '@/store/categories/getters'

export default {
  namespaced: true,
  state: state,
  mutations,
  actions,
  getters,
}
