<template>
  <button @click="isOpen = true">Show Modal</button>

  <Modal :open="isOpen" @close="isOpen = !isOpen">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae
      enim voluptas assumenda possimus deserunt quia autem debitis unde labore
      illo inventore ex minima voluptatibus porro perferendis, ipsa totam sint!
    </p>
  </Modal>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./Playground2.vue";
const isOpen = ref(false);
</script>

<style></style>
