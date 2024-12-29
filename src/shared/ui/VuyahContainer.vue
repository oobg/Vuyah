<template>
  <section class="vuyah-container">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.vuyah-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  max-width: 576px;
  max-height: 100%;

  border: solid 0.2em var(--color-primary);
  border-radius: 1rem;

  box-shadow: var(--color-primary) 0 0 1em;

  padding: 1rem;

  min-width: 375px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
}
</style>
