import axios from "axios";

export default {
  GET_RECOMMENDED_PRODUCTS_FROM_API({commit}) {
    return axios
      .get(`http://127.0.0.1:8000/api/recommended`)
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data.results);
        return products;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
  },
}
