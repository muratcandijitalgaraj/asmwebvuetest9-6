<template>
  <!-- create 3 different divs according to itemReturnValue (departmentType1, departmentType2, departmentType3) -->
  <!-- div for 1 hospital & 1 clinic only -->

  <div
    v-if="itemReturnValue == 'departmentType1'"
    @click="handleClick"
    :class="{ clicked: handleCollapse }"
    class="doctorBox d-flex align-items-center"
  >
    <img :src="doctorImg" alt="" class="doctorImg" />

    <div class="textContainer d-flex flex-column">
      <div class="upperPart d-flex justify-content-between align-items-center">
        <div class="title">{{ title }}</div>
      </div>
      <div class="subtitleContainer d-flex">
        <span class="subTitle">{{ subTitle }} </span>
        <span class="subTitle"> - </span>
        <span class="subTitle">{{ modalData[0].tenants[0].name }}</span>
      </div>
    </div>
  </div>

  <!-- div for 2 hospitals (so, with dropdown) -->

  <div
    v-if="itemReturnValue == 'departmentType2'"
    @click="handleClick"
    :class="{ clicked: handleCollapse }"
    class="doctorBox d-flex align-items-center"
  >
    <img :src="doctorImg" alt="" class="doctorImg" />

    <div class="textContainer d-flex flex-column">
      <div class="upperPart d-flex justify-content-between align-items-center">
        <div class="title">{{ title }}</div>
        <img :src="collapseImg" alt="" />
      </div>
    </div>
  </div>

  <div
    v-if="itemReturnValue == 'departmentType2'"
    :class="{ collapsed: handleCollapse }"
    class="hidden"
  >
    <Dropdown v-for="(item, key) in dataToChild" :key="key" :hospital="item" />
  </div>

  <!-- div for 1 hospital, multiple clinics (so, with popup directly) -->

  <div
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    v-if="itemReturnValue == 'departmentType3'"
    @click="handleClick"
    :class="{ clicked: handleCollapse }"
    class="doctorBox d-flex align-items-center"
  >
    <img :src="doctorImg" alt="" class="doctorImg" />

    <div class="textContainer d-flex flex-column">
      <div class="upperPart d-flex justify-content-between align-items-center">
        <div class="title">{{ title }}</div>
      </div>
      <div class="subtitleContainer d-flex">
        <span class="subTitle">{{ modalData[0].tenants[0].name }}</span>
      </div>
    </div>
  </div>

  <!-- modal for the above case, i.e. 1 hospital, multiple clients -->
  <teleport to="body">
    <div
      :key="dataToChild"
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
            <!-- <div v-for="(item, index) in dataToChild" :key="index">
              {{ item }}
            </div> -->

            <modal-box
              v-for="(item, key) in dropdownClinicData"
              :key="key"
              :clinic="item"
            />

            <button class="modalButton">
              <div class="modalButtonText">Seç</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../../../store";
import doctorImg from "../../../assets/img/randevuAkis/foto.svg";
import Dropdown from "./Dropdown.vue";
import ModalBox from "./ModalBox.vue";
import collapseImg from "../../../assets/img/randevuAkis/collapse.svg";
//you need to import router in each component you want to use it for some reason
import { useRouter } from "vue-router";
//define router
const router = useRouter();
const denemeData = ref([33, 44, 55]);

const dropdownClinicData = computed(
  () => store.getters["appointmentFlow/_getDropdownClinicData"]
);

const departmentType = {
  1: "departmentType1",
  2: "departmentType2",
  3: "departmentType3",
};

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
  itemId: { required: true, type: String },
  dropdownData: { required: true, type: Array },
  modelValue: { required: true, type: Number },
  modalData: { required: true, type: Array },
  generalData: { required: true, type: Object },
});

const emit = defineEmits(["update:modelValue"]);

const isCheck = ref(false);
const isClicked = ref(false);
const isCircleChosen = ref(false);
const shouldCollapse = ref(false);
const departments = ref();

