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
        <div
          class="modal-header d-flex align-items-center justify-content-center"
        >
          <img :src="warning" alt="" />
        </div>
        <div class="modal-body d-flex flex-column align-items-center">
          <div class="bigTitle">
            Sonuç görüntüleme sayfasından “patoloji” raporlarınız
            görüntülenmemektedir.
          </div>
          <div class="para">
            Daha fazla bilgi için çağrı merkezimizi arayabilirsiniz.
          </div>
          <button class="orangeBtn">
            <div class="btnPara">Çağrı Merkezini Ara</div>
          </button>
          <button class="closeBtn">
            <div class="closePara">Kapat</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import warning from "../../../assets/img/medical-results/warning.svg";
</script>

<style scoped lang="scss">
.modal-content {
  background: #e9f3f9;
}
.modal-header {
  border: none;
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
  margin-bottom: 24px;
}

.para {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;

  /* or 22px */
  text-align: center;

  /* Primary */
  color: #3c4e69;
}
.orangeBtn {
  background: #ff7c32;
  border-radius: 6px;
  /* width: 297px; */
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: none;
  margin-top: 42px;
}
.btnPara {
  /* buton-text */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: #ffffff;
}
.closeBtn {
  /* width: 297px; */
  width: 100%;
  height: 50px;
  background: transparent;
  border: 1px solid #2e95df;
  border-radius: 6px;
  margin-top: 20px;
}
.closePara {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;

  /* identical to box height, or 21px */
  text-align: center;

  /* Button Secondary */
  color: #2e95df;
}
</style>
