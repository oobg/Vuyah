import DefaultLayout from "@/widget/layout/DefaultLayout.vue";

export default {
  path: "/user",
  meta: { layout: DefaultLayout },
  children: [
    {
      path: "/profile",
      name: "profile",
      component: () => import(/* webpackChunkName: "User" */ "@/pages/User/ProfileView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import(/* webpackChunkName: "User" */ "@/pages/User/SettingsView.vue"),
    },
  ],
}
