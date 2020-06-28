<template>
    <!--category-tab-->
    <div class="category-tab">
        <div class="col-sm-12">
            <ul class="nav nav-tabs">
                <li v-for="category in categories" :key="category.id" class="nav-item">
                    <a :href="`#Tab_00${category.id}`" data-toggle="tab" :class="{ 'active': category.id === cat_id }" @click="getCatId(category.id)"> {{ category.name }}</a>
                </li>
            </ul>
        </div>
        <tab-content :products="products" :category="cat_id"></tab-content>
    </div>
    <!--/category-tab-->  
</template>

<script>
import axios from "axios";
import TabContent from "./TabContent";

export default {
  name: `CategoryTab`,
  data() {
    return {
      categories: [],
      products: [],
      total:0,
      cat_id:1,     
    };
  },
  components: {
    TabContent,
  },
  created() {
    this.loadCategories();
    this.loadProducts(1);
  },
  methods: {
    async loadCategories() {
      await axios.get(
        `http://127.0.0.1:8000/api/categories/`
      )
        .then(response => {
            this.categories = response.data.results;
            this.total = response.data.count;
          })
    },
    async loadProducts(cat_id) {
      await axios
        .get(`http://127.0.0.1:8000/api/cat?cat=${cat_id}`)
        .then((response) => {
          this.products = response.data.results;
          this.total = response.data.count;
        });
    },
    getCatId(id){
      this.cat_id=id;
      this.loadProducts(id);
    }
  }
};
</script>
