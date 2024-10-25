<template>
  <div id="app">
    <h1>Main Application</h1>
    <!-- Render the dynamically loaded plugin component -->
    <component :is="pluginComponent" message="test" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { loadPlugin } from "./utils/plugin-loader";

const pluginComponent = ref(null);

onMounted(async () => {
  const pluginUrl = 'http://localhost:3000/pluginComponent.es.js';
  pluginComponent.value = await loadPlugin(pluginUrl);
  console.log(pluginComponent.value);
});
</script>
