<template>
  <Master>
    <template v-slot:header><Header /></template>
    <template v-slot:sidebar><Sidebar /></template>
    <template v-slot:section>
      <div class="main-container col-md-12 col-lg-8 col-xl-8 col-xxl-9">
        <div class="titles d-flex justify-content-between align-items-center">
          <span class="bigTitle">Randevu Alma</span>
        </div>

        <div class="date-selection-header row">
          <div
            class="date-select col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7"
          >
            <h4 class="__title">Tarih Seçin</h4>
            <swiper
              :slides-per-view="9"
              :space-between="10"
              :navigation="true"
              :centeredSlides="true"
              :modules="modules"
              @swiper="onSwiper"
              :breakpoints="{
                '0': {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
                '571': {
                  slidesPerView: 9,
                  spaceBetween: 10,
                },
                '768': {
                  slidesPerView: 11,
                  spaceBetween: 10,
                },
                '1200': {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
                '1400': {
                  slidesPerView: 9,
                  spaceBetween: 10,
                },
              }"
              @slideChange="onSlideChange"
              class="date-selection-swiper"
            >
              <swiper-slide v-for="(item, key) in dates" :key="key">
                <div class="date-item" :class="[key === 3 ? 'active' : '']">
                  <div class="__dayInt">{{ item.dayInt }}</div>
                  <div class="__month">{{ item.month }}</div>
                  <div class="__dayStr">{{ item.dayStr }}</div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div
            class="user-choices col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5"
          >
            <h4 class="__title blue">Seçimleriniz</h4>
            <div class="__box">
              <div class="__box-item">
                <img :src="clinicLogoSvg" alt="" />
                <p><span>Bölüm: </span><span>Beslenme ve Diyet</span></p>
              </div>
              <div class="__box-item">
                <img :src="hospitalLogoSvg" alt="" />
                <p>
                  <span>Hastane: </span><span>{{ hospitalName }}</span>
                </p>
              </div>
              <div class="__box-item">
                <img :src="doktorLogoBlueSvg" alt="" />
                <p>
                  <span>Doktor: </span><span>Prof.Dr. Mehmet Balkanlı</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="date-selection-center col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7"
        >
          <h4 class="__title">Saat Seçin</h4>
          <div class="date-selection-hour">
            <div
              class="hour-item"
              v-for="(item, key) in hours"
              :key="key"
              :class="[key === 8 ? 'active' : '']"
            >
              <span>
                {{ item }}
              </span>
            </div>
          </div>
        </div>

        <div
          class="date-selection-bottom col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7"
        >
          <h4 class="__title">Bu Bölümdeki Diğer Doktorlarımız</h4>
          <div class="doctor-list">
            <div class="item" v-for="(item, key) in [1, 2, 3]" :key="key">
              <div class="left">
                <img :src="doctor" alt="" />
                <div class="left-item-box">
                  <span class="item-title">Prof. Dr. Mehmet Balkan</span>
                  <span class="item-hospital"
                    >Beslenme ve Diyet - Ataşehir</span
                  >
                </div>
              </div>
              <div class="right">
                <button>Seç</button>
              </div>
            </div>
          </div>
          <button class="act-btn" @click="setHospitalName">
            Randevuyu Tamamla
          </button>
        </div>
      </div>
    </template>
    <template v-slot:footer><Footer /></template>
  </Master>
</template>

<script setup>
import store from "../../store";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ref, onBeforeMount, onMounted, reactive, computed } from "vue";
// import hospitalLogoSvg from "../assets/img/randevuAkis/hospital.svg";
import clinicLogoSvg from "../../assets/img/randevuAkis/clinic.svg";
import doktorLogoBlueSvg from "../../assets/img/randevuAkis/doktorLogoBlue.svg";
import doctor from "../../assets/demo-data/doctor2.png";
import hospitalLogoSvg from "../../assets/img/randevuAkis/hospital.svg";
//you need to import router in each component you want to use it for some reason
import { useRouter } from "vue-router";
//define router
const router = useRouter();

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};

const modules = ref([Navigation]);

