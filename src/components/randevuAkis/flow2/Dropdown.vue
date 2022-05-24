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
              <div
                v-for="(item, index) in filteredDepartmentsArray"
                :key="index"
                class="card d-flex flex-row justify-content-start align-items-center"
                @click="handleModalClick(item)"
              >
                <div
                  :class="[item.modalToggle ? 'chosenCircle' : '']"
                  class="circle d-flex justify-content-center align-items-center"
                >
                  <img :src="checkMark" alt="" />
                </div>
                <div class="modalPara">{{ item.name }}</div>
              </div>

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
//////////////
//create a new array that contains everything in filteredDepartmentsArray
//but push a specific value to each item
//like isClicked ot sth like that
// const modalClickArray= filteredDepartmentsArray.map(item => {
// item.push()
// });
const handleModalClick = (item, index) => {
  console.log(JSON.stringify(item));
  console.log(index);
  console.log(item.class);
  item.modalToggle = !item.modalToggle;
};

const emit = defineEmits(["update:modelValue"]);

const isCheck = ref(false);
const isClicked = ref(false);
const doctorData = ref();
const chosenHospital = ref();
const doctorName = ref();
const filteredDoctor = ref();
const filteredDepartmentsArray = ref();

// //write a function that adds a new element to each element in the doctorData array on mount
// const addElementsOnMount=()=>{

// }

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
  // console.log(JSON.stringify(filteredDepartmentsArray.value));
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
const filterDoctorFunction = () => {
  console.log(props.doctorName + props.hospital);
  console.log(doctorData.value);
  console.log(JSON.parse(JSON.stringify(doctorData.value)));

  const filteredDoctor = doctorData.value.filter((item) => {
    if (item.fullName === props.doctorName) {
      return item;
    }
  });

  let filteredDepartments = filteredDoctor[0].departments.filter((item) => {
    if (item.tenants.length > 1) {
      if (
        item.tenants[0].name == props.hospital ||
        item.tenants[1].name == props.hospital
      ) {
        return item;
      } else if (item.tenants.length == 1) {
        if (item.tenants[0].name == props.hospital) {
          console.log(item);
          return item;
        }
      }
    }
  });

  console.log("filtered doctor " + JSON.stringify(filteredDoctor));
  console.log("filtered department" + JSON.stringify(filteredDepartments));

  //what is this?
  // filtered;
  //add modal toggle element to each and every item in filteredDepartments
  filteredDepartments.forEach((item) => {
    Object.assign(item, { modalToggle: false });
  });
  filteredDepartmentsArray.value = filteredDepartments;
  console.log(filteredDepartmentsArray.value);
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
