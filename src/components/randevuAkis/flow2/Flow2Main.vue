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
      <div class="searchContainer d-flex align-items-center">
        <input class="searchInput" type="text" placeholder="Search.." />
        <div
          class="logoContainer d-flex justify-content-center align-items-center"
        >
          <img :src="searchLogo" alt="" class="searchLogo" />
        </div>
      </div>
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
import searchLogo from "../../../assets/img/randevuAkis/search.svg";
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
  margin-top: 30px;
  margin-left: 50px;
}
.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;

  /* identical to box height, or 22px */
  letter-spacing: -0.01em;

  /* Primary */
  color: #3c4e69;
  margin-bottom: 22px;
}
.searchContainer {
  width: 60%;
  height: 48px;
  background: #ffffff;

  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border: none;
  padding-left: 1rem;
  margin-bottom: 2rem;
}
.searchInput {
  width: 90%;
  height: 100%;
  border: none;
}
.searchLogo {
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
