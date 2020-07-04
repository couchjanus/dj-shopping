<script>
import CartItem from "./CartItem";
import toFix from "../../filters/toFix";
import formattedPrice from "../../filters/price-format";

export default {
    name: 'Modal',
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
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <h1>Your Cart</h1>
            <p v-if="!cart_data.length">There are no products in cart...</p>

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
        <div class="contents">
          <slot name="body">
            <CartItem
            v-for="(item, index) in cart_data"
            :key="index"
            :item="item"
        />
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
            <input type="submit" value="checkout" />
            <input type="submit" value="Empty Cart" />
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
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
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
    & input {
          width: 100%;
          font-weight: bold;
          text-transform: uppercase;
          padding: 0.5em;
    }
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
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
        
      }
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>