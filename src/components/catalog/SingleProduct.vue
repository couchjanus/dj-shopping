<template>
    <div class="col-sm-3">
      <div class="product-image-wrapper">
        <div class="single-products">
          <div class="productinfo text-center">
            <img :src="product_data.cover" :alt="product_data.title" />
            <h2>Price: ${{product_data.price}}</h2>
            <p>{{product_data.title}}</p>
            <a href="#" class="btn btn-default add-to-cart"
              ><i class="fa fa-shopping-cart"></i>add a cart</a
            >
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: `SingleProduct`,
  data() {
    return {
      title: "Single Product",
    };
  },
  props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  components: {
  },
};
</script>
