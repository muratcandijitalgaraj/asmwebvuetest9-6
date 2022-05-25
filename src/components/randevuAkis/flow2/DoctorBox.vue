<template>
  <div
    @click="handleClick"
    :class="{ clicked: handleCollapse }"
    class="doctorBox d-flex align-items-center"
  >
    <img :src="doctorImg" alt="" class="doctorImg" />
    <div class="textContainer d-flex flex-column">
      <div class="upperPart d-flex justify-content-between align-items-center">
        <div class="title">{{ title }}</div>
        <img v-if="shouldCollapse" :src="collapseImg" alt="" />
      </div>
      <div v-if="shouldCollapse == false" class="subtitleContainer d-flex">
        <span class="subTitle">{{ subTitle }} </span>
        <span class="subTitle"> - </span>
        <!-- is this v-if really necessary? -->
        <span
          v-if="modalData.length == 1 && modalData[0].tenants.length == 1"
          class="subTitle"
          >{{ modalData[0].tenants[0].name }}</span
        >
      </div>
    </div>
  </div>
  <div v-if="modalData.length === 1">
    <div
      v-if="shouldCollapse"
      :class="{ collapsed: handleCollapse }"
      class="hidden"
    >
      <!-- first off, it should loop over modalData, not dropdownData -->
      <Dropdown
        v-for="(item, key) in dropdownData"
        :key="key"
        :hospital="item.name"
        v-model="appointmentType"
        :dropdownData="item.id"
        :doctorName="title"
      />
    </div>
  </div>
  <div v-if="modalData.length > 1">
    <div
      v-if="shouldCollapse"
      :class="{ collapsed: handleCollapse }"
      class="hidden"
    >
      <Dropdown
        v-for="(item, key) in modalData"
        :key="key"
        :hospital="item.name"
        v-model="appointmentType"
        :dropdownData="item.id"
        :doctorName="title"
      />
    </div>
  </div>

  <!-- <div class="doctorBox" v-for="(item, index) in modalData" :key="index">
    <div
      class="clinicDropdownContainer d-flex flex-row justify-content-start align-items-center"
    >
      <div
        :class="{ chosenCircle: isCircleChosen }"
        class="circle d-flex justify-content-center align-items-center"
      >
        <img :src="checkMark" alt="" />
      </div>
      <div class="dropdownText">{{ item.name }}</div>
      <span> - </span>
      <div class="dropdownText">{{ item.tenants[0].name }}</div>
    </div>
  </div> -->
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../../../store";
import doctorImg from "../../../assets/img/randevuAkis/foto.svg";
import Dropdown from "./Dropdown.vue";
import collapseImg from "../../../assets/img/randevuAkis/collapse.svg";

//ultimate functionality logic:
//if the clicked doctor works in more than one hospital, show dropdown
//if the doctor works in multiple clinics in a chosen hospital, show modal
//if the clicked doctor works in only one hospital but multiple clinics, show dropdown of clinics

//handle circle on click
const handleCircle = () => {
  isCircleChosen.value = !isCircleChosen.value;
  console.log("key" + key);
};
const appointmentType = ref(0);

const props = defineProps({
  title: { required: true, type: String },
  subTitle: { required: true, type: String },
  collapseData: { required: true, type: Array },
  data: { required: true, type: String },
  dropdownData: { required: true, type: Array },
  modelValue: { required: true, type: Number },
  modalData: { required: true, type: Array },
});

const emit = defineEmits(["update:modelValue"]);

const isCheck = ref(false);
const isClicked = ref(false);
const isCircleChosen = ref(false);
const shouldCollapse = ref(false);
const departments = ref();

// const handle = ref(false);
const handleClick = async () => {
  await emit("update:modelValue", props.data);

  if (props.modelValue == props.data) {
    isCheck.value = true;
  } else {
    isCheck.value = false;
  }
  console.log(props.data);
  changeBorderRadius();
  //send this data to the store
  console.log("props title=>" + props.title);
  //commit to store
  store.commit("appointmentFlow/setDoctorName", props.title);
  //modalData is item.departments coming from the parent
  //this is the important one, I'll use this one to create the functionality of the dropdown
  console.log(props.modalData);
  departments.value = props.modalData;
  // console.log(departments.value);
  console.log("doktorun çalıştığı hastane length" + props.dropdownData.length);
};

const handleCollapse = computed(() => {
  if (isCheck.value && props.data === props.modelValue) {
    return true;
  }

  return false;
});

//change doctorbox border radius based on click
const changeBorderRadius = () => {
  isClicked.value = !isClicked.value;
};
//this function checks the length of tenants array that contains the amount of hospitals a doctor works in
//if the doctor works in only one hospital, it'll return false, and collapse wont be showing off
//else, it'll return true and the collapse will be available
//very, very useful function.
const handleShouldCollapse = () => {
  if (departments.value.length > 1) {
    shouldCollapse.value = true;
  } else if (props.dropdownData.length > 1) {
    shouldCollapse.value = true;
  } else if (departments.value.length == 1) {
    shouldCollapse.value = false;
  }
};

// else if (props.modalData.map) {
//     shouldCollapse.value = true;
//   }
onMounted(() => {
  //you can find the hospital name by querying this
  // console.log("dropdowndata" + JSON.stringify(props.dropdownData));
  departments.value = props.modalData;
  handleShouldCollapse();
  console.log(props.modalData);
  console.log("dropdown data => " + JSON.stringify(props.dropdownData));
  console.log(` there are ${props.modalData.length} departments`);
});
</script>

<style lang="scss" scoped>
.doctorBox {
  max-width: 500px;
  width: auto;
  height: 70px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  padding-left: 1rem;
  margin-top: 1rem;
  padding-right: 1rem;
}
.textContainer {
  width: 100%;
}
.upperPart {
  width: 100%;
}
.title {
  /* baslik4 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  /* identical to box height, or 24px */

  /* Primary */
  color: #3c4e69;
}
.subTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  /* or 18px */

  /* Gri */
  color: #818b9a;
}
.dropdownItem {
  max-width: 500px;
  width: auto;
  height: 70px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  padding-left: 1rem;
  border-top: 1px solid #f3f3f3;
}
.dropdownText {
  /* text02 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 140%;

  /* identical to box height, or 21px */

  /* Primary */
  color: #3c4e69;
}
.doctorImg {
  margin-right: 1rem;
}
.hidden {
  display: none;
}
.collapsed {
  display: block;
}
.circle {
  width: 20px;
  height: 20px;
  border: 1.3px solid #e1e1e1;
  border-radius: 50%;
  margin-right: 10px;
}
.chosenCircle {
  background: #32a5df;
}
.dropdownText {
  /* text02 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 140%;

  /* identical to box height, or 21px */

  /* Primary */
  color: #3c4e69;
}
</style>
