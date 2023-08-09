import { createApp } from "vue";
import App from "./App.vue";

import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/lara-dark-purple/theme.css";
const app = createApp(App);
import PrimeVue from "primevue/config";

app.mount("#app");
app.use(PrimeVue);