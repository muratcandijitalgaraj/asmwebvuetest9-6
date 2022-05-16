<template>
  <div class="main">
    <img src="" alt="" class="logo" />
    <div class="title">{{ title }}</div>
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
</style>
