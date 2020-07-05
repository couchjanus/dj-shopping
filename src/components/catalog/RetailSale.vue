<template>
  <!--RetailSale_items-->
  <div class="features_items">
    <a href="shop-2.html">
      <h2 class="title text-center">last products</h2>
    </a>

    <HorizontalCarousel :items="items"
      :options="{responsive: [{start: 992, end: 1200, size: 4}]}">
      <template v-slot:default="{item}">
        <SingleItem :item="item" @addToCart="addToCart"></SingleItem>          
      </template>
    </HorizontalCarousel>

  </div>
</template>

<script>
  import HorizontalCarousel from '../shared/HorizontalCarousel.vue';
  import SingleItem from './SingleItem.vue';
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: `RetailSale`,
    data() {
      return {
        items: [],
      }
    },
    components: {
      HorizontalCarousel,
      SingleItem
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
      ]),
    },
    mounted() {
      this.GET_RECOMMENDED_PRODUCTS_FROM_API()
       .then(() => {
         this.items = this.PRODUCTS;
        });
    },
    methods: {
       ...mapActions([
        'GET_RECOMMENDED_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data);
      },
    },
  };
</script>
<style scoped>
</style>