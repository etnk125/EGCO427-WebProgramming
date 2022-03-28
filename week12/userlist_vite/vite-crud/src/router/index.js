import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Users from "../views/Users.vue";
import AddUser from "../views/AddUser.vue";
import UpdateUser from "../views/UpdateUser.vue";

const routerHistory = createWebHistory();

const routes = [
  { path: "/", redirect: "/users" },
  { path: "/home", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/users", name: "User", component: Users },
  { path: "/adduser", name: "AddUser", component: AddUser },
  { path: "/updateuser/:userId", name: "UpdateUser", component: UpdateUser },
  { path: "/:catchAll(.*)*", redirect: "/users" },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