// const handle = ref(false);
const handleClick = async () => {
  await emit("update:modelValue", props.itemId);

  if (props.modelValue == props.itemId) {
    isCheck.value = true;
  } else {
    isCheck.value = false;
  }
  console.log(props.itemId);
  changeBorderRadius();

  //commit to store
  store.commit("appointmentFlow/setDoctorName", props.title);
  store.commit("appointmentFlow/setDoctorId", props.itemId);

  //modalData is item.departments coming from the parent
  //this is the important one, I'll use this one to create the functionality of the dropdown
  console.log(props.generalData);
  departments.value = props.modalData;
  // console.log(props.generalData);
  findDepartmentType(props.generalData);
  console.log(dataToChild.value);
};

const handleCollapse = computed(() => {
  if (isCheck.value && props.itemId === props.modelValue) {
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
const tenantsData = ref();
const itemReturnValue = ref();
const findDepartmentType = (data) => {
  let returnValue,
    tenants = [];
  if (data.departments.length > 1) {
    returnValue = departmentType[3];
    data.departments.forEach((value, index) => {
      value.tenants.forEach((inValue, _index) => {
        tenants.push(inValue.id);
      });
    });

    if (tenants.filter((a, b) => tenants.indexOf(a) === b).length > 1) {
      returnValue = departmentType[2];
    } else {
      returnValue = departmentType[3];
    }
  } else {
    if (data.departments[0].tenants.length > 1) {
      returnValue = departmentType[2];
    } else {
      returnValue = departmentType[1];
    }
  }
  // console.log(returnValue);
  // console.log(tenants);
  tenantsData.value = tenants;
  itemReturnValue.value = returnValue;
  solveItAll(data);
  // console.log("returnValue" + returnValue);
  return returnValue;
};
let dataToChild = ref();

//this function should take a doctor's whole data as parameter
const solveItAll = (item) => {
  console.log("itemReturnValue " + itemReturnValue.value);
  //will loop over this data with v-for in dropdown
  //if there are 2 hospitals and 1 clinic...
  if (itemReturnValue.value == "departmentType2") {
    let idArray = [];
    //push all the ids of tenants into the array above
    //you have to loop over departments too
    item.departments.forEach((el, index) => {
      el.tenants.map((e) => {
        idArray.push(e.id);
      });
    });
    //use the set method and spread syntax to get rid of duplicate elements
    let uniqIdArray = [...new Set(idArray)];
    let uniqTenantNamesArray = uniqIdArray.map((e) => {
      if (e == 1) {
        return "Pusula Developer (Gebze)";
      } else {
        return "Ataşehir";
      }
    });
    dataToChild.value = uniqTenantNamesArray;
    console.log(uniqTenantNamesArray + "names");
    console.log("uniqIdArray " + uniqIdArray);
    console.log("department type 2");
    console.log("dataToChild.value " + dataToChild.value);
  }
  // if there's 1 hospital but more clinics...
  if (itemReturnValue.value == "departmentType3") {
    let departmentNamesArray = [];
    item.departments.map((e) => {
      departmentNamesArray.push(e.name);
    });
    let uniqDepartmentNamesArray = [...new Set(departmentNamesArray)];
    dataToChild.value = uniqDepartmentNamesArray;
    //commit to the store
    store.commit(
      "appointmentFlow/setDropdownClinicData",
      uniqDepartmentNamesArray
    );

    console.log("uniqDepartmentNamesArray" + uniqDepartmentNamesArray.length);
    console.log("department type 3");
    console.log("dataToChild.value " + dataToChild.value);
  } else {
    console.log("if I'm showing, itemReturnValue is 1 & no dropdown needed");
  }
  //if there's 1 hospital and 1 clinic...
  // console.log("dataToChild " + dataToChild.length);
  // console.log("this is " + JSON.stringify(item));
};

const handleShouldCollapse = async () => {
  let dropdownState = await findDepartmentType(props.generalData);
  if (dropdownState === "departmentType2") {
    shouldCollapse.value = true;
  } else {
    shouldCollapse.value = false;
  }
};

// handleShouldCollapse();

// else if (props.modalData.map) {
//     shouldCollapse.value = true;
//   }
onMounted(() => {
  //you can find the hospital name by querying this
  // console.log("dropdowndata" + JSON.stringify(props.dropdownData));
  departments.value = props.modalData;
  handleShouldCollapse();
  // console.log(props.modalData);
  // console.log("dropdown data => " + JSON.stringify(props.dropdownData));
  // console.log(` there are ${props.modalData.length} departments`);
  // findDepartmentType(props.generalData);
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
