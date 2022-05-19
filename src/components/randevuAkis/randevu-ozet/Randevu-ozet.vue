<template>
  <div class="main">
    <!-- add clouds -->
    <div class="container">
      <div class="jumbotron d-flex justify-content-center align-items-center">
        <img :src="clouds" alt="" class="clouds" />
        <div class="jumbotronTitle">
          <img class="bigLogo" :src="bigLogo" alt="" />
          <div class="bigTitle">Randevunuz başarı ile oluşturuldu.</div>
        </div>
      </div>
      <div class="whiteGround">
        <div class="doctorBox d-flex justify-content-start align-items-center">
          <img :src="doctorImg" alt="" class="doctorImg logo" />
          <div
            class="textGroup d-flex flex-column justify-content-center align-items-start"
          >
            <div class="boldText">{{ appointment.doctor }}</div>
            <div class="text">{{ appointment.department }}</div>
          </div>
        </div>
        <div class="greyLine"></div>
        <div :key="componentKey">
          <Card
            v-for="(item, index) in data"
            :key="index"
            :logo="item.logo"
            :text="item.text"
            :boldText="item.boldText"
            :handleDisplay="item.handleDisplay"
          />
        </div>
        <div
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="noteBtnContainer d-flex justify-content-center"
        >
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

    <!-- Modal -->
    <teleport to="body">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content noteSection">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <div class="noteTitle">Notunuzu Yazın</div>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Notunuzu buraya yazabilirsiniz"
                class="noteWhiteBoard"
                v-model="userNote"
              ></textarea>
              <div
                data-bs-dismiss="modal"
                @click="saveUserInput"
                class="noteButtonContainer d-flex justify-content-center align-items-center"
              >
                <div
                  class="noteButton d-flex justify-content-center align-items-center"
                >
                  <div class="noteButtonText">Kaydet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, reactive } from "vue";
import store from "../../../store";
import bigLogo from "../../../assets/img/randevuAkis/tick-circle.svg";
import doctorImg from "../../../assets/img/randevuAkis/doktor.svg";
import user from "../../../assets/img/randevuAkis/ozet-user.svg";
import calendar from "../../../assets/img/randevuAkis/ozet-calendar.svg";
import hospital from "../../../assets/img/randevuAkis/ozet-hospital.svg";
import flash from "../../../assets/img/randevuAkis/flash.svg";
import clouds from "../../../assets/img/randevuAkis/clouds.svg";
import Card from "./Card.vue";

//I imported the followwing from Gökhan's code in appointments
//I'l make some adjustments
const appointments = ref([]);
const individualAppointment = ref([]);
const appointment = reactive({
  doctor: "",
  department: "",
  date: "",
  appointmentType: "",
});

onMounted(() => {
  store
    .dispatch("appointmentFlow/getAppointments")
    .then((res) => {
      appointments.value = res?.data?.items;
      individualAppointment.value = res?.data?.items[1];
      console.log(res.data);
      console.log(individualAppointment.value);
      //reactive object here
      appointment.doctor = res?.data?.items[1].resources[0].resourceName;
      appointment.department = res?.data?.items[1].resources[0].departmentName;
      appointment.date = res?.data?.items[1].resources[0].from;
      appointment.appointmentType = res?.data?.items[1].resources[0].tenantName;
    })
    .catch((err) => console.log(err.response));
});
//important code ends here

const userNote = ref("");
const componentKey = ref(false);

const saveUserInput = () => {
  console.log(userNote.value);
  data.value[3].boldText = userNote.value;
  data.value[3].handleDisplay = "show";
  // store.commit("getUserNote", userNote.value);
  // console.log(store.state.appointmentFlow.userNote);
  // componentKey.value = true;
};

const data = ref([
  {
    logo: user,
    text: "Kim için",
    boldText: "Mehmet Balkan",
  },
  {
    logo: calendar,
    text: "Tarih",
    boldText: appointment.date,
  },
  {
    logo: hospital,
    text: "Randevu Türü",
    boldText: appointment.appointmentType,
  },
  {
    logo: flash,
    text: "Şikayet",
    boldText: "",
    handleDisplay: "hide",
  },
]);
</script>

<style lang="scss" scoped>
.main {
  // z-index: 1;
}
.jumbotron {
  position: relative;
  z-index: 2;
}
.jumbotronTitle {
  position: relative;
  z-index: 1;
}
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
  width: auto;
  height: auto;
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
  padding-bottom: 2rem;
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
  height: auto;
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
.btnContainer {
  // margin-bottom: 2rem;
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 11px;
  gap: 10px;

  width: 100%;
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
.clouds {
  position: absolute;
  z-index: 0;
  //position absolute iken elementi bu şekilde ( bu 3ü ile) ortalarsın
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  max-width: 100%;
}
// @media only screen and (max-width: 992px) {
//   .clouds {
//     top: 27rem;
//   }
// }
//modal starts here
.modal-header {
  border: none;
}
.noteSection {
  width: 520px;
  height: 610px;
  padding: 1.5rem;
  background: #e9f3f9;
  border-radius: 16px;
}
.noteTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  /* identical to box height, or 26px */
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
  /* Primary */
  color: #3c4e69;
}
.noteWhiteBoard {
  width: 100%;
  height: 80%;
}
::placeholder {
  /* text02 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 140%;

  /* identical to box height, or 21px */

  /* menu off */
  color: #a4abb6;
}
.noteButtonContainer {
  margin-top: 1.5rem;
}
.noteButton {
  background: #ff7c32;
  border-radius: 6px;
  height: 50px;
  width: 100%;
}
.noteButtonText {
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;

  /* identical to box height, or 21px */
  text-align: center;

  /* Beyaz */
  color: #ffffff;
}
</style>
