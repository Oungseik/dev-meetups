<script setup>
import HeaderLayout from "./components/layouts/HeaderLayout.vue";
</script>

<template>
  <v-app>
    <HeaderLayout />

    <main></main>
    <RouterView />
  </v-app>
</template>
