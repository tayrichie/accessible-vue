<template>
  <div>
    <h2 tabindex="-1">Focus Management</h2>

    <button class="modal-trigger" v-on:click="toggleModal">Modal</button>
    <div class="modal-wrapper" :class="isVisible ? 'open' : ''">Test Modal</div>
  </div>
</template>

<script>
export default {
  name: "FocusManagement",
  components: {},
  methods: {
    toggleModal: function() {
      console.log("toggle modal!");
    }
  }
};
</script>
