<template>
  <div class="main">
    <div class="longBox d-flex align-items-center justify-content-start">
      <ChoiceBox
        v-for="(item, index) in bigBoxData"
        :key="index"
        :title="item.title"
        :data="item.data"
        v-model="appointmentType"
        @click="showStore"
      />
    </div>
    <div class="bodyContainer">
      <div class="bigTitle">Bölüm Seçin</div>
      <div class="searchContainer d-flex align-items-center">
        <input
          class="searchInput"
          type="text"
          :placeholder="`${reactiveTitle} arayın`"
        />
        <div
          class="logoContainer d-flex justify-content-center align-items-center"
        >
          <img :src="searchLogo" alt="" class="searchLogo" />
        </div>
      </div>
      <div v-if="displayHandler != 2">
        <div
          v-for="(item, key) in data"
          :key="key"
          :name="item.name"
          class="whiteBox d-flex align-items-center"
        >
          <div class="title">{{ item.name }}</div>
        </div>
      </div>
      <div v-if="displayHandler == 2">iki</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import appAxios from "../../../utils/appAxios";
import store from "../../../store";
import ChoiceBox from "./ChoiceBox.vue";
import searchLogo from "../../../assets/img/randevuAkis/search.svg";
//:class="{ active: isActive }" @click="toggle"
//toggle functionality
const appointmentType = ref(0);
let isActive = ref(false);
const toggle = function () {
  isActive.value = !isActive.value;
};
//you'll change the reactivity here
const reactiveTitle = ref("Bölüm");

const bigBoxData = ref([
  { title: "Bölüm", data: 1 },
  { title: "Doktor", data: 2 },
  { title: "Hastane", data: 3 },
]);

const data2 = ref([
  { name: "Ağrı Tedavisi (Algoloji)" },
  { name: "Endokrinoloji ve Metabolizma Hastalıkları" },
  { name: "Ağrı Tedavisi (Algoloji)" },
  { name: "Endokrinoloji ve Metabolizma Hastalıkları" },
]);
const data = ref();

const displayHandler = ref(2);

const showInitialRequest = async () => {
  //should get bölüm instead of hospitals I guess
  try {
    const res = await store.dispatch("appointmentFlow/getHospitals");
    console.log("newnew" + JSON.stringify(res.data.items));
    console.log("newnew" + res.data.items[0].name);
    data.value = res.data.items;
    //for some reason, you ahve to specify from which state you're getting data
    console.log(store.state.appointmentFlow.section);
    // //change displayhandler according to the state
    // displayHandler.value = store.state.appointmentFlow.section;
    // console.log(displayHandler.value);
  } catch (error) {
    console.log(error);
  }
};

const showHospitals = async () => {
  try {
    const res = await store.dispatch("appointmentFlow/getHospitals");
    data.value = res.data.items;

    // displayHandler.value = store.state.appointmentFlow.section;
    // console.log(displayHandler.value);
  } catch (error) {
    console.log(error);
  }
};

watch(
  () => store.state.appointmentFlow.section,
  (stateChange) => {
    if (stateChange == 1) {
      console.log("watch bölüm");
      displayHandler.value = 1;
    } else if (stateChange == 2) {
      console.log("watch doktor");
      displayHandler.value = 2;
    }
  }
);

const showStore = (e) => {
  e.preventDefault();
  console.log(store.state.appointmentFlow.section);
  displayHandler.value = store.state.appointmentFlow.section;

  // if (store.state.appointmentFlow.section == 1) {
  //   console.log("bölüm");
  // } else if (store.state.appointmentFlow.section == 2) {
  //   console.log("doktor");
  // } else if (store.state.appointmentFlow.section == 3) {
  //   console.log("hospitals");
  //   showHospitals();
  // }
};

onMounted(() => {
  showInitialRequest();
  console.log("heyyo" + store.state.appointmentFlow.section);
});
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

@media only screen and (max-width: 992px) {
  .searchContainer,
  .whiteBox {
    width: 100%;
  }
  .bodyContainer {
    margin-right: 50px;
  }
}
</style>
