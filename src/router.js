import { createWebHistory, createRouter } from "vue-router";

const userRoutes = [
  {
    path: "/",
    redirect: "/banks"
  },
  {
    path: "/banks",
    name: "banks",
    component: () => import("./components/Banks")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: () => import("./components/pageNotFound")
  }
];

const adminRoutes = [
  {
    path: "/",
    redirect: "/banks"
  },
  {
    path: "/banks",
    name: "banks",
    component: () => import("./components/Banks")
  },
  {
    path: "/addBank",
    name: "addBank",
    component: () => import("./components/AddBank")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: () => import("./components/pageNotFound")
  }
];

const authRoutes = [
  {
    path: "/",
    name: "login",
    component: () => import("./components/Login")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect:"/"
    // name: "pageNotFound",
    // component: () => import("./components/pageNotFound")
  }
];
const role = localStorage.getItem("role");

let routes = role ? (role === "Admin" ? adminRoutes : userRoutes) : authRoutes;
let router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
