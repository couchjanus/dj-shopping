<template>
  <div>
    <div class="product-image-wrapper">
      <div class="single-products">
        <div class="productinfo text-center">
          <img :src="item.cover" :alt="item.title" />
          <h2>{{ item.price }}</h2>
          <p>{{ item.title }}</p>
          <button
                class="btn btn-default add-to-cart"
                @click="addToCart"
            ><i class="fa fa-shopping-cart"></i> Add to cart
            </button>
        </div>
        <div class="product-overlay">
          <div class="overlay-content">
            <h2>{{ item.price }}</h2>
            <p>{{ item.title }}</p>
            <button
                class="btn btn-default add-to-cart"
                @click="addToCart"
            ><i class="fa fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
      <div class="choose">
        <ul class="nav nav-pills nav-justified">
          <li>
            <a href="#"> <i class="fa fa-plus-square"></i>List of favorites </a>
          </li>
          <li>
            <a href="#"><i class="fa fa-plus-square"></i>Comparison</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `SingleItem`,
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  methods: {
      addToCart() {
        this.$emit('addToCart', this.item);
      }
    },
    mounted() {
      this.$set(this.item, 'quantity', 1)
    }
};
</script>
