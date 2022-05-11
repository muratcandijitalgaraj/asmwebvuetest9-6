<template>
  <div class="main">
    <!-- Button trigger modal -->
    <div
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </div>

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
          <div class="modal-header noBorder">
            <h5 class="modal-title" id="exampleModalLabel">Bölüm Seçin</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  height: 100vh;
}
.modal-content {
  width: 409px;
  height: 321px;
  background: #e9f3f9;
  border-radius: 16px;
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
.noBorder {
  border: none;
}
</style>
