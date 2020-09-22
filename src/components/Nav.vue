<template>
  <ul id="app">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/page-titles">Page Titles</a>
    </li>
    <li>
      <a href="/focus-management">Focus Management</a>
    </li>
    <li>
      <a href="/click-events">Click Events</a>
    </li>
    <li>
      <a href="/aria-live">Aria Live and Alert Regions</a>
    </li>
    <li>
      <a href="/theming">Theming: Dark & Light Mode</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Nav"
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