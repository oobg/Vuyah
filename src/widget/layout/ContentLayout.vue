<template>
  <default-header />
  <main>
    <router-view />
    <default-footer />
  </main>
</template>

<script setup lang="ts">
import DefaultHeader from "@/widget/header/DefaultHeader.vue";
import DefaultFooter from "@/widget/footer/DefaultFooter.vue";
</script>

<style scoped>
main > router-view {
  flex: 1;
  overflow: auto;
}

main > footer {
  flex-shrink: 0;
}
</style>
