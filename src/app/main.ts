import "@/app/styles/main.css";

import { createApp } from "vue";
import App from "@/app/App.vue";
import usePlugins from "@/app/plugins";

const app = createApp(App);

usePlugins(app);

app.mount("#app");
