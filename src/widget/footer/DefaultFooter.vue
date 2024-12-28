<template>
  <footer>
    <p>Copyright © {{ copyRightYear }}. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const copyRightYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
</style>
