<template>
    <section>
    <div class="container">
        <div class="row">
        <h1>{{title}}</h1>
        <!--NewProduct-->
        <NewProduct></NewProduct>
        <div class="col-sm-12 padding-right">
            <!--RetailSale-->
            <RetailSale></RetailSale>
            <!--category-tab-->
            <category-tab></category-tab>
        </div>
    </div>
    </div>
</section>
</template>

<script>
import RetailSale from "./RetailSale";
import CategoryTab from "./CategoryTab";
import NewProduct from "./NewProduct";

export default {
    name: `Catalog`,
    data() {
        return {
            title: 'Catalog'
        }
    },
    components: {
        NewProduct,
        RetailSale,
        CategoryTab,
    }
};
</script>