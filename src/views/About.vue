<template>
  <layout-default>
    <template v-slot:default>
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </template>
  </layout-default>
</template>
<script>
// @ is an alias to /src
import LayoutDefault from "@/components/layouts/LayoutDefault.vue";
export default {
  name: "About",
  components: {
    LayoutDefault
  }
};
</script>
