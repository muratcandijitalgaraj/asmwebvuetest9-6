<template>
  <div class="paymentComp">
    <div class="bigTitle">Kredi Kartı ile Ödeme</div>
    <div class="greyLine"></div>
    <div class="body d-flex flex-column flex-lg-row justify-content-around">
      <div class="leftPart col-12 col-lg-5">
        <input
          type="text"
          class="inputField"
          placeholder="Kart Üzerindeki İsim Soyisim"
        />
        <input type="text" class="inputField" placeholder="Kart Numarası" />
        <input
          type="text"
          class="inputField"
          placeholder="Son Kullanma Tarihi"
        />
        <input type="text" class="inputField" placeholder="CVC No" />
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexSwitchCheckChecked"
            >Kullanıcı sözleşmesini onaylıyorum</label
          >
        </div>
        <div
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="btnContainer col-12"
        >
          <div class="btn">
            <div @click="handleSuccess" class="btnText">Ödeme Yap</div>
          </div>
        </div>
      </div>
      <div class="rightPart col-12 col-lg-5">
        <div
          class="blueCard d-flex flex-row justify-content-start align-items-center"
        >
          <img class="logo" :src="odemeLogo" alt="" />
          <div class="whiteTitle">Hesap Detay</div>
        </div>
        <div
          class="hesapCard d-flex justify-content-between align-items-center"
        >
          <div class="cardText hesapItem">Online Görüşme Ücreti</div>
          <div class="cardNumber hesapItem">39,90 TL</div>
        </div>
        <div class="shortLine"></div>
        <div
          class="hesapCard d-flex justify-content-between align-items-center"
        >
          <div class="cardText hesapItem">KDV %85</div>
          <div class="cardNumber hesapItem">2,25 TL</div>
        </div>
        <div class="shortLine"></div>
        <div
          class="hesapCard d-flex justify-content-between align-items-center"
        >
          <div class="cardText hesapItem orangeText">KDV %85</div>
          <div class="cardNumber hesapItem orangeText">2,25 TL</div>
        </div>
        <div class="shortLine"></div>
        <div
          class="hesapCard d-flex justify-content-between align-items-center"
        >
          <div class="cardText hesapItem boldText">Toplam</div>
          <div class="cardNumber hesapItem boldText">400,25 TL</div>
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
                <img
                  v-if="success"
                  :src="positiveFrame"
                  alt=""
                  class="positiveFrame"
                />
                <!-- case failure -->
                <img
                  v-if="failure"
                  :src="negativeFrame"
                  alt=""
                  class="positiveFrame"
                />
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div v-if="success" class="caseSuccess">
                <div class="modalTitle">
                  Ödemeniz başarılı bir şekilde yapıldı ve randevunuz
                  oluşturuldu.
                </div>
                <div class="modalBtnContainer d-flex justify-content-center">
                  <div class="modalBtn">
                    <div class="modalBtnText">Tamamdır</div>
                  </div>
                </div>
              </div>
              <!-- case failure -->
              <div v-if="failure" class="caseFailure">
                <div class="modalTitle">
                  Ödemeniz yapılamadı, lütfen tekrar deneyin.
                </div>
                <div class="modalBtnContainer d-flex justify-content-center">
                  <div class="modalBtn">
                    <div class="modalBtnText">Tamamdır</div>
                  </div>
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
import { ref } from "vue";
import odemeLogo from "../../../assets/img/randevuAkis/odemeLogo.svg";
import positiveFrame from "../../../assets/img/randevuAkis/positiveFrame.svg";
import negativeFrame from "../../../assets/img/randevuAkis/negativeFrame.svg";

const success = ref(true);
const failure = ref(false);

const handleSuccess = () => {
  //write a function according to the response from the API
};
</script>

<style lang="scss" scoped>
.bigTitle {
  /* baslik3 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;

  /* identical to box height, or 29px */

  /* Primary */
  color: #3c4e69;
}
.greyLine {
  border: 1px solid #dae9f1;
  margin-top: 1.5rem;
}
.leftPart {
  margin-bottom: 3rem;
}
.shortLine {
  border: 1px solid #f3f3f3;
}
.inputField {
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  width: 100%;
  height: 60px;
  border: none;
  padding-left: 1rem;
  margin-bottom: 20px;
  /* form-text */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;

  /* identical to box height, or 16px */

  /* Primary */
  color: #3c4e69;
}
::placeholder {
  /* form-baslik */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;

  /* identical to box height, or 16px */
  letter-spacing: -0.01em;

  /* Gri */
  color: #818b9a;
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
.rightPart {
  background: #ffffff;

  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  margin-bottom: 2rem;
}
.blueCard {
  background: #32a5df;
  border-radius: 6px 6px 0px 0px;
  width: 100%;
  height: 56px;
  padding-left: 0.5rem;
}
.whiteTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;

  /* identical to box height, or 22px */
  letter-spacing: -0.01em;

  /* Beyaz */
  color: #ffffff;
  margin-left: 10px;
}
.hesapItem {
  /* text3 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;

  /* identical to box height, or 21px */
  letter-spacing: -0.01em;

  /* Primary */
  color: #3c4e69;
}
.hesapCard {
  height: 50px;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
.orangeText {
  color: #ff8038;
}
.boldText {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  /* identical to box height, or 24px */

  /* Primary */
  color: #3c4e69;
}
.modal-dialog {
}
.modal-content {
  background: #e9f3f9;
  border-radius: 16px;
  width: 675px;
  height: auto;
}
.modal-header {
  border: none;
}
.modalTitle {
  /* baslik-alt1 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 130%;

  /* or 34px */
  text-align: center;
  letter-spacing: -0.01em;

  /* Primary */
  color: #3c4e69;
  margin-top: 23px;
  margin-bottom: 36px;
}
.modalBtnContainer {
  /* Auto layout */
  margin-bottom: 40px;
  width: 100%;
  height: 50px;
}
.modalBtn {
  width: 300px;
  height: 50px;
  padding: 12px 20px 11px;
  gap: 10px;
  background: #ff8038;
  border-radius: 6px;
}
.modalBtnText {
  /* buton-text-orta */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 110%;

  /* identical to box height, or 18px */

  text-align: center;

  /* Beyaz */
  color: #ffffff;
}
</style>
