import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueKinesis from "vue-kinesis";
import VueCookies from "vue3-cookies";

createApp(App).use(router).use(VueKinesis).use(VueCookies).mount("#app");
