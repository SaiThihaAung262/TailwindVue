<template>
  <nav-bar />
  <div
    class="w-screen h-screen max-w-[1920px] m-auto overflow-y-scroll relative"
  >
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import NavBar from "../components/NavBar/index.vue";
</script>

<style lang="scss" scoped></style>
