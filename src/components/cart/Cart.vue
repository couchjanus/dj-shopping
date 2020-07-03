<template>
    <div class='cart'>
        <router-link :to="{name: 'Home'}">
            <div class="nav-link">Back to Catalog</div>
        </router-link>
    
    <h1>{{title}}</h1>
    
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <CartItem
        v-for="(item, index) in cart_data"
        :key="index"
        :item="item"
    />
    <div class="cart__total">
      <p class="total__name">Total:</p>
      <p>{{cartTotalCost | toFix | formattedPrice}}</p>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import toFix from "../../filters/toFix";
import formattedPrice from "../../filters/price-format";

export default {
    name: `Cart`,
    data() {
        return {
            title: 'Cart',
            cart_data: [
                {
                    id:1,
                    title:"Black cat",
                    price:123,
                    quantity:3,
                    cover:"http://127.0.0.1:8000/media/images/01.jpg"

                },
                {
                    id:2,
                    title:"Green dog",
                    price:231,
                    quantity:2,
                    cover:"http://127.0.0.1:8000/media/images/02.jpg"

                }
            ]
        }
    },
    components: {
        CartItem,
    },
    // props: {
    //   cart_data: {
    //     type: Array,
    //     default() {
    //       return []
    //     }
    //   }
    // },
    filters: {
      formattedPrice,
      toFix
    },
    computed: {
      cartTotalCost() {
        let result = []

        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity)
          }

          result = result.reduce(function (sum, el) {
            return sum + el;
          })
          return result;
        } else {
          return 0
        }
      }
    },
    methods: {
    }
};
</script>

<style lang="scss">
  .cart {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 2em 3em;
      display: flex;
      justify-content: center;
      background: green;
      color: #ffffff;
      font-size: 20px;
    }

    .total__name {
      margin-right: 2em;
    }
  }
</style>