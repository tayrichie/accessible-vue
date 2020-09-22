<template>
  <div id="app">
    <Header/>
    <Nav/>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Header,
    Nav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

pre,
code {
  font-size: 1.1em;
}
</style>
