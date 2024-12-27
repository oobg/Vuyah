import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/widget/layout/DefaultLayout.vue";
import DefaultView from "@/pages/DefaultView.vue";

import user from "./user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
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

// Remove trailing slashes from all routes (e.g., /user/ becomes /user)
router.beforeEach((to, from, next) => {
  if (to.path !== "/" && to.path.endsWith("/")) {
    const path = to.path.slice(0, -1);
    next({ path, query: to.query, hash: to.hash });
  } else {
    next();
  }
});

export default router;
