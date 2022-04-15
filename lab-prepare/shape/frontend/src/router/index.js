import { createRouter, createWebHistory } from "vue-router";

// import page
import QObjectList from "../components/QObjectList.vue";
import Detail from "../components/Detail.vue";

// using web history
const routerHistory = createWebHistory();

// routing
// https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
const routes = [
  {
    path: "/",
    name: "QObjectList",
    component: QObjectList,
  },
  {
    path: "/detail/:_id/:objtype/:height/:width/:depth",
    // path: "/detail/:objid/:objtype/:height/:width/:depth",
    // path: "/detail",
    name: "Detail",
    component: Detail,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

// export router
export default router;
