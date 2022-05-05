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
        class="whiteBox d-flex align-items-center"
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

const data = ref([
  { name: "Ağrı Tedavisi (Algoloji)" },
  { name: "Endokrinoloji ve Metabolizma Hastalıkları" },
  { name: "Ağrı Tedavisi (Algoloji)" },
  { name: "Endokrinoloji ve Metabolizma Hastalıkları" },
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
.bodyContainer {
  border: solid;
}
.whiteBox {
  width: 60%;
  height: 47px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  margin-bottom: 1rem;
  padding-left: 1rem;
}
</style>
