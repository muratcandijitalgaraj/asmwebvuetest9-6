<template>
  <div class="main d-flex justify-content-center align-items-center">
    <div class="modelContent">
      <div class="upperPart d-flex justify-content-between">
        <div class="bigTitle">Bölüm Seçin</div>

        <i class="bi bi-x-square-fill"></i>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  height: 100vh;
}
.modelContent {
  width: 409px;
  height: 321px;
  background: #e9f3f9;
  border-radius: 16px;
  border: solid;
  padding: 2rem;
}
.upperPart {
}
.bigTitle {
  /* baslik-alt2 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  /* identical to box height, or 26px */
  letter-spacing: -0.01em;

  /* Primary */
  color: #3c4e69;
}
</style>
