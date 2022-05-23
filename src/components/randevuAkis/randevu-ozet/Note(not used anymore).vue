<template>
  <div class="noteSection">
    <div class="topPart d-flex justify-content-between align-items-center">
      <div class="noteTitle">Notunuzu Yazın</div>
      <img src="" alt="" class="closeButton" />
    </div>
    <input
      placeholder="Notunuzu buraya yazabilirsiniz"
      type="text"
      class="noteWhiteBoard"
    />
    <div
      class="noteButtonContainer d-flex justify-content-center align-items-center"
    >
      <div class="noteButton d-flex justify-content-center align-items-center">
        <div data-bs-dismiss="modal" class="noteButtonText">Kaydet</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
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
