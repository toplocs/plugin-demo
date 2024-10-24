<template>
  <div>
    <h1>Plugin Demo</h1>
    <component :is="PluginComponent" :msg="message" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const PluginComponent = ref(null);
const message = 'Props test!';

const loadScript = async (url: string) => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to load the UMD module');
    }
    const moduleCode = await response.text();

    return eval(moduleCode);
  } catch(e) {
    console.error(e);
  }
}

onMounted(async () => {
  await loadScript('http://localhost:3000/plugin-demo.umd.cjs');
  const pluginDemo = window['Plugin-Demo'];

  PluginComponent.value = pluginDemo.setup({
    props: { msg: message },
  });
});
</script>