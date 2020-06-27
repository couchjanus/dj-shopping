<template>
  <!--RetailSale_items-->
  <div class="features_items">
    <a href="shop-2.html">
      <h2 class="title text-center">last products</h2>
    </a>

    <HorizontalCarousel :items="items"
      :options="{responsive: [{start: 992, end: 1200, size: 4}]}">
      <template v-slot:default="{item}">
        <SingleItem :item="item"></SingleItem>          
      </template>
    </HorizontalCarousel>

  </div>
</template>

<script>
  import HorizontalCarousel from '../shared/HorizontalCarousel.vue';
  import SingleItem from './SingleItem.vue';
  import axios from "axios";
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
    created() {
      this.loadItems();
    },
    methods: {
      async loadItems() {
      await axios
        .get(`http://127.0.0.1:8000/api/recommended`)
        .then((response) => {
          this.items = response.data.results;
          this.total = response.data.count;
        });
      },
    },
  };
</script>
<style scoped>
</style>