<template>
  <div class="whiteRectangle">
    <div class="d-flex flex-row align-items-center whiteRectangleContent">
      <img v-if="imageUrl" class="image" :src="imageUrl" alt="" />

      <div
        :class="[
          text
            ? 'd-flex flex-column whiteRectangleContent'
            : 'whiteRectangleContent mt-2',
        ]"
      >
        <div>
          <span :class="[text ? 'ufakBaslik' : 'ufakBaslik2']">{{
            title
          }}</span>
        </div>
        <div v-if="text">
          <span class="text1">{{ text }}</span>
        </div>
        <div v-if="text2">
          <span class="text1">{{ text2 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import phone from "../../assets/img/hesabim/phone.svg";
const props = defineProps({
  imageUrl: String,
  title: String,
  text: String,
  text2: String,
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.whiteRectangle {
  position: relative;
  background-color: #fff;
  width: 100%;
  min-height: 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  padding: 5px;
  margin-bottom: 20px;
}

.whiteRectangleContent {
  margin-left: 10px;
}
.ufakBaslik {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: -1%;
  color: $text-grey;
}
.ufakBaslik2 {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -1%;
  color: $text-grey;
}
.text1 {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -1%;
  color: $title;
}
</style>
