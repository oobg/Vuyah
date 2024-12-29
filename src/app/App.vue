<template>
  <component :is="layout" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const DefaultLayout = defineAsyncComponent(() => import("@/widget/layout/DefaultLayout.vue"));
const layout = computed(() => route.meta.layout || DefaultLayout);
</script>

<style scoped></style>
