<template>
  <default-header />
  <main>
    <router-view />
    <flex-spacer />
    <default-footer />
  </main>
</template>

<script setup lang="ts">
import DefaultHeader from "@/widget/header/DefaultHeader.vue";
import DefaultFooter from "@/widget/footer/DefaultFooter.vue";
import FlexSpacer from "@/shared/ui/FlexSpacer.vue";
</script>

<style scoped></style>
