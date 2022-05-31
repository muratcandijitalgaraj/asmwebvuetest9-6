<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title modalTitle" id="exampleModalLabel"></p>
          <button class="button smallBtn">
            <div class="smallBtnPara">GERİ DÖN</div>
          </button>
        </div>
        <div
          class="modal-body d-flex flex-column justify-content-center align-items-center"
        >
          <div
            class="timer d-flex flex-row justify-content-center align-items-center"
          >
            <img :src="clock" alt="" class="timerLogo" />
            <div class="timerPara">00:59</div>
          </div>
          <div class="bigTitle">
            Doğrulama kodun <br />
            <span class="orangePara">0555 666 77 88 </span> numarasına
            iletilmiştir.
          </div>
          <input placeholder="SMS Kodu" type="text" class="card" />
          <button class="button bigBtn">
            <div class="bigBtnPara">Doğrula</div>
          </button>
          <div class="smallTitle">Telefonunuza şifre gelmedi mi?</div>
          <button class="button blueBtn">
            <div class="blueBtnPara">Tekrar Gönder</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import clock from "../../../assets/img/kayit/clock.svg";
</script>

<style scoped lang="scss">
.modal-content {
  background: #e9f3f9;
}
.modal-header {
  border: none;
}
.timer {
  width: 101px;
  height: 36px;

  background: #ffffff;
  box-shadow: 0px 1px 4px #e3ebee;
  border-radius: 60px;
  margin-bottom: 25px;
}
.timerPara {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;

  /* identical to box height, or 22px */

  /* Secondary */
  color: #32a5df;
  margin-left: 8px;
}
.bigTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 130%;

  /* or 26px */
  text-align: center;
  letter-spacing: -0.01em;

  /* Primary */
  color: #3c4e69;
  padding: 0 7rem 0 7rem;
}
.orangePara {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 130%;

  /* or 26px */
  text-align: center;
  letter-spacing: -0.01em;
  color: #ff8038;
}
.card {
  width: 341px;
  height: 56px;

  background: #ffffff;

  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  margin-top: 42px;
  margin-bottom: 30px;
  padding-left: 1rem;
  padding-top: 1rem;
}
.button {
  background: #ff7c32;
  border-radius: 6px;
  border: none;
}
.bigBtn {
  width: 341px;
  height: 56px;
  margin-bottom: 96px;
}
.bigBtnPara {
  /* buton-text */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;

  /* identical to box height, or 21px */
  text-align: center;

  /* Beyaz */
  color: #ffffff;
}
.smallBtn {
  width: 86px;
  height: 30px;
}
.smallBtnPara {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;

  /* identical to box height, or 16px */

  color: #ffffff;
}
.smallTitle {
  /* text02 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 140%;

  /* identical to box height, or 21px */

  /* Primary */
  color: #3c4e69;
}
.blueBtn {
  background: #2e95df;
  padding: 10px;
  margin-top: 10px;
}
.blueBtnPara {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;

  /* or 18px */
  text-align: center;

  /* Beyaz */
  color: #ffffff;
}
::placeholder {
  /* text01 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  /* or 22px */

  /* Gri */
  color: #818b9a;
}
</style>
