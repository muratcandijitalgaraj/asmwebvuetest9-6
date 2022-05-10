<template>
  <div
    @click="handleClick"
    class="dropdownItem d-flex align-items-center justify-content-start"
  >
    <div :class="{ chosenCircle: isCircleChosen }" class="circle"></div>
    <div class="dropdownText">
      {{ hospital }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  hospital: { required: true, type: String },
  //   subTitle: { required: true, type: String },
  //   collapseData: { required: true, type: Array },
  //   data: { required: true, type: String },
  //   dropdownData: { required: true, type: Array },
  //   modelValue: { required: true, type: Number },
});

const emit = defineEmits(["update:modelValue"]);

const isCheck = ref(false);
const isClicked = ref(false);

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

const isCircleChosen = computed(() => {
  if (isCheck.value && props.data === props.modelValue) {
    return true;
  }

  return false;
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
</style>
