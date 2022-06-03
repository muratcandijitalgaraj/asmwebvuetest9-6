<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <div v-for="(item, index) in info" :key="index">
        <WhiteRectVue
          :imageUrl="item.imageUrl"
          :title="item.title"
          :text="item.text"
        />
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <div class="d-flex flex-column mt-3 align-items-center text-center">
        <img class="image" :src="image1" alt="" />
        <div class="d-flex flex-column mt-3 align-items-center">
          <span class="baslik2 textWidth"
            >Mobil uygulamamızı indirdiniz mi?</span
          >
          <span class="text3 textWidth mt-3"
            >Tüm sağlık ihtiyaçlarınıza telefonunuzdan ulaşın</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from "../../assets/img/carousel/1.svg";
import WhiteRectVue from "./WhiteRect.vue";
import phone from "../../assets/img/hesabim/phone.svg";
import mail from "../../assets/img/hesabim/mail.svg";

let info = [
  { title: "Cep Telefonu", text: "0555 666 77 88", imageUrl: phone },
  { title: "E-posta Adresiniz", text: "sample@gmail.com", imageUrl: mail },
];
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.baslik2 {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -1%;
  color: $title;
}
.text3 {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: -1%;
  color: $title;
}

.textWidth {
  width: 226px;
  height: 42px;
}
</style>
