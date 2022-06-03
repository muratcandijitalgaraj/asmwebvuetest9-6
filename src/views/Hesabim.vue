<template>
  <Master>
    <template v-slot:header><Header /></template>
    <template v-slot:sidebar><Sidebar /></template>
    <template v-slot:section>
      <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">
        <HeaderVue :selectedTitle="selectedTitle" :selectTitle="selectTitle" />
        <div class="greyLine"></div>
        <div v-if="selectedTitle === 0"><HesapBilgileriVue /></div>
        <div v-if="selectedTitle === 1"><KisiselBilgilerVue /></div>
        <div v-if="selectedTitle === 2"><SaglikKartiVue /></div>
      </div>
    </template>
    <template v-slot:footer><Footer /></template>
  </Master>
</template>

<script setup>
import HeaderVue from "../components/hesabim/Header.vue";
import HesapBilgileriVue from "../components/hesabim/HesapBilgileri.vue";
import KisiselBilgilerVue from "../components/hesabim/KisiselBilgiler.vue";
import SaglikKartiVue from "../components/hesabim/SaglikKarti.vue";
import { ref } from "vue";
let selectedTitle = ref(0);

const selectTitle = (n) => {
  selectedTitle.value = n;
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style";
.main-container {
  height: auto;
  background: $main;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  padding: 30px;
}

.greyLine {
  height: 1px;
  width: 100%;
  border: 1px solid #dae9f1;
  margin: 25px 0;
}
@media only screen and (max-width: 991px) {
  .main-container {
    border-top-right-radius: 0px;
  }
}
</style>
