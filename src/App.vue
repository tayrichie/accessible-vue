<template>
  <div id="app">
    <Header/>
    <Home/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./pages/home";
import PageTitles from "./pages/page-titles";

export default {
  name: "App",
  components: {
    Header,
    Home,
    PageTitles
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
</style>
