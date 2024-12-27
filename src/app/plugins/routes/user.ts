import { defineAsyncComponent } from "vue";

const BlankLayout = defineAsyncComponent(() => import("@/widget/layout/BlankLayout.vue"));

export default {
  path: "/user",
  meta: { layout: BlankLayout },
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
}
