import { getData } from '@/helpers/localStorage'

export default {
  getCategories({ commit }) {
    const categories = getData('categories')
    commit('setCategories', categories)
  },
}
