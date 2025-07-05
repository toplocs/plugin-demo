<template>
  <main class="m-4">
    <Card>
      <h2>Chat Component</h2>
      <p>{{ message }}</p>
    </Card>
  </main>
</template>

<script setup lang="ts">
import '../assets/main.css';
import Card from './common/Card.vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
