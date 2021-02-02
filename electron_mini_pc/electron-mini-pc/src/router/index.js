import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/Setting.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
