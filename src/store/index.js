import Vue from "vue";
import Vuex from "vuex";
import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from "./mutations/mutations"
import getters from "./getters/getters";

const actions = {...commonActions, ...apiRequests}

import auth from './modules/auth';
import password from './modules/password';
import signup from './modules/signup';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters,
  modules: {
    auth,
    password,
    signup,
  }
});
