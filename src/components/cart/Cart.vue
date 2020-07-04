<template>
  <div class="cart-popup" v-if="cart.show">
      <div class="contents">
        <h1>Your Cart</h1>
        <p v-if="!cart_data.length">There are no products in cart...</p>
        <CartItem
            v-for="(item, index) in cart_data"
            :key="index"
            :item="item"
        />
        <p class="total__name">
          <strong>
            Total: &dollar;{{cartTotalCost | toFix | formattedPrice}}
          </strong>
        </p>
        
        <input type="submit" value="checkout" />
        <input type="submit" value="Empty Cart" />
        <div class="close" @click="close();">x</div>
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
            ],
        cart: {
          string: 'Cart',
          total: 0.00,
          show: true
          }
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
      close() { 
        this.cart.show = false;
        this.$router.push('/');
      }
    }
};
</script>

<style lang="scss">
  .cart-popup {
      position: relative;
      display: inline-block;

      & .contents {
        border: 1px solid;
        background: white;
        padding: 1em 3em;
        max-width: 640px;
        position: fixed;
        z-index: 1;
        top: 1.5em;
        left: 1em;
        right: 1em;
        margin: auto;
        & input {
          width: 100%;
          font-weight: bold;
          text-transform: uppercase;
          padding: 0.5em;
        }
        & .close {
          font-weight: bold;
          font-size: 2em;
          position: absolute;
          top: 0;
          right: 0.5em;
          border-radius: 50px;
          cursor: pointer;
        }
      }
    }
</style>