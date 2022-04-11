import { createRouter, createWebHistory } from "vue-router";
import CityList from "../components/CityList.vue";
import Info from "../components/Info.vue";
// import SignIn from "@/components/SignIn";
// import SignUp from "@/components/SignUp";

let routes = [
  { path: "/", redirect: "/cities" },
  {
    path: "/cities",
    name: "CityList",
    component: CityList,
  },
  {
    path: "/info/:city",
    name: "Info",
    component: Info,
  },
  // {
  //   path: "/signin",
  //   name: "SignIn",
  //   component: SignIn,
  // },
  // {
  //   path: "/signup",
  //   name: "Signp",
  //   component: SignUp,
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
