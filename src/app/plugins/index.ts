import type { App } from "vue";
import { createPinia } from "pinia";
import router from "./routes";

export default function usePlugins(app: App): void {
  app.use(createPinia());
  app.use(router);
}
