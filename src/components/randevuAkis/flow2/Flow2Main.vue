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
      <div class="bigTitle">{{ reactiveTitle }} Seçin</div>
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
      <!-- Hastane list -->
      <div class="overflow" v-if="displayHandler == 3">
        <div
          v-for="(item, key) in data"
          :key="key"
          :name="item.name"
          class="whiteBox d-flex align-items-center"
        >
          <div class="title">{{ item.name }}</div>
        </div>
      </div>
      <!-- Bölüm list -->
      <div class="overflow" v-if="displayHandler == 1">
        <!-- this second div with v-if is for the flow of clinic choices -->
        <!-- that is to say, when the user chooses a clinic, they'll be prompted to choose a doctor
      this v-if is part of that logic -->
        <div v-if="showBolum">
          <div
            @click="getClinicData(item)"
            v-for="(item, key) in data"
            :key="key"
            :name="item.name"
            class="whiteBox d-flex align-items-center"
          >
            <div class="title">{{ item.name }}</div>
          </div>
        </div>
        <!-- end of showBolum div -->
        <div class="clinicHospitals" v-if="showClinicHospitals">
          <div
            @click="getClinicHospitalsList(item.name)"
            v-for="(item, key) in clinicHospitalsList"
            :key="key"
            :name="item.name"
            class="whiteBox d-flex align-items-center"
          >
            <div class="title">{{ item.name }}</div>
          </div>
        </div>
        <!-- end of clinichospitals div -->
        <!-- get clinichospital value
      check if the clinic name and the hospital name exists in the array
      show only the doctors who have the aforementioned properties within -->
        <div class="clinicDoctors" v-if="showClinicDoctors">
          <!-- <DoctorBox
            v-for="(item, key) in doctorData"
            :key="key"
            :title="item.fullName"
            :subTitle="item.departments[0].name"
            :data="item.id"
            :dropdownData="item.departments[0].tenants"
            :modalData="item.departments"
            v-model="appointmentType"
          /> -->
          <div @click="tryout">click me</div>
        </div>
      </div>

      <div class="overflow" v-if="displayHandler == 2">
        <DoctorBox
          v-for="(item, key) in doctorData"
          :key="key"
          :title="item.fullName"
          :subTitle="item.departments[0].name"
          :data="item.id"
          :dropdownData="item.departments[0].tenants"
          :modalData="item.departments"
          v-model="appointmentType"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import appAxios from "../../../utils/appAxios";
import store from "../../../store";
import ChoiceBox from "./ChoiceBox.vue";
import searchLogo from "../../../assets/img/randevuAkis/search.svg";
import DoctorBox from "./DoctorBox.vue";
const appointmentType = ref(0);
const data = ref();
const clinicData = ref();
const doctorData = ref();
const hospitalData = ref();
const displayHandler = ref(3);
const reactiveTitle = ref("Bölüm");
const showBolum = ref(true);
const showClinicHospitals = ref(false);
const showClinicDoctors = ref(false);
const clinicHospitalsList = ref();
const clinicHospitalName = ref();
const clinicName = ref();

const getClinicData = (clinicHospitals) => {
  console.log(clinicHospitals.tenants);
  showBolum.value = false;
  showClinicHospitals.value = true;
  clinicHospitalsList.value = clinicHospitals.tenants;
  console.log(clinicHospitals.name);
  clinicName.value = clinicHospitals.name;
  console.log("doctor data" + doctorData.value[0].id);
};

const getClinicHospitalsList = (clinicHospital) => {
  console.log(clinicHospital);
  showClinicHospitals.value = false;
  clinicHospitalName.value = clinicHospital;
  showClinicDoctors.value = true;
  showDoctors();

  // computedDoctorsList();
};

// const computedDoctorsList = computed(() => {
//   // doctorData.map(e=>{if(e.name==clinicName.value){}})
//   console.log("doctor data" + doctorData);
// });
const newArr = ref([]);
const tryout = (clinicName, clinicHospitalName) => {
  // doctorData.value.map((e) =>
  //   console.log(
  //     "this" + e.departments[0].name + e.departments[0].tenants[0].name
  //   )
  // );
  // doctorData.value.map((e) =>
  //   e.departments[0].name == clinicName
  //     ? e.departments[0].tenants[0].name == clinicHospitalName ||
  //       e.departments[0].tenants[1].name == clinicHospitalName
  //       ? newArr.value.push(e)
  //       : null
  //     : null
  // );

  const sthNew = doctorData.value.filter(
    (e) => e.departments[0].name == clinicName.value
  );

  const new2 = sthNew.filter(
    (e) =>
      e.departments[0].tenants[0].name == clinicHospitalName.value ||
      e.departments[0].tenants[1].name == clinicHospitalName.value
  );

  newArr.value = new2;

  console.log(newArr.value);
  console.log("sth new" + sthNew);
};

let isActive = ref(false);
const toggle = function () {
  isActive.value = !isActive.value;
};
//you'll change the reactivity here
const bigBoxData = ref([
  { title: "Hastane", data: 3 },
  { title: "Bölüm", data: 1 },
  { title: "Doktor", data: 2 },
]);

const showInitialRequest = async () => {
  //should get bölüm instead of hospitals I guess
  try {
    const res = await store.dispatch("appointmentFlow/getHospitals");
    console.log(JSON.stringify(res.data.items));
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
const showClinics = async () => {
  try {
    const res = await store.dispatch("appointmentFlow/getClinics");
    data.value = res.data.items;
    // console.log(JSON.stringify(res.data.items));
    console.log(res.data.items);
  } catch (error) {
    console.log(error);
  }
};
const showHospitals = async () => {
  try {
    const res = await store.dispatch("appointmentFlow/getHospitals");
    data.value = res.data.items;
    console.log(JSON.stringify(res.data.items));
    console.log(res.data.items);
  } catch (error) {
    console.log(error);
  }
};

const showDoctors = async () => {
  try {
    const res = await store.dispatch("appointmentFlow/getDoctors");
    doctorData.value = res.data.items;
    console.log(res.data.items);
    console.log(JSON.stringify(res.data.items));
    //this one goes for subtitle
    console.log(res.data.items[0].departments[0].name);
    //for title
    console.log(JSON.stringify(res.data.items[0].fullName));
    console.log(res.data.items[0].id);
    console.log(typeof res.data.items[0].id);
  } catch (error) {
    console.log(error);
  }
};

watch(
  () => store.state.appointmentFlow.section,
  (stateChange) => {
    if (stateChange == 1) {
      displayHandler.value = 1;
      reactiveTitle.value = "Bölüm";
      showClinics();
    } else if (stateChange == 2) {
      displayHandler.value = 2;
      reactiveTitle.value = "Doktor";
      showDoctors();
    } else if (stateChange == 3) {
      displayHandler.value = 3;
      reactiveTitle.value = "Hastane";
      showHospitals();
    }
  }
);

const showStore = (e) => {
  e.preventDefault();
  displayHandler.value = store.state.appointmentFlow.section;
};

//bölüm flow

onMounted(() => {
  showInitialRequest();
  showHospitals();
  showDoctors();
  showClinics();
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
  max-width: 500px;
  width: auto;
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
.overflow {
  height: 500px !important;
  overflow: scroll;
}
.whiteBox {
  max-width: 500px;
  width: auto;
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
