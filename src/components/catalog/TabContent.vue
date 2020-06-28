<template>
  <!--tab-content-->
  <div class="tab-content">
    <div
      class="tab-pane fade active in show"
      :id="`Tab_00${category}`" 
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
import SingleProduct from "./SingleProduct";
export default {
  name: `TabContent`,
  props: {
      products: [],
      category:null
    },
  components: {
    SingleProduct,
  }
};
</script>
