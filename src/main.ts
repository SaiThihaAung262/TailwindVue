import { createApp } from "vue";
import App from "./App.vue";
import { setupRoutes } from "./router";
import "./style/index.scss";
import { pinia } from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, fab, far);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

setupRoutes(app);
app.use(pinia);

app.mount("#app");
