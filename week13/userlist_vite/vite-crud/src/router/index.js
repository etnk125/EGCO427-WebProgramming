import { createRouter, createWebHistory } from "vue-router";
import Users from "../views/Users.vue";
import AddUser from "../views/AddUser.vue";
import UpdateUser from "../views/UpdateUser.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

import { getAuth } from "firebase/auth";

//const routerHistory = createWebHistory()

const routes = [
  {
    path: "/",
    redirect: "/signin",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/signin",
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/adduser",
    name: "AddUser",
    component: AddUser,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/updateuser/:userId",
    name: "UpdateUser",
    component: UpdateUser,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = getAuth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    console.log("You are not authorized to access this area");
    next("signin");
  } else if (!requiresAuth && currentUser) {
    console.log("You care authorized to access this area");
    next("users");
  } else {
    next();
  }
});

export default router;
