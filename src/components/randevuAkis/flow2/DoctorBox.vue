<template>
  <div
    @click="handleClick"
    :class="{ clicked: handleCollapse }"
    class="doctorBox d-flex align-items-center justify-content-start"
  >
    <img :src="doctorImg" alt="" class="doctorImg" />
    <div class="textContainer d-flex flex-column">
      <div class="title">{{ title }}</div>
      <div class="subTitle">{{ subTitle }}</div>
    </div>
  </div>
  <div :class="{ collapsed: handleCollapse }" class="hidden">
    <Dropdown
      v-for="(item, key) in dropdownData"
      :key="key"
      :hospital="item.name"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import doctorImg from "../../../assets/img/randevuAkis/foto.svg";
import DropdownVue from "../../UI/RandevuAkis-OLD/Dropdown.vue";
import Dropdown from "./Dropdown.vue";

//handle circle on click
const handleCircle = () => {
  isCircleChosen.value = !isCircleChosen.value;
};

const props = defineProps({
  title: { required: true, type: String },
  subTitle: { required: true, type: String },
  collapseData: { required: true, type: Array },
  data: { required: true, type: String },
  dropdownData: { required: true, type: Array },
  modelValue: { required: true, type: Number },
});

const emit = defineEmits(["update:modelValue"]);

const isCheck = ref(false);
const isClicked = ref(false);
const isCircleChosen = ref(false);

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
</style>
