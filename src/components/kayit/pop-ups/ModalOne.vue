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
          <p class="modal-title modalTitle" id="exampleModalLabel">
            Aynı kimlik bilgileri ile farklı telefon numarasına kaydınız
            bulunuyor. Lütfen doğrulama işlemi yapınız.
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            v-for="(item, key) in telNumbers"
            :key="key"
            class="card d-flex flex-row justify-content-around align-items-center"
          >
            <img :src="logo" alt="" />
            <div class="telNo">{{ item }}</div>
            <div class="buttonContainer">
              <button class="approveBtn">
                <p class="approveText">Doğrula</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logo from "../../../assets/img/kayit/ico.svg";
const telNumbers = ref(["05526897548", "05585526699", "05522669987"]);
</script>

<style scoped lang="scss">
.modal-content {
  background: #e9f3f9;
  padding: 2.3rem 2rem;
}
.modalTitle {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 140%;

  /* or 24px */
  letter-spacing: -0.01em;

  /* Primary */
  color: #3c4e69;
}
.modal-header {
  border: none;
}
.card {
  width: 341px;
  height: 70px;
  background: #ffffff;

  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  border-radius: 6px;
}
.telNo {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  /* identical to box height, or 24px */

  /* Primary */
  color: #3c4e69;
}
.buttonContainer {
  /* Button Primary */
  background: #ff7c32;
  border-radius: 6px;
  width: 5rem;
  height: 2rem;
}
.approveBtn {
  width: 5rem;
  height: 2rem;
  background: transparent;
  border: none;
}

.approveText {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;

  text-align: center;

  color: #ffffff;
  width: auto;
  height: auto;
}
</style>
