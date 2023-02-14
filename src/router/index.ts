import { create } from "lodash";
import { App } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { mainRoutes } from "./modules/main";

export const routes: Array<RouteRecordRaw> = [
  mainRoutes,
  {
    path: "/other",
    component: () => import("/@/layouts/MainLayout.vue"),
    children: [],
  },
  {
    path: "/:patchAll(\\S+)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export function setupRoutes(app: App) {
  app.use(router);
}

export default router;