const dates = ref([
  { dayInt: "01", month: "Haz", dayStr: "Pt" },
  { dayInt: "02", month: "Haz", dayStr: "Sa" },
  { dayInt: "03", month: "Haz", dayStr: "Ça" },
  { dayInt: "04", month: "Haz", dayStr: "Pe" },
  { dayInt: "05", month: "Haz", dayStr: "Cu" },
  { dayInt: "06", month: "Haz", dayStr: "Ct" },
  { dayInt: "07", month: "Haz", dayStr: "Pa" },
  { dayInt: "08", month: "Haz", dayStr: "Pt" },
  { dayInt: "09", month: "Haz", dayStr: "Sa" },
  { dayInt: "10", month: "Haz", dayStr: "Ça" },
  { dayInt: "11", month: "Haz", dayStr: "Pe" },
  { dayInt: "12", month: "Haz", dayStr: "Cu" },
  { dayInt: "13", month: "Haz", dayStr: "Ct" },
  { dayInt: "14", month: "Haz", dayStr: "Pa" },
  { dayInt: "15", month: "Haz", dayStr: "Pt" },
  { dayInt: "16", month: "Haz", dayStr: "Sa" },
  { dayInt: "17", month: "Haz", dayStr: "Ça" },
  { dayInt: "18", month: "Haz", dayStr: "Pe" },
  { dayInt: "19", month: "Haz", dayStr: "Cu" },
  { dayInt: "20", month: "Haz", dayStr: "Ct" },
  { dayInt: "21", month: "Haz", dayStr: "Pa" },
  { dayInt: "22", month: "Haz", dayStr: "Pt" },
  { dayInt: "23", month: "Haz", dayStr: "Sa" },
  { dayInt: "24", month: "Haz", dayStr: "Ça" },
  { dayInt: "25", month: "Haz", dayStr: "Pe" },
  { dayInt: "26", month: "Haz", dayStr: "Cu" },
  { dayInt: "27", month: "Haz", dayStr: "Ct" },
  { dayInt: "28", month: "Haz", dayStr: "Pa" },
]);

const hours = ref([
  "09:00",
  "09:15",
  "09:30",
  "09:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
]);

const setHospitalName = () => {
  store.commit(
    "appointmentFlow/setHospitalName",
    "Buton İle Değişen Hastane İsmi"
  );
  router.push({ name: "Dashboard" });
};

const _hospitalName = store.getters["appointmentFlow/_getHospitalName"];
//bunu kullanacaksın
const hospitalName = computed(
  () => store.getters["appointmentFlow/_getHospitalName"]
);

// onMounted(() => {});
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.main-container {
  height: auto;
  background: $main;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  padding: 30px;

  .greyLine {
    height: 1px;
    background: $border;
  }
  .randevularGreyLine {
    margin-bottom: 25px;
    margin-top: 20px;
  }
  .titles {
    margin-top: 22px;
    margin-bottom: 20px;
  }
  .bigTitle {
    /* baslik3 */
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 130%;
    /* identical to box height, or 29px */
    /* Secondary */
    color: $blue;
  }
  .smallTitle {
    /* text4-bold */
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 130%;
    /* identical to box height, or 17px */
    letter-spacing: -0.01em;
    /* Gri */
    color: $text-grey;
  }
}

@media only screen and (max-width: 992px) {
  .main-container {
    border-top-right-radius: 0px;
  }
}
</style>

<style lang="scss">
@import "../../assets/scss/style";

