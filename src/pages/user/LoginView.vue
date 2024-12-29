<template>
  <vuyah-container>
    <img src="@/shared/img/logo.svg" alt="Vue logo" class="logo" width="40" height="40" />
    <h1>Log in</h1>
    <form>
      <vuyah-input id="user-name" placeholder="Username" type="text" />
      <vuyah-input id="user-password" placeholder="Password" type="password" />
      <hr />
      <vuyah-button type="submit" text="Login" />
      <vuyah-button type="button" text="Sign up" />
      <div class="text-button-container">
        <div>Forgot username?</div>
        <div>Forgot password?</div>
      </div>
    </form>
  </vuyah-container>
</template>

<script setup lang="ts">
import VuyahButton from "@/shared/ui/VuyahButton.vue";
import VuyahContainer from "@/shared/ui/VuyahContainer.vue";
import VuyahInput from "@/shared/ui/VuyahInput.vue";
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;

  align-self: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.7rem;

  > div.text-button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;

    font-weight: bold;
    cursor: pointer;
  }

  hr {
    border: none;
    border-top: solid 0.2em var(--color-text);
  }
}
</style>
