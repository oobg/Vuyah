import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/widget/layout/DefaultLayout.vue";
import DefaultView from "@/pages/DefaultView.vue";

import user from "./user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DefaultView,
      meta: { layout: DefaultLayout },
    },
    user,
  ],
})

export default router;
