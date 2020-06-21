<template>
  <layout-default>
    <template v-slot:slider>
        Slider
    </template>

    <template v-slot:default>
      <Catalog></Catalog>
    </template>
  </layout-default>
</template>

<script>
// @ is an alias to /src
import LayoutDefault from "@/components/layouts/LayoutDefault.vue";
import Catalog from "@/components/catalog/Catalog.vue";
export default {
  name: "Home",
  components: {
    LayoutDefault,
    Catalog
  }
};
</script>
