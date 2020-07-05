<template>
  <!--header-middle-->

  <div class="header-middle">
    <!--Navbar -->
    <nav class="mb-1 navbar navbar-expand-lg">
      <a class="navbar-brand float-left" href="#"
        ><img
          src="/static/images/home/logo.png"
          alt="Logo"
          style="text-align: center;"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav ml-auto nav-flex-icons">
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fa fa-user"></i> user account
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fa fa-star"></i> List of favorites</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-lock"></i> login</a>
          </li>
          <li class="nav-item"><button
              type="button"
              class="btn"
              @click="showModal"
            ><i class="fa fa-shopping-cart"></i> Cart: {{CART.length}}</button>
            <Modal
              :cart_data='CART' 
              v-show="isModalVisible" 
              @close="closeModal"
            />
          </li>
          
        </ul>
      </div>
    </nav>
    <!--/.Navbar -->
  </div>

  <!--/header-middle-->
</template>

<script>
import Modal from '../cart/Modal';
import {mapGetters} from 'vuex';

export default {
  name: `HeaderMiddle`,
    components: {
      Modal,
    },
    data () {
      return {
        isModalVisible: false,
      };
    },
    computed: {
      ...mapGetters([
        'CART',
      ]),
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
};
</script>
