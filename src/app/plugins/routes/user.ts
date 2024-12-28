import { defineAsyncComponent } from "vue";

export default {
  path: "/user",
  meta: {
    layout: defineAsyncComponent(() => import("@/widget/layout/EmptyLayout.vue")),
  },
  children: [
    {
      path: "",
      name: "user-default",
      component: () => import(/* webpackChunkName: "user" */ "@/pages/user/DefaultView.vue"),
    },
    {
      path: "profile",
      name: "user-profile",
      component: () => import(/* webpackChunkName: "user" */ "@/pages/user/ProfileView.vue"),
    },
    {
      path: "settings",
      name: "user-settings",
      component: () => import(/* webpackChunkName: "user" */ "@/pages/user/SettingsView.vue"),
    },
  ],
};
