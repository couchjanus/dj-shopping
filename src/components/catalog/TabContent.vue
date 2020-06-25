<template>
  <!--tab-content-->
  <div class="tab-content">
    <div
      class="tab-pane fade"
      v-for="category in category_list"
      :key="category.id"
      :id="`Tab_00${category.id}`"
      :class="{ 'active in show': category.id === 1 }"
    >
      <div class="row pb-2">
        <SingleProduct
          v-for="product in products"
          :key="product.id"
          :product_data="product"
        >
        </SingleProduct>
      </div>
    </div>
  </div>
  <!--/tab-content-->
</template>

<script>
import axios from "axios";
import SingleProduct from "./SingleProduct";
export default {
  name: `TabContent`,
  data() {
    return {
      products: [],
    };
  },
  props: {
      category_list: {
        type: Object,
        default() {
          return {}
        }
      },
      cat_id:null
    },
  components: {
    SingleProduct,
  },
  created() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      await axios
        .get(`http://127.0.0.1:8000/api/cat?cat=${this.cat_id}`)
        .then((response) => {
          this.products = response.data.results;
          this.total = response.data.count;
        });
    },
  },
};
</script>
