<script>
import CartItem from "./CartItem";
import toFix from "../../filters/toFix";
import formattedPrice from "../../filters/price-format";

export default {
    name: 'Modal',
    data() {
        return {
        }
    },
    components: {
        CartItem,
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
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
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <div>
    <div class="overlay">
      <div class="popup">
        <header class="modal-header">
          <slot name="header">
            <h1>Your Cart</h1>
            <p v-if="!cart_data.length">There are no products in cart...</p>
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
          </slot>
        </header>
        <section class="modal-body">
          <div class="contents">
            <slot name="body">
              <CartItem
              v-for="item in cart_data"
              :key="item.id"
              :item="item"></CartItem>
              <p>
                <strong>
                  Total: &dollar;{{cartTotalCost | toFix | formattedPrice}}
                </strong>
              </p>
            </slot>
          </div>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="submit" class="btn-checkout">
              Checkout
            </button>
            <button type="submit" class="btn-empty">
              Empty Cart
            </button>
            <button type="button" class="btn-reset" @click="close" aria-label="Close modal">
              Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
 
  .popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 50%;
    position: relative;
    transition: all 5s ease-in-out;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #fe980f;
    color: #fe980f;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #fe980f;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    background: white;
    & .contents {
        border: 1px solid #fe980f;
        padding: 1em 3em;
        margin: auto;
      }
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #fe980f;
    background: transparent;
  }

  .btn-reset, .btn-empty, .btn-checkout {
    color: white;
    background: #fe980f;
    border: 1px solid #fe980f;
    border-radius: 2px;
  }
  .btn-reset:hover, .btn-empty:hover, .btn-checkout:hover {
    color: #fe980f;
    background: white;
  }
</style>