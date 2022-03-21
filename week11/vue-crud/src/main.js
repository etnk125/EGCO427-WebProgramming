import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import "./index.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createApp(App).use(router).mount("#app");
