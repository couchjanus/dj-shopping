<template>
  <layout-default>
    <template v-slot:slider>
        Slider
    </template>

    <template v-slot:default>
      <h1>This is a home page</h1>
    </template>
  </layout-default>
</template>

<script>
// @ is an alias to /src
import LayoutDefault from "@/components/layouts/LayoutDefault.vue";
export default {
  name: "Home",
  components: {
    LayoutDefault
  }
};
</script>
