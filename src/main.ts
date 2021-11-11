// Vue
import { createApp } from "vue";
import App from "./App.vue";

// Vue Router
import { router } from "./router/index";

// WindiCSS
import "virtual:windi.css";
import "virtual:windi-devtools";

// Global CSS
import "./assets/global.css";

createApp(App).use(router).mount("#app");
