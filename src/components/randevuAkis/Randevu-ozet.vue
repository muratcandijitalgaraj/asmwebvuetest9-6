<template>
  <div class="main">
    <div class="jumbotron d-flex justify-content-center align-items-center">
      <img class="bigLogo" :src="bigLogo" alt="" />
      <div class="bigTitle">Randevunuz başarı ile oluşturuldu.</div>
    </div>
    <div class="whiteGround">
      <div class="doctorBox d-flex justify-content-start align-items-center">
        <img :src="doctorImg" alt="" class="doctorImg logo" />
        <div
          class="textGroup d-flex flex-column justify-content-center align-items-start"
        >
          <div class="boldText">Prof. Dr. Mehmet Ali Tahaoğlu</div>
          <div class="text">Göğüs Hastalıkları</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bigLogo from "../../assets/img/randevuAkis/tick-circle.svg";
import doctorImg from "../../assets/img/randevuAkis/doktor.svg";
</script>

<style lang="scss" scoped>
.bigLogo {
  margin-right: 2rem;
}
.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 130%;
  /* or 34px */
  letter-spacing: -0.01em;
  /* Primary */
  color: #3c4e69;
}
.whiteGround {
  width: 915px;
  height: 563px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 10px;
  margin-bottom: 6rem;
  margin-top: 2rem;
  margin-left: 1.5rem;
  padding-left: 2rem;
  padding-top: 2rem;
}
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
</style>
