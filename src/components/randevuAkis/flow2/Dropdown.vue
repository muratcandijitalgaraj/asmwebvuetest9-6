<template>
  <div
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    @click="handleClick"
    class="dropdownItem d-flex align-items-center justify-content-start"
  >
    <div
      :class="{ chosenCircle: isCircleChosen }"
      class="circle d-flex justify-content-center align-items-center"
    >
      <img :src="checkMark" alt="" />
    </div>
    <div class="dropdownText">
      {{ hospital }}
    </div>

    <teleport to="body">
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
              <h5 class="modal-title" id="exampleModalLabel">Bölüm Seçin</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="modal-body d-flex flex-column justify-content-center align-items-center"
            >
              content goes here
              <button class="modalButton">
                <div class="modalButtonText">Seç</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import checkMark from "../../../assets/img/randevuAkis/tick.svg";
const props = defineProps({
  hospital: { required: true, type: String },
  dropdownData: { required: true, type: String },
  modelValue: { required: true, type: Number },
});

const emit = defineEmits(["update:modelValue"]);

const isCheck = ref(false);
const isClicked = ref(false);

// const handle = ref(false);
const handleClick = async () => {
  await emit("update:modelValue", props.dropdownData);

  if (props.modelValue == props.dropdownData) {
    isCheck.value = true;
  } else {
    isCheck.value = false;
  }
  console.log(props.dropdownData);
};

const isCircleChosen = computed(() => {
  if (isCheck.value && props.dropdownData === props.modelValue) {
    return true;
  }

  return false;
});
</script>

<style scoped lang="scss">
.dropdownItem {
  max-width: 500px;
  width: auto;
  height: 70px;
  background: #ffffff;
  /* Boxx Shadow */
  box-shadow: 0px 1px 3px rgba(42, 49, 55, 0.11);
  padding-left: 1rem;
  border-top: 1px solid #f3f3f3;
}
.dropdownText {
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
.circle {
  width: 20px;
  height: 20px;
  border: 1.3px solid #e1e1e1;
  border-radius: 50%;
  margin-right: 10px;
}
.chosenCircle {
  background: #32a5df;
}
// modal styles
.modal-header {
  border: none;
}
.modalButton {
  background: #ff7c32;
  border: none;
  border-radius: 6px;
  width: 341px;
  height: 50px;
}
.modalButtonText {
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
</style>
