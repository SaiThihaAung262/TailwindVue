<template>
  <div class="flex flex-wrap">
    <div
      class="w-full md:w-1/2 sm:w-full lg:w-1/3 h-auto text-cente p-3 transition ease-in-out delay-150 hover:rotate-2 duration-300"
    >
      <figure
        class="md:flex bg-silver rounded-lg p-8 md:p-0 bg-gradient-to-r from-purple to-metal"
      >
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-lg rounded-full mx-auto object-cover"
          src="https://i.pinimg.com/474x/97/aa/84/97aa847d061a14894178805f1d551500.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4 text-silver">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>

    <div
      class="w-full md:w-1/2 sm:w-full lg:w-1/3 h-auto text-cente p-3 transition ease-in-out delay-150 hover:rotate-2 duration-300"
    >
      <figure
        class="md:flex bg-silver rounded-lg p-8 md:p-0 bg-gradient-to-r from-purple to-metal"
      >
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-lg rounded-full mx-auto object-cover"
          src="https://i.pinimg.com/474x/97/aa/84/97aa847d061a14894178805f1d551500.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4 text-silver">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>

    <div
      class="w-full md:w-1/2 sm:w-full lg:w-1/3 h-auto text-cente p-3 transition ease-in-out delay-150 hover:rotate-2 duration-300"
    >
      <figure
        class="md:flex bg-silver rounded-lg p-8 md:p-0 bg-gradient-to-r from-purple to-metal"
      >
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-lg rounded-full mx-auto object-cover"
          src="https://i.pinimg.com/474x/97/aa/84/97aa847d061a14894178805f1d551500.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4 text-silver">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

// defineProps<{ msg: string }>();

const count = ref(0);
</script>

<style lang="scss" scoped>
.Helloworld {
  .text {
    color: blue;
  }
}
</style>
