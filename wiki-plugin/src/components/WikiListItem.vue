<template>
  <span
    class="flex items-center p-2 w-full border-t border-gray-100 dark:border-gray-700 hover:bg-blue-50 text-blue-500 dark:hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
  > {{ title }}
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>