<template>
  <nav
    class="navbar bg-orange-50 z-10 fixed flex flex-wrap justify-between items-center w-screen h-10 lg:h-20 md:h-20 sm:h10 pl-10 pr-10"
  >
    <h1
      class="text-midnight text-title-md font-semibold lg:text-title-lg md:text-title-md sm:text-title-md"
    >
      Website title
    </h1>
    <div class="text-midnight flex justify-between w-[120px]">
      <font-awesome-icon
        class="w-7 h-7 cursor-pointer"
        icon="fa-brands fa-github"
      />
      <font-awesome-icon
        class="w-7 h-7 cursor-pointer"
        icon="fa-brands fa-facebook"
      />
      <font-awesome-icon
        class="w-7 h-7 cursor-pointer"
        icon="fa-brands fa-telegram"
      />
    </div>
  </nav>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
