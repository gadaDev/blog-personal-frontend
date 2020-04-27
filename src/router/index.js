import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/book",
    name: "book",
    component: () => import("../views/book.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/chat.vue"),
  },
  {
    path: "auth",
    name: "auth",
    component: () => import("../views/auth.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
