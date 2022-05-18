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
      <div class="greyLine"></div>
      <Card
        v-for="(item, index) in data"
        :key="index"
        :logo="item.logo"
        :text="item.text"
        :boldText="item.boldText"
      />
      <div class="noteBtnContainer d-flex justify-content-center">
        <button class="noteBtn">
          <div class="noteBtnText">
            Hekiminize iletmek istediğiniz bir not var mı?
          </div>
        </button>
      </div>
      <div class="btnContainer col-12">
        <div class="btn">
          <div class="btnText">Tamamla</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import bigLogo from "../../../assets/img/randevuAkis/tick-circle.svg";
import doctorImg from "../../../assets/img/randevuAkis/doktor.svg";
import user from "../../../assets/img/randevuAkis/ozet-user.svg";
import calendar from "../../../assets/img/randevuAkis/ozet-calendar.svg";
import hospital from "../../../assets/img/randevuAkis/ozet-hospital.svg";

import Card from "./Card.vue";

const data = ref([
  {
    logo: user,
    text: "Kim için",
    boldText: "Mehmet Balkan",
  },
  {
    logo: calendar,
    text: "Tarih",
    boldText: "14 Ağustos 2020 - Pazartesi 15:30",
  },
  {
    logo: hospital,
    text: "Randevu Türü",
    boldText: "Ataşehir Tıp Merkezi",
  },
]);
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
  padding-right: 2rem;
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
  /* text3 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;

  /* identical to box height, or 21px */
  letter-spacing: -0.01em;

  /* Gri */
  color: #818b9a;
}
.greyLine {
  border: 1px solid #f3f3f3;
  margin-top: 1.5rem;
}
.noteBtnContainer {
  margin-bottom: 3rem;
}
.noteBtn {
  height: 50px;
  background: white;
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 10px;
  border: 1px solid #2e95df;
  padding: 1rem 1.5rem 1rem 1.5rem;
}
.noteBtnText {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 130%;

  /* or 18px */
  text-align: center;

  /* Button Secondary */
  color: #2e95df;
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 11px;
  gap: 10px;

  width: 875px;
  height: 50px;

  /* Turuncu */
  background: #ff8038;
  border-radius: 6px;
}
.btnText {
  /* buton-text-orta */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 110%;

  /* Beyaz */
  color: #ffffff;
}
</style>
