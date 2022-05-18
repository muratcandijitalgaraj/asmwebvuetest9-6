<template>
  <div class="card">
    <img :src="logo" alt="" class="logo" />
    <div class="textGroup">
      <div class="text">{{ text }}</div>
      <div class="boldText">{{ boldText }}</div>
    </div>
    <div class="greyLine"></div>
  </div>
</template>

<script setup>
import user from "../../../assets/img/randevuAkis/ozet-user.svg";
import calendar from "../../../assets/img/randevuAkis/ozet-calendar.svg";
import hospital from "../../../assets/img/randevuAkis/ozet-hospital.svg";

const props = defineProps({
  logo: { required: true, type: String },
  text: { required: true, type: String },
  boldText: { required: true, type: String },
});
</script>

<style lang="scss" scoped>
.logo {
  margin-right: 1rem;
}
.boldText {
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
.text {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;

  /* identical to box height, or 21px */
  letter-spacing: -0.01em;

  /* Primary */
  color: #3c4e69;
}
.greyLine {
  border: 1px solid #f3f3f3;
  margin-top: 1.5rem;
}
</style>
