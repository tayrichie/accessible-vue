<template>
  <div class="hello">
    <h1 tabindex="-1" ref="headingMsg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.modal-wrapper {
  background: salmon;
  color: white;
  padding: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 50vw;
  height: 25vw;

  display: none;
}

.modal-wrapper.open {
  display: flex;
  flex-direction: column;
}
</style>
