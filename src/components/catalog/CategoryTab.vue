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
                <SingleProduct v-for="i in 4" :key="i"></SingleProduct>
              </div>
            </div>
        </div>
    </div>
    <!--/category-tab-->  
</template>

<script>
import SingleProduct from "./SingleProduct";
export default {
  name: `CategoryTab`,
  data() {
    return {
      title: "Category Tab",
      numbers: [ 1, 2, 3, 4, 5 ]
    };
  },
  components: {
    SingleProduct,
  },
};
</script>
