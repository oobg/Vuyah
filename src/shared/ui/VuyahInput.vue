<template>
  <div class="input-container">
    <label :for="id">{{ placeholder }}</label>
    <input v-model="model" :id="id" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel();

defineProps<{
  id: string;
  type: string;
  placeholder: string;
}>();
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  label {
    font-size: 1.2rem;
    font-weight: bold;
  }

  input {
    padding: 0.5rem;
    border: solid 0.1em var(--color-primary);
    border-radius: 0.5rem;

    box-shadow: inset 0 0 0.5em var(--color-primary);

    width: 100%;
    height: 2.7rem;
    background-color: transparent;

    color: var(--color-text);

    &:focus {
      outline: none;
      box-shadow: 0 0 2em var(--color-primary);
    }
  }
}
</style>
