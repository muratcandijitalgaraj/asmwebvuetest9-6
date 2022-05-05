<template>
  <div class="main">
    <div class="longBox d-flex align-items-center justify-content-start">
      <ChoiceBox
        v-for="(item, index) in bigBoxData"
        :key="index"
        :title="item.title"
        :data="item.data"
        v-model="appointmentType"
      />
    </div>
    <div class="bodyContainer">
      <div class="bigTitle">Bölüm Seçin</div>
      <input type="text" placeholder="Search.." />
      <div
        v-for="(item, key) in data"
        :key="key"
        :name="item.name"
        class="whiteBox"
      >
        <div class="title">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChoiceBox from "./ChoiceBox.vue";
//:class="{ active: isActive }" @click="toggle"
//toggle functionality
const appointmentType = ref(0);
let isActive = ref(false);
const toggle = function () {
  isActive.value = !isActive.value;
};

const bigBoxData = ref([
  { title: "Bölüm", data: 1 },
  { title: "Doktor", data: 2 },
  { title: "Hastane", data: 3 },
]);

const data = ref([{ name: "one" }, { name: "two" }, { name: "three" }]);
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
