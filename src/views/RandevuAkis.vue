<template>
  <Master>
    <template v-slot:header><Header /></template>
    <template v-slot:sidebar><Sidebar /></template>
    <template v-slot:section>
      <!-- your code comes here -->
      <div class="zemin col-md-12 col-lg-8 col-xl-8 col-xxl-9">
        <!-- <h2 class="bigTitle">Randevu Alın</h2>
        <div class="greyLine"></div> -->
        <div v-if="flowToken === 1">
          <SecimVue />
        </div>
        <div v-if="flowToken === 2">
          <FlowComponent />
        </div>
        <!-- <div v-if="flowToken === 3"><TarihSecimVue /></div> -->
        <div v-if="flowToken === 4"><RandevuOzetVue /></div>
        <div v-if="flowToken === 5"><PaymentVue /></div>
      </div>
    </template>
    <template v-slot:footer><Footer /></template>
  </Master>
</template>

<script setup>
//will put v-ifs checking with a data in state
import SecimVue from "../components/randevuAkis/Secim.vue";
import FlowComponent from "../components/randevuAkis/flow/Flow.vue";
import RandevuOzetVue from "../components/randevuAkis/randevu-ozet/Randevu-ozet.vue";
import PaymentVue from "../components/randevuAkis/payment/Payment.vue";
import TarihSecimVue from "../components/randevuAkis/TarihSecim.vue";
import store from "../store";
import { computed, onMounted } from "vue";
//page changer functionality
//this usage is wrong
// const _flowToken = store.getters["appointmentFlow/_getFlowToken"];
//bunu kullanacaksın
const flowToken = computed(
  () => store.getters["appointmentFlow/_getFlowToken"]
);

onMounted(() => {
  console.log(flowToken);
});
</script>

<style lang="scss" scoped>
.zemin {
  // width: 60%;
  height: auto;
  background: #f2f8fb;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-top: 2rem;
}
.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */
  /* Primary */
  color: #3c4e69;
  margin-left: 1rem;
}
.greyLine {
  border: 1px solid #dae9f1;
  margin: 30px 0;
}
@media only screen and (max-width: 992px) {
  .zemin {
    width: 100%;
    border-top-right-radius: 0;
    border-bottom-left-radius: 18px;
  }
}
</style>
