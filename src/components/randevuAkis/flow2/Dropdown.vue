<template>
  <div
    @click="handleCircle(item)"
    class="dropdownItem d-flex align-items-center justify-content-start"
  >
    <div :class="{ chosenCircle: isCircleChosen }" class="circle"></div>
    <div class="dropdownText">
      {{ hospital }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  hospital: { required: true, type: String },
  //   subTitle: { required: true, type: String },
  //   collapseData: { required: true, type: Array },
  //   data: { required: true, type: String },
  //   dropdownData: { required: true, type: Array },
  //   modelValue: { required: true, type: Number },
});
</script>

<style scoped lang="scss"></style>
