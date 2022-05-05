<template>
  <div class="choice">
    <div class="choiceTitle">{{ title }}</div>
    <div class="blueLine"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { required: true, type: String },
  data: { required: true, type: Number },
  modelValue: { required: true, type: Number },
});
</script>

<style lang="scss" scoped>
.choiceTitle {
  margin: 0 1rem 0 1rem;
  /* text02 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 140%;

  /* identical to box height, or 21px */
  display: flex;
  align-items: center;

  /* Primary */
  color: #3c4e69;
}
.active {
  border: 1rem solid blue;
}
</style>
