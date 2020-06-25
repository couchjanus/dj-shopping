<template>
    <!--category-tab-->
    <div class="category-tab">
        <div class="col-sm-12">
            <ul class="nav nav-tabs">
                <li v-for="category in categories" :key="category.id" class="nav-item">
                    <a :href="`#Tab_00${category.id}`" data-toggle="tab" :class="{ 'active': category.id === 1 }" @click="getCatId(category.id)"> {{ category.name }}</a>
                </li>
            </ul>
        </div>
        <tab-content :category_list="categories" :cat_id="cat_id"></tab-content>
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
      total:0,
      cat_id:1
    };
  },
  components: {
    TabContent,
  },
  created() {
    this.loadCategories();
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
    getCatId(id){
      this.cat_id=id;
      console.log(this.cat_id);
    }
  }
};
</script>
