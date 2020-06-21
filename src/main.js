import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/styles.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
