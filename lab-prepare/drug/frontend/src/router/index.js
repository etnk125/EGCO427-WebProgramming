import { createRouter, createWebHistory } from "vue-router";

import Main from "../components/Main.vue";
import Detail from "../components/Detail.vue";

// using web history
const routerHistory = createWebHistory();

// routing
// https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
const routes = [
  { path: "/", redirect: "/main" },
  { path: "/main", name: "Main", component: Main },
  { path: "/drug/:id", name: "drug", component: Detail },
  // { path: "/contact/:id/edit", name: "ContactEdit", component: ContactEdit },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

// export router
export default router;
