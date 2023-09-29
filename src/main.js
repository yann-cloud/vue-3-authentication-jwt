import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome';
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

const app = createApp(App);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  )

  app.component(
    componentName, componentConfig.default || componentConfig 
  );
  })

  app.use(router).use(store).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

  // .use(router)
  // .use(store)
  // .component("font-awesome-icon", FontAwesomeIcon)
  // .mount("#app");
