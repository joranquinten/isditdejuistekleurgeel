import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import App from "./components/App";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
