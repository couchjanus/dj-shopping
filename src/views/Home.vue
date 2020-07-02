<template>
  <layout-default>
    <template v-slot:slider>
        <Slider></Slider>
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
import Slider from "@/components/catalog/Slider.vue";
export default {
  name: "Home",
  components: {
    LayoutDefault,
    Catalog,
    Slider
  }
};
</script>
