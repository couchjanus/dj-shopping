export default {
  ADD_TO_CART({commit}, product) {
    commit('SET_CART', product);
  },
}
