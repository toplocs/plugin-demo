<template>
  <div id="app">
    <h1 className="font-bold border-b">Main Application</h1>

    <RemotePlugin message="cooli" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import { loadPlugin } from "./utils/plugin-loader";

const RemotePlugin = defineAsyncComponent(() => import("remote_app/Plugin"));
console.log(RemotePlugin);
</script>
