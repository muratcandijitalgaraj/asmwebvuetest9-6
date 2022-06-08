<template>
  <div>
    Lorem ipsum dolor
    {{ clinic }}
  </div>
</template>

<script setup>
const props = defineProps({
  clinic: { required: true, type: String },
});
</script>

<style></style>
