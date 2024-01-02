import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { createPinia } from "pinia";

const pinia = createPinia();

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faUserSecret, faPlus, faClock);

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(pinia)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
