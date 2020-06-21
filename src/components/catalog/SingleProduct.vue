<template>
    <div class="col-sm-3">
      <div class="product-image-wrapper">
        <div class="single-products">
          <div class="productinfo text-center">
            <img src="/static/images/home/Tabs.png" alt="" />
            <h2>560.000 dolar</h2>
            <p>Best-selling products</p>
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
  components: {
  },
};
</script>
