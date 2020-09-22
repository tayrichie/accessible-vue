<template>
  <div>
    <h2 tabindex="-1">Dark & Light Mode Theming</h2>
  </div>
</template>

<script>
import Vue from "vue";
import titleMixin from "../mixins/titleMixin";

Vue.mixin(titleMixin);

export default {
  name: "Theming",
  components: {},
  title: "Theming"
};
</script>
