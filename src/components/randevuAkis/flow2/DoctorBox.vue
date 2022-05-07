<template>
  <div class="doctorBox d-flex align-items-center justify-content-start">
    <img :src="doctorImg" alt="" class="doctorImg" />
    <div class="textContainer d-flex flex-column">
      <div class="title">{{ title }}</div>
      <div class="subTitle">sth sth</div>
    </div>
  </div>
</template>

<script setup>
import doctorImg from "../../../assets/img/randevuAkis/foto.svg";

const props = defineProps({
  title: { required: true, type: String },
  subTitle: { required: true, type: String },
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
}
.doctorImg {
  margin-right: 1rem;
}
</style>
