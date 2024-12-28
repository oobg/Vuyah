import { defineAsyncComponent } from "vue";
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalizedLoadedGeneric,
  type Router
} from "vue-router";

import user from "./user";

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  routes: [
    {
      path: "/",
      name: "home",
      component: defineAsyncComponent(() => import("@/pages/DefaultView.vue")),
    },
    user,
  ],
})

// Remove trailing slashes from all routes (e.g., /user/ becomes /user)
router.beforeEach((
  to: RouteLocationNormalizedLoadedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext): void => {
  if (to.path !== "/" && to.path.endsWith("/")) {
    const path = to.path.slice(0, -1);
    next({ path, query: to.query, hash: to.hash });
  } else {
    next();
  }
});

export default router;
