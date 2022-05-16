<template>
  <div class="main d-flex flex-row justify-content-start align-items-center">
    <img src="" alt="" class="logo" />
    <div class="title">{{ title }}:</div>
    <div class="name">{{ name }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { required: true, type: String },
  name: { required: true, type: String },
});
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 17px;
  gap: 10px;

  width: auto;
  height: 48px;

  background: #ffffff;
  border-radius: 10px;
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;

  /* identical to box height, or 17px */

  /* Primary */
  color: #17a1fa;
}
.name {
  /* text04 */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;

  /* identical to box height, or 17px */

  /* Primary */
  color: #3c4e69;
}
</style>
