<template>
  <layout-default>
    <template v-slot:default>
      <Cart></Cart>
    </template>
  </layout-default>
</template>

<script>
// @ is an alias to /src
import LayoutDefault from "@/components/layouts/LayoutDefault.vue";
import Cart from "@/components/cart/Cart.vue";

export default {
  name: "ShoppingCart",
  components: {
    LayoutDefault,
    Cart,
  }
};
</script>
