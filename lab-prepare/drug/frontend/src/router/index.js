import { createRouter, createWebHistory } from "vue-router";

import DrugIndex from "../views/DrugIndex.vue";
import DrugDetail from "../components/DrugDetail.vue";

// using web history
const routerHistory = createWebHistory();

// routing
// https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
const routes = [
  { path: "/", redirect: "/drugs" },
  { path: "/drugs", name: "DrugIndex", component: DrugIndex },
  {
    path: "/detail/:_id/:name/:dose/:package/:unit",
    name: "DrugDetail",
    component: DrugDetail,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

import store from "../store";

// clear message before each route
router.beforeEach((to, from, next) => {
  store.clearMessage();
  next();
});
// export router
export default router;
