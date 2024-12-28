import "@/app/styles/main.css";

import { createApp, type App } from "vue";
import EntryPoint from "@/app/App.vue";
import usePlugins from "@/app/plugins";

const app: App<Element> = createApp(EntryPoint);

usePlugins(app);

app.mount("#app");
