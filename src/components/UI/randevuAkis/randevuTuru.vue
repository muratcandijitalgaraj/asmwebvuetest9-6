<template>
  <div class="main">
    <h3 class="title">Randeuvu türünü seçin</h3>
    <Box
      v-for="(item, key) in boxes"
      :key="key"
      :name="item.name"
      :data="item.data"
      v-model="appointmentType"
    />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Box from "./Box.vue";
//geçici olarka kullanıcı bilgilerini burada alıyoruz.
import appAxios from "../../../utils/appAxios";
import store from "../../../store";

const user = ref({});
//this will be changed to hospital type

onMounted(() => {
  store
    .dispatch("appointmentFlow/getUser")
    .then((res) => {
      console.log(res.data);
      user.value = res.data;
    })
    .catch((err) => console.log(err.response));
});

//toggle functionality
const appointmentType = ref(0);

const boxes = ref([
  { name: "Hastane", data: 1 },
  { name: "Görüntülü Görüşme", data: 2 },
]);
</script>

<style lang="scss" scoped>
.title {
  width: 249px;
  height: 22px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;
  /* identical to box height, or 22px */

  letter-spacing: -0.01em;
  margin-bottom: 1rem;

  /* Primary */

  color: #3c4e69;
}
.wrapper {
  width: 341px;
  height: 47px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
  margin-bottom: 17px;
}
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  margin: 0 12px;
}
.name {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* Primary */

  color: #3c4e69;
}
.checkMark {
  display: none;
}
.active {
  background: #32a5df;
  .profileName {
    color: white;
  }
  .circle {
    background: white;
  }
  .checkMark {
    display: inline-block;
  }
}
</style>
