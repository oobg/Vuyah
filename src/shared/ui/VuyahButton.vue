<template>
  <Button :type="type">{{ text }}</Button>
</template>

<script setup lang="ts">
defineProps<{
  type: "submit" | "button";
  text: string;
}>();
</script>

<style scoped>
Button {
  padding: 0.5rem;
  border: solid 0.1em var(--color-primary);
  border-radius: 0.5rem;

  background-color: transparent;

  cursor: pointer;

  color: var(--color-heading);

  font-size: 1.2rem;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-background-soft);
  }
}
</style>
