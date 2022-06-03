<template>
  <div class="row">
    <div
      class="topContainer d-flex justify-content-between col-md-8 col-lg-8 col-xl-8 col-xxl-6"
    >
      <span
        class="item bigTitle d-flex justify-content-center justify-content-xl-start"
        >Hesabım
      </span>
      <div
        class="item clickContainer d-flex flex-column align-items-center align-items-xl-end"
      >
        <span
          @click="selectTitle(0)"
          :class="[selectedTitle === 0 ? 'blueTitle' : '', 'title']"
          >Hesap Bilgileri</span
        >
        <div
          v-if="selectedTitle === 0"
          class="lineContainer d-flex justify-content-center"
        >
          <div class="blueLine"></div>
        </div>
      </div>
      <div
        class="item clickContainer d-flex flex-column align-items-center align-items-xl-start"
      >
        <span
          @click="selectTitle(1)"
          :class="[selectedTitle === 1 ? 'blueTitle' : '', 'title']"
          >Kişisel Bilgiler</span
        >
        <div
          v-if="selectedTitle === 1"
          class="lineContainer d-flex justify-content-center"
        >
          <div class="blueLine"></div>
        </div>
      </div>
      <div
        class="item clickContainer d-flex flex-column align-items-center align-items-xl-start"
      >
        <span
          :class="[selectedTitle === 2 ? 'blueTitle' : '', 'title']"
          @click="selectTitle(2)"
          >Sağlık Kartı</span
        >
        <div
          v-if="selectedTitle === 2"
          class="lineContainer d-flex justify-content-center"
        >
          <div class="blueLine"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ selectedTitle: Number, selectTitle: Function });
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";
.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 95%;
  /* identical to box height, or 29px */

  /* Primary */

  color: $title;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  cursor: pointer;
  color: $title;
  //   margin-bottom: 20px;
}

.blueTitle {
  color: $blue;
}

.lineContainer {
  width: 100%;
  height: 100%;
}
.blueLine {
  position: relative;
  top: 25px;
  width: 25px;
  height: 5px;
  background: $blue;
  border-radius: 4px 4px 0px 0px;
}

@media only screen and (max-width: 991px) {
  .topContainer {
    flex-direction: column !important;
  }
  .item {
    margin-bottom: 5px;
    padding-left: 0px !important;
  }
  .blueLine {
    display: none;
  }
}
</style>
