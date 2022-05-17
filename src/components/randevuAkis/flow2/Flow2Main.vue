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
    <div
      class="body d-flex flex-column-reverse flex-xxl-row justify-content-center justify-content-lg-between align-items-start"
    >
      <div class="bodyContainer col-10 col-xxl-6">
        <div class="bigTitle">{{ reactiveTitle }} Seçin</div>
        <div
          class="searchContainer col-10 col-lg-12 col-xxl-6 d-flex align-items-center"
        >
          <input
            v-model="search"
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
          <!-- using reactive object heretoafter -->
          <div v-if="hospitalFlow.showHospitalList">
            <div
              @click="getHospitalData(item)"
              v-for="(item, key) in searchFunction"
              :key="key"
              :name="item.name"
              class="whiteBox d-flex align-items-center"
            >
              <div class="title">{{ item.name }}</div>
            </div>
          </div>
          <!-- end of showHospitalList div -->
          <div
            class="hospitalClinics"
            v-if="hospitalFlow.showHospitalClinicList"
          >
            <div
              @click="getHospitalClinics(item)"
              v-for="(item, key) in hospitalFlow.filteredClinics"
              :key="key"
              :name="item.name"
              class="whiteBox d-flex align-items-center"
            >
              <div class="title">{{ item.name }}</div>
            </div>
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
              v-for="(item, key) in searchFunction"
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
            <DoctorBox
              v-for="(item, key) in searchFilteredDoctorsFunction"
              :key="key"
              :title="item.fullName"
              :subTitle="item.departments[0].name"
              :data="item.id"
              :dropdownData="item.departments[0].tenants"
              :modalData="item.departments"
              v-model="appointmentType"
            />
            <!-- <div @click="filterDoctorsFunction">click me</div> -->
          </div>
        </div>

        <div class="overflow" v-if="displayHandler == 2">
          <DoctorBox
            v-for="(item, key) in searchDoctorsFunction"
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
      <div class="rightPart col-10 col-xxl-4">
        <h2 class="rightPartTitle">Seçimleriniz</h2>
        <RightPart
          v-for="(item, key) in rightPartArr"
          :key="key"
          :title="item.title"
          :name="item.name"
          :logo="item.logo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, reactive } from "vue";
import appAxios from "../../../utils/appAxios";
import store from "../../../store";
import ChoiceBox from "./ChoiceBox.vue";
import searchLogo from "../../../assets/img/randevuAkis/search.svg";
import DoctorBox from "./DoctorBox.vue";
import RightPart from "./RightPart.vue";
const appointmentType = ref(0);
//search variable
const search = ref("");
//this is the data for all, if you want to use it
const data = ref([]);
//individual data refs
const clinicData = ref([]);
const doctorData = ref([]);
const hospitalData = ref();
const displayHandler = ref(3);
const reactiveTitle = ref("Hastane");
//v-if functionalities
const showBolum = ref(true);
const showClinicHospitals = ref(false);
const showClinicDoctors = ref(false);
const clinicHospitalsList = ref();
const clinicHospitalName = ref();
const clinicName = ref();
//reactive object for hospital flow in terms of creating v-if functionalities
const hospitalFlow = reactive({
  showHospitalClinics: false,
  showHospitalList: true,
  chosenHospital: "",
  filteredClinics: [],
});
//filtered
const filteredDoctors = ref([]);
//right part array
const rightPartArr = ref([]);

const getHospitalData = (item) => {
  console.log(item.name);
  console.log(item);
  hospitalFlow.chosenHospital = item.name;
  filteredClinics();
  console.log(data.value);
};
const getHospitalClinics = (item) => {
  console.log("check this" + item);
};

const getClinicData = (clinicHospitals) => {
  console.log(clinicHospitals.tenants);
  showBolum.value = false;
  showClinicHospitals.value = true;
  clinicHospitalsList.value = clinicHospitals.tenants;
  console.log(clinicHospitals.name);
  clinicName.value = clinicHospitals.name;
  console.log("doctor data" + doctorData.value[0].id);
  console.log("clinicName.value  => " + clinicName.value);
  rightPartArr.value.push({
    title: "Bölüm",
    name: clinicName.value,
    logo: "clinic",
  });
};
// let filterDoctors2 = ref();
const filterDoctorsFunction = () => {
  let i;
  let j;
  const filterDoctors1 = doctorData.value.filter((e) => {
    for (i = 0, j = e.departments.length; i < j; i++) {
      if (e.departments[i].name == clinicName.value) {
        return e;
      }
    }
  });

  const filterDoctors2 = filterDoctors1.filter((e) => {
    for (i = 0; i < e.departments.length; i++) {
      for (j = 0; j < e.departments[i].tenants.length; j++) {
        if (e.departments[i].tenants[j].name == clinicHospitalName.value) {
          return e;
        }
      }
    }
  });

  filteredDoctors.value = filterDoctors2;

  console.log(filteredDoctors.value);
  console.log(JSON.stringify(filteredDoctors.value));
  // I think filteredDoctors.value is what I'm looking for
  console.log(filteredDoctors.value[0].name);
  console.log("sth new" + filterDoctors1[0]);
  console.log(clinicName.value);
};

