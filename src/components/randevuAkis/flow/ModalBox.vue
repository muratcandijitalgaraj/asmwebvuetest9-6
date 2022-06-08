<template>
  <div
    @click="handleModalClick()"
    class="card d-flex flex-row justify-content-start align-items-center"
  >
    <div
      :class="[clinic.isGoing ? 'chosenCircle' : '']"
      class="circle d-flex justify-content-center align-items-center"
    >
      <img :src="checkMark" alt="" />
    </div>
    <div class="modalPara">{{ clinic.name }}</div>
  </div>
</template>

<script setup>
import checkMark from "../../../assets/img/randevuAkis/tick.svg";

const props = defineProps({
  clinic: { required: true, type: Object },
  // modelValue: { required: true, type: Number },
});

const handleModalClick = () => {
  props.clinic.isGoing = !props.clinic.isGoing;
  console.log(props.clinic.name);
};
</script>

<style scoped>
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
