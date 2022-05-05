<template>
  <div class="main">
    <div class="longBox d-flex align-items-center justify-content-start">
      <ChoiceBox
        v-for="(item, index) in bigBoxData"
        :key="index"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChoiceBox from "./ChoiceBox.vue";
//toggle functionality
//:class="{ active: isActive }" @click="toggle"
let isActive = ref(false);
const toggle = function () {
  isActive.value = !isActive.value;
};

const bigBoxData = ref([
  { title: "Bölüm" },
  { title: "Doktor" },
  { title: "Hastane" },
]);
</script>

<style lang="scss" scoped>
.longBox {
  width: auto;
  height: 53px;
  background: linear-gradient(
      180deg,
      rgba(204, 238, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    #ffffff;
}
</style>
