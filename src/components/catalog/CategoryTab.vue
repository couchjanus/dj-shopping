<template>
    <!--category-tab-->
    <div class="category-tab">
        <div class="col-sm-12">
            <ul class="nav nav-tabs">
                <li v-for="n in 5" :key="n" class="nav-item">
                    <a :href="`#Tab_00${n}`" data-toggle="tab" :class="{ 'active': n === 1 }">Group {{ n }}</a>
                </li>
            </ul>
        </div>
    
        <div class="tab-content">
            <div class="tab-pane fade" v-for="m in 5" :key="m" :id="`Tab_00${m}`" :class="{ 'active in show': m === 1 }">
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
    </div>
    <!--/category-tab-->  
</template>

<script>
import axios from "axios";
import SingleProduct from "./SingleProduct";
export default {
  name: `CategoryTab`,
  data() {
    return {
      title: "Category Tab",
      products: [],
    };
  },
  components: {
    SingleProduct,
  },
  created() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      await axios.get(
        `http://127.0.0.1:8000/api/products/`
      )
        .then(response => {
            this.products = response.data.results;
            this.total = response.data.count;
          })
    }
  }
};
</script>
