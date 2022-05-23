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
      {{ hospital }}
    </div>

    <teleport to="body">
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Bölüm Seçin</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="modal-body d-flex flex-column justify-content-center align-items-center"
            >
              <ModalBox
                v-for="(item, key) in modalData"
                :key="key"
                :clinic="item.name"
              />
              <div class="card">content goes here</div>

              <button class="modalButton">
                <div class="modalButtonText">Seç</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
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
});
//write an on click function
//that takes props.hospital

const emit = defineEmits(["update:modelValue"]);

const isCheck = ref(false);
const isClicked = ref(false);
const doctorData = ref();
const chosenHospital = ref();
const doctorName = ref();
const filteredDoctor = ref();

// const handle = ref(false);
const handleClick = async () => {
  await emit("update:modelValue", props.dropdownData);

  if (props.modelValue == props.dropdownData) {
    isCheck.value = true;
  } else {
    isCheck.value = false;
  }
  // console.log(props.dropdownData);
  console.log("need" + props.modalData);
  console.log("hospital name => " + props.hospital);
  chosenHospital.value = props.hospital;
  console.log("doctorName  => " + props.doctorName);
  doctorName.value = props.doctorName;
  filterDoctorFunction();
  // console.log("filtered doctor name => " + filteredDoctor.value);
};

const isCircleChosen = computed(() => {
  if (isCheck.value && props.dropdownData === props.modelValue) {
    return true;
  }

  return false;
});
//this function doesn't work as expected
const filterDoctorFunction = () => {
  // //this should be the doctor on the dropdown
  // let filteredDoctor1 = doctorData.value.filter((item) => {
  //   if (item.fullName == props.doctorName) {
  //     return item;
  //   }
  // });
  // filteredDoctor1.fullName = filteredDoctor.value;
  // console.log(filteredDoctor1);

  console.log(props.doctorName + props.hospital);
  console.log(doctorData.value);
  console.log(JSON.parse(JSON.stringify(doctorData.value)));

  const filteredFunc = JSON.parse(JSON.stringify(doctorData.value)).filter(
    (item) => {
      if (item.fullName === props.doctorName) {
        return item;
      }
    }
  );

  console.log("filtered function " + JSON.stringify(filteredFunc));
};

const showDoctors = async () => {
  try {
    const res = await store.dispatch("appointmentFlow/getDoctors");
    doctorData.value = res.data.items;
    // console.log(doctorData.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  // alert("need" + JSON.stringify(props.modalData));
  showDoctors();
});
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
  height: 50px;

  background: #ffffff;

  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
}
</style>