.date-selection-swiper {
  margin-bottom: 45px;
  padding-left: 30px;
  padding-right: 30px;

  .swiper-button-prev {
    justify-content: flex-start;
    left: 0;
    height: 92px;
    width: 75px;
    top: 0;
    margin-top: initial;

    &:after {
      content: "";
      display: block;
      width: 10px;
      height: 17px;
      background: transparent
        url("/src/assets/img/carousel-navigation/left.png") no-repeat center
        center;
      background-size: 10px 17px;
      z-index: 2;
    }

    &::before {
      content: "";
      display: block;
      background: transparent
        linear-gradient(to right, $main 55%, transparent 100%);
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }

  .swiper-button-next {
    right: 0;
    height: 92px;
    top: 0;
    width: 75px;
    margin-top: initial;
    justify-content: flex-end;

    &:after {
      content: "";
      display: block;
      width: 10px;
      height: 17px;
      background: transparent
        url("/src/assets/img/carousel-navigation/right.png") no-repeat center
        center;
      background-size: 10px 17px;
      z-index: 1;
    }

    &::before {
      content: "";
      display: block;
      background: transparent
        linear-gradient(to left, $main 55%, transparent 100%);
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }

  .swiper-slide {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-content: center;
    justify-content: center;

    .date-item {
      background-color: #fff;
      padding: 0 6px;
      width: 40px;
      height: 72px;
      box-sizing: border-box;
      border-radius: 6px;
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.03);
      text-align: center;
      cursor: pointer;

      .__dayInt {
        color: $text;
        @include bold;
        font-size: 22px;
      }
      .__month {
        color: $text;
        @include bold;
        font-size: 10px;
      }
      .__dayStr {
        color: $text;
        @include bold;
        font-size: 15px;
      }

      &:hover,
      &.active {
        background-color: $orange;
        .__dayInt,
        .__month,
        .__dayStr {
          color: #fff;
        }
      }
    }
  }
}

.__title {
  color: $text;
  @include bold;
  font-size: 17px;
  margin-bottom: 18px;

  &.blue {
    background-color: transparent;
    color: $blue;
  }
}

.user-choices {
  margin-bottom: 45px;

  .__box {
    background-color: #fff;
    padding: 15px 17px;
    border-radius: 10px;

    .__box-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &:nth-last-child(1) {
        margin-bottom: 0;
      }

      p {
        margin-bottom: 0;
        padding-left: 13px;
        font-size: 13px;

        span {
          font-size: 13px;

          &:nth-child(1) {
            background-color: transparent;
            color: $blue;
          }
        }
      }
    }
  }
}

.date-selection-center {
  margin-bottom: calc(45px - 17px);
}

.date-selection-hour {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-left: -15px;
  margin-right: -15px;

  .hour-item {
    width: 16.66666666%;
    padding-left: 15px;
    padding-right: 15px;

    span {
      background-color: #fff;
      display: block;
      padding: 8px 10px;
      box-sizing: border-box;
      border-radius: 6px;
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.03);
      text-align: center;
      cursor: pointer;
      font-size: 16px;
      @include bold;
      margin-bottom: 17px;
    }

    &:hover,
    &.active {
      span {
        background-color: $blue;
        color: #fff;
      }
    }
  }
}

.date-selection-bottom {
}

.date-selection-bottom {
}

.doctor-list {
  margin-bottom: 30px;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.03);

    .left {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
        border-radius: 6px;
      }

      .left-item-box {
        margin-left: 13px;

        span {
          display: block;
        }

        .item-title {
          font-size: 16px;
          @include bold;
          color: $text;
        }

        .item-hospital {
          font-size: 14px;
          color: $text;
        }
      }
    }

    .right {
      padding-left: 13px;

      button {
        width: 62px;
        height: 32px;
        background-color: $orange;
        color: #fff;
        border: none;
        font-size: 14px;
        @include bold;
        border-radius: 6px;
      }
    }
  }
}

.act-btn {
  display: block;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  @include bold;
  background-color: $orange;
  width: 100%;
  color: #fff;
  height: 50px;
}

@media (max-width: 1399px) {
  .date-selection-hour {
    .hour-item {
      width: 20%;
    }
  }
}

@media (max-width: 1199px) {
  .date-selection-header {
    flex-direction: column-reverse;
  }

  .date-selection-hour {
    .hour-item {
      width: 16.666666%;
    }
  }
}

@media (max-width: 767px) {
  .date-selection-hour {
    .hour-item {
      width: 33.33333%;
    }
  }
}

@media (max-width: 500px) {
  .doctor-list {
    .item {
      flex-direction: column;
      align-items: flex-start;

      .left {
        width: 100%;
        margin-bottom: 13px;
      }

      .right {
        padding-left: 0;
        width: 100%;

        button {
          width: 100%;
        }
      }
    }
  }
}
</style>
