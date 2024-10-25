<template>
  <div>
    <h2>Plugin Component</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: true,
  }
});
</script>
