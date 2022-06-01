import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import paths from "./components/routing/router";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: paths,
  mode: "history",
  base: "/",
});
Vue.config.errorHandler = (err, vm, info) => {
  console.error(err, vm, info);
};
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
