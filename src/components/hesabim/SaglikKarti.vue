<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column aling-items-center mb-4">
          <div><span class="text2">Kan Grubu</span></div>
          <div><span class="baslik2">A (RH+)</span></div>
        </div>
        <div class="greyLine"></div>
        <div class="d-flex flex-column aling-items-center">
          <div><span class="text2">Boy</span></div>
          <div><span class="baslik2">185 cm</span></div>
        </div>
        <div class="greyLine"></div>

        <div class="d-flex flex-column aling-items-center">
          <div><span class="text2">Kilo</span></div>
          <div><span class="baslik2">76 kg</span></div>
        </div>
      </div>
      <div v-for="(item, index) in info" :key="index">
        <WhiteRectVue
          :title="item.title"
          :text="item.text"
          :text2="item.text2"
        />
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <div class="d-flex flex-column mt-3 align-items-center text-center">
        <img class="image" :src="image3" alt="" />
        <div class="d-flex flex-column mt-3 align-items-center">
          <span class="baslik2 textWidth"
            >Test sonuçlarınızı ve raporlarınızı anında görüntüleyin</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image3 from "../../assets/img/carousel/3.svg";
import WhiteRectVue from "./WhiteRect.vue";

let info = [
  { title: "Kronik bir rahatsızlığınız var mı?", text: "Diyabet / Guatr" },
  {
    title: "Aile bireylerinde bulunan kronik bir rahatsızlık var mı?",
    text: "Kardesim / Guatr",
    text2: "Babam / Kan Hastalığı",
  },
  { title: "Herhangi bir alerjin var mı?", text: "" },
  { title: "Rutin olarak kullandığın ilaçlar var mı?", text: "" },
];
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.baslik2 {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -1%;
  color: $title;
}

.text2 {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
  letter-spacing: -1%;
  color: $blue;
}
.greyLine {
  height: 55px;
  width: 1px;
  border: 1px solid #dae9f1;
  margin: 0px 25px;
}
.textWidth {
  width: 226px;
  height: 42px;
}
</style>
