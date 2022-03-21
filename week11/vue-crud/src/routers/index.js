import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Article from "../views/Article.vue";

const routerHistory = createWebHistory();

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home ", component: Home },
  { path: "/about", name: "About ", component: About },
  { path: "/helloworld", name: "Helloworld ", component: HelloWorld },
  { path: "/article", name: "Article ", component: Article },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
