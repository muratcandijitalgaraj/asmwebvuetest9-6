<template>
  <div
    @click="click"
    :class="{ active: getCheck }"
    :id="data"
    class="choice d-flex flex-column justify-content-center align-items-center"
  >
    <div class="choiceTitle">{{ title }}</div>
    <div class="blueLineContainer d-flex align-items-end">
      <div class="blueLine"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import store from "../../../store";
import appointmentFlow from "../../../store/modules/appointment-flow";

const props = defineProps({
  title: { required: true, type: String },
  data: { required: true, type: Number },
  modelValue: { required: true, type: Number },
});

const emit = defineEmits(["update:modelValue"]);

// const handle = ref(false);
const click = async () => {
  await emit("update:modelValue", props.data);

  if (props.modelValue === props.data) {
    isCheck.value = true;
  } else {
    isCheck.value = false;
  }
  //we can give a number in state.section according to the title
  console.log(props.title);
  store.commit("appointmentFlow/switchContent", props.title);
};

const isCheck = ref(false);

const getCheck = computed(() => {
  if (isCheck.value && props.data === props.modelValue) {
    return true;
  }

  return false;
});
</script>

<style lang="scss" scoped>
.choice {
  height: 100%;
  margin-left: 1rem;
}
.choiceTitle {
  margin: 0 1rem 0 1rem;
  /* text02 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 140%;

  /* identical to box height, or 21px */
  display: flex;
  align-items: center;

  /* Primary */
  color: #3c4e69;
}
.blueLineContainer {
  position: relative;
  bottom: -0.8rem;
}
.blueLine {
  width: 25px;
  height: 5px;
  display: none;

  /* Secondary */
  background: #32a5df;
  border-radius: 4px 4px 0px 0px;
}
.active {
  .choiceTitle {
    color: #32a5df;
  }
  .blueLine {
    display: block;
  }
}
</style>
