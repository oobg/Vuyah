<template>
  <header>
    <img src="@/shared/img/logo.svg" alt="Vue logo" class="logo" width="30" height="30" />
    <h1>Vuyah</h1>
    <flex-spacer />
    <icon-community />
    <icon-documentation />
    <icon-ecosystem />
    <icon-support />
    <icon-tooling />
  </header>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import FlexSpacer from "@/shared/ui/FlexSpacer.vue";

const IconCommunity = defineAsyncComponent(
  () => import("@/shared/img/main-icon/IconCommunity.vue"),
);
const IconDocumentation = defineAsyncComponent(
  () => import("@/shared/img/main-icon/IconDocumentation.vue"),
);
const IconEcosystem = defineAsyncComponent(
  () => import("@/shared/img/main-icon/IconEcosystem.vue"),
);
const IconSupport = defineAsyncComponent(() => import("@/shared/img/main-icon/IconSupport.vue"));
const IconTooling = defineAsyncComponent(() => import("@/shared/img/main-icon/IconTooling.vue"));
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  padding: 0 0.5rem;
}
</style>
