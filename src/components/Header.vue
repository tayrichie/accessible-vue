<template>
  <div id="header">
    <HelloWorld msg="Accessibility in Vue"/>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#header {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 1em;
  text-align: center;
  background: whitesmoke;
}
</style>
