<template>
  <div @click="click" :class="{ active: getCheck }" :id="data" class="choice">
    <div class="choiceTitle">{{ title }}</div>
    <div class="blueLine"></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

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
.active {
  .choiceTitle {
    color: #32a5df;
  }
}
</style>
