<template>
  <ul id="app">
    <li>
      <v-link href="/">Home</v-link>
    </li>
    <li>
      <v-link href="/page-titles">Page Titles</v-link>
    </li>
    <li>
      <v-link href="/focus-management">Focus Management</v-link>
    </li>
    <li>
      <v-link href="/click-events">Click Events</v-link>
    </li>
    <li>
      <v-link href="/aria-live">Aria Live and Alert Regions</v-link>
    </li>
    <li>
      <v-link href="/theming">Theming: Dark & Light Mode</v-link>
    </li>
  </ul>
</template>

<script>
import VLink from "../components/VLink";

export default {
  name: "Nav",
  components: {
    VLink
  }
};
</script>

<style scoped>
ul {
  background: lavenderblush;
  list-style: none;
  display: block;
  margin: 0;
  padding: 0.5em;
}
</style>