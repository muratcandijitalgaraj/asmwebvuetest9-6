<template>
  <div
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    @click="handleClick"
    class="dropdownItem d-flex align-items-center justify-content-start"
  >
    <div
      :class="{ chosenCircle: isCircleChosen }"
      class="circle d-flex justify-content-center align-items-center"
    >
      <img :src="checkMark" alt="" />
    </div>
    <div class="dropdownText">
      {{ hospital.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../../../store";
import checkMark from "../../../assets/img/randevuAkis/tick.svg";
import ModalBox from "./ModalBox.vue";
const props = defineProps({
  hospital: { required: true, type: String },
  dropdownData: { required: true, type: String },
  modelValue: { required: true, type: Number },
  modalData: { required: true, type: Array },
  doctorName: { required: true, type: String },
  chosenItem: { required: true, type: Object },
});

const handleModalClick = (item, index) => {
  console.log(JSON.stringify(item));
  //send this item.name (clinic name) to the store with the other two data needed
  console.log(item.name);
  //commit to store
  store.commit("appointmentFlow/setClinicName", item.name);
  item.modalToggle = !item.modalToggle;
};

const emit = defineEmits(["update:modelValue"]);

const isCheck = ref(false);
const isClicked = ref(false);

const handleClick = async () => {
  await emit("update:modelValue", props.dropdownData);

  if (props.modelValue == props.dropdownData) {
    isCheck.value = true;
  } else {
    isCheck.value = false;
  }
  // console.log(props.dropdownData);
  // console.log("need" + props.modalData);
  //here are the data I'll send to the store
  console.log("hospital name => " + JSON.stringify(props.hospital));
  console.log("doctorName  => " + props.doctorName);
  // filterDoctorFunction();
  // console.log("filtered doctor name => " + filteredDoctor.value);
  // console.log(JSON.stringify(filteredDepartmentsArray.value));
  //commit to store
  store.commit("appointmentFlow/setHospitalName", props.hospital);
  store.commit("appointmentFlow/setDoctorName", props.doctorName);
  console.log(props.chosenItem);
};

const isCircleChosen = computed(() => {
  if (isCheck.value && props.dropdownData === props.modelValue) {
    return true;
  }

  return false;
});
//the same function for modal circle
const modelType = ref(0);

const isModalCircleChosen = computed(() => {
  if (isCheck.value && props.dropdownData === props.modelValue) {
    return true;
  }

  return false;
});

onMounted(() => {});
</script>

<style scoped lang="scss">
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

.modal-content {
  width: 409px;
  height: 321px;

  background: #e9f3f9;
  border-radius: 16px;
}
// modal styles
.modal-header {
  border: none;
}
.modalButton {
  background: #ff7c32;
  border: none;
  border-radius: 6px;
  width: 341px;
  height: 50px;
}
.modalButtonText {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;

  /* identical to box height, or 21px */
  text-align: center;

  /* Beyaz */
  color: #ffffff;
}
.card {
  width: 341px;
  height: auto;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  padding: 1rem;
}
.modalPara {
  /* text02 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 140%;
  color: #3c4e69;
}
</style>
