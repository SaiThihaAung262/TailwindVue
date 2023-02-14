<template>
  <div class="dark:bg-midnight w-screen h-screen overflow-y-scroll relative">
    <nav-bar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import NavBar from "../components/NavBar/index.vue";
</script>

<style lang="scss" scoped></style>
