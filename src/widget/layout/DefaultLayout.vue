<template>
  <default-header />
  <main>
    <router-view />
  </main>
  <default-footer />
</template>

<script setup lang="ts">
import DefaultHeader from "@/widget/header/DefaultHeader.vue";
import DefaultFooter from "@/widget/footer/DefaultFooter.vue";
</script>

<style scoped></style>
