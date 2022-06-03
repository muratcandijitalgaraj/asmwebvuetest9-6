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
        <img class="image" :src="image2" alt="" />
        <div class="d-flex flex-column mt-3 align-items-center">
          <span class="baslik2 textWidth"
            >Online olarak doktorunuzla görüşün.</span
          >
          <span class="text3 textWidth mt-3"
            >Telefon veya bilgisayarınızı kullanarak doktorunuzla
            görüşebilirsiniz.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image2 from "../../assets/img/carousel/2.svg";
import WhiteRectVue from "./WhiteRect.vue";
import user from "../../assets/img/hesabim/user.svg";
import cake from "../../assets/img/hesabim/cake.svg";
import link from "../../assets/img/hesabim/link.svg";
import location from "../../assets/img/hesabim/location.svg";

let info = [
  { title: "T.C Kimlik No", text: "656566565545", imageUrl: user },
  { title: "Doğum Tarihi", text: "16.06.1980", imageUrl: cake },
  { title: "Cinsiyet", text: "Kadın", imageUrl: link },
  { title: "Ülke", text: "Türkiye", imageUrl: location },
  { title: "Şehir", text: "İstanbul", imageUrl: location },
  { title: "İlçe", text: "Şişli", imageUrl: location },
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
