import { createApp } from "vue";
import App from "./App.vue";
import { setupRoutes } from "./router";
import "./style/index.scss";
import { pinia } from "./store";

const app = createApp(App);
setupRoutes(app);
app.use(pinia);

app.mount("#app");
