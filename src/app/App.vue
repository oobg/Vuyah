<template>
  <component :is="layout" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/widget/layout/DefaultLayout.vue";

const route = useRoute();
const layout = ref();

watch (
  () => route.meta.layout,
  (newLayout) => {
    layout.value = newLayout || DefaultLayout;
  }
);
</script>

<style scoped></style>
