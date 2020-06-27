<template>
  <layout-default>
    <template v-slot:default>
      <div class="contributors">
        <h1>Contributors page</h1>
      </div>
    </template>
  </layout-default>
</template>
<script>
// @ is an alias to /src
import LayoutDefault from "@/components/layouts/LayoutDefault.vue";
export default {
  name: "Contributors",
  components: {
    LayoutDefault
  }
};
</script>