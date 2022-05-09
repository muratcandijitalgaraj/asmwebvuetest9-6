<template>
  <div
    :class="{ collapse: handleCollapse }"
    @click="handleClick"
    class="doctorBox d-flex align-items-center justify-content-start"
  >
    <img :src="doctorImg" alt="" class="doctorImg" />
    <div class="textContainer d-flex flex-column">
      <div class="title">{{ title }}</div>
      <div class="subTitle">{{ subTitle }}</div>
    </div>
  </div>
  <div class="lol">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab vitae
    tenetur id tempore est, facilis aperiam odio, maiores laudantium possimus
    excepturi libero assumenda esse, ullam dolore! Quos, fugit deleniti.
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import doctorImg from "../../../assets/img/randevuAkis/foto.svg";

const props = defineProps({
  title: { required: true, type: String },
  subTitle: { required: true, type: String },
  collapseData: { required: true, type: Array },
  data: { required: true, type: String },
  modelValue: { required: true, type: Number },
});

const emit = defineEmits(["update:modelValue"]);

// const handle = ref(false);
const handleClick = async () => {
  await emit("update:modelValue", props.data);

  if (props.modelValue == props.data) {
    isCheck.value = true;
  } else {
    isCheck.value = false;
  }
  console.log(props.data);
};

const isCheck = ref(false);

const handleCollapse = computed(() => {
  if (isCheck.value && props.data === props.modelValue) {
    return true;
  }

  return false;
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
  margin-bottom: 1rem;
}
.doctorImg {
  margin-right: 1rem;
}
.collapse {
  border: 2px solid red;
}
</style>
