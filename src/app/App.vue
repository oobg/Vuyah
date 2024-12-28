<template>
  <component :is="layout" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/widget/layout/DefaultLayout.vue";

const route = useRoute();
const layout = computed(() => route.meta.layout || DefaultLayout);
</script>

<style scoped></style>
