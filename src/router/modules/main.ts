import { RouteRecordRaw } from "vue-router";

export const mainRouters = [
  {
    path: "/home",
    name: "home",
    component: () => import("./../../pages/Home/index.vue"),
  },
];

export const mainRoutes: RouteRecordRaw = {
  path: "/",
  component: () => import("./../../layouts/MainLayout.vue"),
  redirect: "/home",
  children: [...mainRouters],
};