//filtered clinics function
const filteredClinics = () => {
  let i;
  let j;
  const filterClinics1 = clinicData.value.filter((e) => {
    for (i = 0; i < e.length; i++) {
      for (j = 0; j < e[i].tenants.length; j++) {
        if (e[i].tenants[j].name == hospitalFlow.chosenHospital) {
          return e;
        }
      }
    }
  });
  console.log("chosen" + hospitalFlow.chosenHospital);
  console.log(clinicData.value);
  console.log(filterClinics1);
  hospitalFlow.filteredClinics = filterClinics1;
  // hospitalFlow.showHospitalList = false;
  // hospitalFlow.showHospitalClinics = true;
};

const getClinicHospitalsList = (clinicHospital) => {
  console.log(clinicHospital);
  showClinicHospitals.value = false;
  clinicHospitalName.value = clinicHospital;
  showClinicDoctors.value = true;
  showDoctors();
  console.log("  clinicHospitalName.value=>" + clinicHospitalName.value);
  filterDoctorsFunction();
  rightPartArr.value.push({
    title: "Hastane",
    name: clinicHospitalName.value,
    logo: "hospital",
  });
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
//the API is problematic, it doesn't show the 2 hospital locations at all
//So, instead of this function, I'll create a temporary one
// const showHospitals = async () => {
//   try {
//     const res = await store.dispatch("appointmentFlow/getHospitals");
//     data.value = res.data.items;
//     console.log(JSON.stringify(res.data.items));
//     console.log(res.data.items);
//   } catch (error) {
//     console.log(error);
//   }
// };

//the temporary function that'll show 2 hospital locations we have
//you'll continue from here. The steps to take:
//filter clinics according to the location at click
//filter doctors according to the clinic chosen
const showHospitals = async () => {
  try {
    const res = await store.dispatch("appointmentFlow/getClinics");
    data.value = res.data.items[4].tenants;
    //add clinicData here for the flow
    clinicData.value = res.data.items;
    // console.log(JSON.stringify(res.data.items));
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
    if (stateChange === 1) {
      showClinics();
      displayHandler.value = 1;
      reactiveTitle.value = "Bölüm";
    } else if (stateChange === 2) {
      showDoctors();
      displayHandler.value = 2;
      reactiveTitle.value = "Doktor";
    } else if (stateChange === 3) {
      showHospitals();
      displayHandler.value = 3;
      reactiveTitle.value = "Hastane";
    }
  }
);

const showStore = (e) => {
  e.preventDefault();
  displayHandler.value = store.state.appointmentFlow.section;
};

//search function
const searchFunction = computed(() => {
  return data.value.filter((e) => {
    return e.name.toLowerCase().match(search.value);
  });
});
//search doctors
const searchDoctorsFunction = computed(() => {
  return doctorData.value.filter((e) => {
    return e.fullName.toLowerCase().match(search.value);
  });
});
//search filtered doctors
const searchFilteredDoctorsFunction = computed(() => {
  return filteredDoctors.value.filter((e) => {
    return e.fullName.toLowerCase().match(search.value);
  });
});

onMounted(() => {
  // showInitialRequest();
  showDoctors();
  showClinics();
  showHospitals();
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
  margin-left: 30px;
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
  // max-width: 500px;
  // width: 500px;
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
  // width: 90%;
  height: 100%;
  border: none;
}
.searchInput:focus {
  outline: none;
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
.rightPart {
  margin-top: 30px;
  margin-right: 30px;
}
.rightPartTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;

  /* identical to box height, or 22px */
  letter-spacing: -0.01em;

  color: #32a5df;
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
@media only screen and (max-width: 1400px) {
  .rightPart {
    margin-left: 30px;
    // margin-right: 30px;
  }
}
</style>
