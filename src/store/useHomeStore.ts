import { defineStore } from "pinia";

import { useLocalStorage } from "@vueuse/core";

export const useHomeStore = defineStore("home-store", {
  state: () => {
    return {
      lang: useLocalStorage("lang", "en"),
    };
  },
});
