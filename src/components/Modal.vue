<template>
  <div>
    <button @click="toggleModal" ref="modalBtn">Modal</button>

    <div class="modal-wrapper" v-bind:class="{ open: modalVisible }">
      <button @click="toggleModal" class="close">Close</button>
      <h2>This is a heading</h2>
      <p>Test content</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FocusManagement",
  props: {
    modalVisible: Boolean
  },
  mounted: function() {
    this.focusToHeader(); //focusToHeader will execute at pageload
  },
  methods: {
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    },
    focusToHeader() {
      console.log(this.$refs.headingMsg);
      this.$refs.headingMsg.focus();
      console.log("component has loaded");
    }
  }
};
</script>