<template>
    <div class='cart-item'>
        <img class="cart-item__image" :src="item.cover" alt="">
        <div class="cart-item__info">
            <p>{{item.title}}</p>
            <p>{{item.price | toFix | formattedPrice}}</p>
            <p>{{item.id}}</p>
        </div>
        <div class="cart-item__quantity">
            <p>Quantity:</p>
            <span class="quantity__tools">
                <span class="quantity__btn" @click="decrementItem">-</span>
                {{item.quantity}}
                <span class="quantity__btn" @click="incrementItem">+</span>
            </span>
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
import toFix from '../../filters/toFix'
import formattedPrice from "../../filters/price-format";

export default {
    name: `CartItem`,
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      toFix,
      formattedPrice
    },
    methods: {
      decrementItem() {
        // this.$emit('decrement')
      },
      incrementItem() {
        // this.$emit('increment')
      },
      deleteFromCart() {
        // this.$emit('deleteFromCart')
      }
    }
};
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 2em;
    margin-bottom: 2em;
    &__image {
      max-width: 50px;
    }

    .quantity__btn {
      cursor: pointer;
    }

    .quantity__tools {
      user-select: none;
    }
  }
</style>
