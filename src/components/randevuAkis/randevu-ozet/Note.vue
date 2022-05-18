<template>
  <div class="main">
    <div class="topPart d-flex justify-content-between align-items-center">
      <div class="title">Notunuzu Yazın</div>
      <img src="" alt="" class="closeButton" />
    </div>
    <input
      placeholder="Notunuzu buraya yazabilirsiniz"
      type="text"
      class="whiteBoard"
    />
    <div
      class="buttonContainer d-flex justify-content-center align-items-center"
    >
      <div class="button d-flex justify-content-center align-items-center">
        <div class="buttonText">Kaydet</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  width: 520px;
  height: 610px;
  padding: 1.5rem;
  background: #e9f3f9;
  border-radius: 16px;
}
.title {
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
.whiteBoard {
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
.buttonContainer {
}
.button {
  background: #ff7c32;
  border-radius: 6px;
  height: 50px;
  width: 100%;
}
.buttonText {
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
